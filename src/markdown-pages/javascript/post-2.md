---
slug: "/javascript/post-2/"
date: "2021-09-04"
title: "Callback, Promise 그리고 Async Await"
description: "Callback, Promise 그리고 Async Await의 차이점에 대해 정리하였습니다."
---

## Callback이란?
프로그래밍에서 콜백은 다른 코드의 인수로 넘겨주는 실행 가능한 코드를 말한다.

### callback은 언제 사용이 되고 어떻게 사용되는가?
임의의 시간이 지난 후, 인자값으로 받은 string을 호출하는 함수를 작성한다고 가정해보자.

```javascript
function printString(string){
  setTimeout(
    () => {
      console.log(string)
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}
```

A, B, C를 인자값으로 실행시켜보자

```javascript
function printAll(){
  printString("A")
  printString("B")
  printString("C")
}
printAll()

```

아마 아래와 같이 printAll 함수를 실행시킬 때마다 랜덤으로 A, B, C가 출력이 되는 것을 확인할 수 있을 것이다. 이는 이러한 기능들이 비동기식으로 진행이 되기 때문이다. 함수들은 순서대로 실행되지만 각각의 함수들이 끝날 때까지 기다리지 않고 함수를 실행시킨다. 개발자가 작성한 흐름대로 코드를 실행시키기 위해 callback 함수를 사용하여 처리할 수 있다.

![](https://images.velog.io/images/moon3356/post/afc3ad27-6442-4d03-840c-dc486d421710/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-08-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%206.53.44.png)

콜백을 사용한다면, 아래와 같이 작성할 수 있다.

```javascript
function printString(string, callback){
  setTimeout(
    () => {
      console.log(string)
      callback()
    }, 
    Math.floor(Math.random() * 100) + 1
  )
}
```

callback 함수를 원하는 시점에 실행시켜 첫 번째 함수 호출이 끝나면, 두 번째 함수를 실행시킬 수 있다.

```javascript
function printAll(){
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {})
    })
  })
}
printAll()
```

위와 같이 콜백 함수를 이용하여 코드를 작성한다면 문자열 A 호출이 끝나면, B 호출이 되는 것을 확인할 수 있을 것이다.

그런데 이런 콜백으로 비동기 처리를 하는 것에 문제점이 하나 있는데, 바로 ***콜백 헬**을 만들어 낸다는 것이다.
<br></br>

***콜백 헬이란?**

함수 내부에서 함수를 중첩으로 선언하다보면, 코드의 가독성이 매우 떨어지게 된다. 콜백 함수를 사용하여 비동기 처리를 할 때, 콜백 함수 중첩이 계속 이루어지게 되는데 이것을 콜백 헬이라고 한다.

이 콜백 헬 문제를 해결하기 위해서 등장한 것이 **Promise**이다.

## Promise
프로미스는 콜백함수의 단점을 보완하기 위해 등장하게 된 비동기 처리를 위한 객체이다. 

### 프로미스의 3가지 상태
프로미스를 사용할 때 알아야 하는 가장 기본적인 개념이다. 여기서 상태가 의미하는 것은 프로미스의 처리 과정을 의미한다. new Promise로 프로미스를 생성하고 작업이 종료될 때까지 총 3가지 상태를 갖는다.

**pending(대기)**
비동기 처리 로직이 아직 완료되지 않은 상태를 의미한다.

**Fulfilled(이행)**
비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

**Rejected(실패)** 
비동기 처리가 실패하거나 오류가 발생한 상태

프로미스 메소드를 호출하면 대기 상태가 되고, 호출 결과에 따라서 이행 또는 실패 상태로 된다.

### 응답 처리
프로미스 메서드를 호출할 때, 콜백 함수를 선언할 수 있는데, 콜백 함수의 인자로는 resolve와 reject를 사용할 수 있다.

### resolve

```javascript
function getData() {
  return new Promise(function(resolve, reject) {
    var data = 1000;
    resolve(data);
  });
}

getData().then(function(data) {
  console.log(data) // 1000
})

getData 함수에서 생성한 new Promise에서 요청이 처리 완료 되어서 
resolve 콜백 함수로 데이터가 들어간다.

resolve에 할당된 결과값을 then 메소드를 사용해서 사용 가능하다.
```

### rejected
```javascript
function getData() {
  return new Promise(function(resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

getData().then().catch(function(err) {
  console.log(err)
});

getData 함수에서 생성한 new Promise에서 요청이 거절된다면 
reject 콜백 함수로 실패 처리의 결과값을 catch()로 받을 수 있다.

```

## Promise Chaining
프로미스의 특징 중 하나로 여러 개의 프로미스를 연결하여 사용할 수 있다는 특징이 있다. then 메소드를 사용하면 새로운 프로미스 객체를 반환한다. promise 객체가 이행 상태가 되어 resolve를 사용하고 데이터를 받아왔을 때, then 메소드를 사용하여 여러 단계에 걸쳐 데이터를 가공할 수 있다.

아까 콜백 함수의 단점으로 콜백에 빠질 수 있다고 했었는데, Promise에서도 이 체이닝이 길어지게 된다면, Promise hell에 빠질 수 있는 위험이 있다.

이것을 위해 새롭게 비동기 처리를 위해 등장한 것이 Async Await이다.

## async & await

```javascript
async function 함수명() {
  await 비동기_처리_메서드_명();
}

```

위와 같이 비동기 작업이 필요한 메소드가 포함된 함수 앞에 async를 붙인다. 그리고 HTTP 통신을 하는 비동기 처리 코드 앞에 await을 붙인다.

async로 비동기 작업을 할 때 가장 중요한 것은 await을 붙인 메소드가 반드시 프로미스 객체를 반환해야 제대로 작동이 된다.

async await을 사용하면 기존의 비동기 처리 코드 방식으로 사고하지 않아도 코드를 위에서부터 차례대로 이해할 수 있는 장점이 있다.


## 마치며
면접 준비하면서 비동기 처리하는 과정에 대한 개념이 많이 부족하다는 생각이 들었다. 면접에서 잘 이야기할 수 있도록 더 정리를 해야될 것 같다.