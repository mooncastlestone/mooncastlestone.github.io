---
slug: "/react/post-2/"
date: "2021-09-15"
title: "useState 내부 구조 탐색"
description: "useState의 내부 구조를 탐색하여 정리하였습니다."
---

React hooks에서 대표적으로 많이 사용하는 상태 관리를 위한 useState. 
리액트로 개발을 진행하면서 많이 사용하고 있는데, 내부적으로 어떤 식으로 상태와 상태를 변경하는 함수를 받아오고 있는지 궁금해서 확인해보고자 한다.

## useState의 내부 구조

React hooks 중 상태를 관리할 수 있는 useState를 사용하면 구조 분해 할당을 사용하여 아래와 같이 상태 값과 상태를 변경할 수 있는 함수를 받아올 수 있다.

```javascript
const [ state, setState ] = useState('test')           

```

이 state와 setState는 어떤 식으로 useState를 통해서 받아와지게 되는 걸까? useState가 선언되어있는 react 모듈을 탐색해보자!

![](https://images.velog.io/images/moon3356/post/c89a9eed-9c2f-420f-8c7a-38fe115a4c2f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.35.05.png)

node_modules > react > cjs > react.development.js에서 위와 같이 useState가 선언되어져 있는 것을 확인할 수 있다. 개발자가 useState를 실행하면 변수 dispatcher를 선언하고 resolveDispatcher 외부 함수를 실행하여 값을 할당받는다. 그리고 변수에 할당된 내부 useState 메소드를 실행한다. 여기서 return 되는 것들이 상태와 상태를 관리하는 함수인 것인데, resolveDispatcher 함수는 어떤 값을 dispatcher 변수에 할당한 것일까? resolveDispatcher를 탐색해보자.


![](https://images.velog.io/images/moon3356/post/1f2ed632-b77c-4d76-a931-b23ee4d753ee/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.38.17.png)

resolveDispatcher 함수를 실행하면 다시 변수 dispatcher를 선언하고 외부에 선언된 ReactCurrentDispatcher 객체의 current를 할당 받는다. 그리고 에러 처리를 진행하고 선언한 변수 dispatcher를 리턴한다. 그렇다면 이번엔 ReactCurrentDispatcher.current는 어떤 값을 dispatcher 변수에 할당한 것일까? 이번에야말로 우리가 원하는 state와 setState를 반환받는 것일까? 다시 한번 탐색해보자..

![](https://images.velog.io/images/moon3356/post/6fb990b6-0399-4ba2-bcf1-93bde0264ce2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.42.17.png)

음..... 없다. 그냥 전역으로 선언된 객체 하나만 있다. 이 객체의 current는 null만을 가지고 있다. 그렇다면 내가 찾고 있는 state와 useState는 또 다른 외부 함수, 변수로부터 받아오는 것일까? 

또다시 ReactCurrentDispatcher가 사용되는 곳을 찾기 위해 탐색을 하다가 아래와 같은 객체를 발견할 수 있었다.

![](https://images.velog.io/images/moon3356/post/885be1d3-1097-4175-b137-5834f968adb2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-02%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%209.49.58.png)

이 ReactSharedInternals 객체에 ReactCurrentDispatcher가 할당이 되어서 활용이 되는 듯 하다. 여기서 더 탐색하다가는 React 관련 코드들을 모조리 뜯어보게 될 것 같아 잠시 멈췄다..

일단은 ReactCurrentDispatcher.current에 내가 선언한 state와 useState가 일련의 과정을 거친 후에 할당된다고 생각하면 될 것 같다.


## 중간 정리
useState를 사용할 때마다 내부 변수 dispatcher를 생성하고 전역으로 선언된 객체로부터 state와 setState를 반환받는다.


## useState와 Closure의 관계성
위에서 살펴보았듯이 useState를 실행하면 dispatcher 내부 변수를 선언하고 외부에 선언된 변수 ReactCurrentDispatcher로부터 state와 setState를 가져온다. 즉, 내부 함수의 변수가 외부 함수의 변수에 접근한다는 것인데, 여기서 우리는  useState가 **Closure** 매커니즘으로 동작이 되는 것을 확인할 수 있다.

## 마치며
평소 그저 사용하기만 하던 하나의 react hook에 정말 많은 코드들이 상호 작용하면서 동작하고 있는 것을 보니, 더 많은 공부를 해야겠다는 생각이 든다...! 더 열심히 하자!!