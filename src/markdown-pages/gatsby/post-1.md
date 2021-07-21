---
slug: "/gatsby/post-1/"
date: "2020-07-20"
title: "Gatsby 프로젝트에 단위 테스트 세팅하기"
---

코딩 부트캠프에서 두 차례의 프로젝트를 경험하면서 언젠가 한 번 TDD(**_테스트 주도 개발_**)에 대해서 공부해보고 싶다는 생각이 들었었다. 마침 개츠비를 활용한 개인 블로그를 제작하던 중이었고, 개츠비 공식 문서에서 Unit Test 관련된 정보들이 정리되어 있어서 참고하여 진행해보았다.

아래 글은 Gatsby 프로젝트에 Unit Test를 위한 기본 설정 세팅하는 방법에 대해서 정리하였다.
<br>세팅하는 방법에 앞서 단위 테스트란 어떤 것인지에 대해서 먼저 알아보자.

---

<br>

## 단위 테스트란 ?

유닛 테스트(unit test)는 컴퓨터 프로그래밍에서 소스 코드의 특정 모듈이 의도된 대로 정확히 작동하는지 검증하는 절차라고 한다.

즉, 개발자가 작성하는 <u>**모든 함수와 메소드에 대한 테스트 케이스를 작성하는 절차**</u>라고 생각하면 된다.

개츠비에서는 자체적인 유닛 테스팅을 위한 기능들을 지원하지는 않지만, 몇가지 단계를 거친다면 테스트를 진행할 수 있다. 그러나, 테스팅 과정에서 <code>Jest</code> 관련 표준 설정이 제대로 작동하지 않는 몇 가지 기능들이 있다고 한다. 관련된 설정 방법 또한 공식 문서에서 확인할 수 있었다.

\*<code>Jest</code>는 페이스북에서 만든 리액트를 위한 가장 유명한 테스팅 프레임워크이다.
자바스크립트 유닛 테스팅 목적으로 만들어진 프레임워크이지만, 리액트에도 동작하는 기능들이 많다고 한다.
<br></br>

## Dependencies 설치 명령어

```javascript
npm install --save-dev jest babel-jest react-test-renderer babel-preset-gatsby identity-obj-proxy
```

먼저 Jest와 몇가지 필수 패키지들을 설치한다.

```javascript
1. jest
2. babel-jest
3. react-test-renderer
4. babel-preset-gatsby
5. identity-obj-proxy
```

<br>

## 단위 테스트 설정을 위한 파일들

### 1. jest.config.js

Gatsby는 자체 Babel configuration을 사용하기 때문에, 수동적으로 Jest가 <code>babel-jest</code>를 사용하게 설정해야한다.

```javascript
module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`, // 타입스크립트에서는 "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js", 이렇게 설정
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
```

- transform 세션은 Jest에게 모든 js, jsx 파일들은 프로젝트 root 안의 jest-preprocess.js를 사용하여 변환되어져야 한다고 말하는 역할을 한다.

### 2. jest-preprocess.js

```jsx
const babelOptions = {
  presets: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").default.createTransformer(babelOptions)
```

### 3. **mocks**/file-mock.js

```javascript
module.exports = "test-file-stub"
```

### 4. **\*\*mocks**\*\*/gatsby.js
개츠비 모듈 자체가 mock을 할 수 있게 하기 위한 옵션.
<br>Link와 GraphQL을 사용한 컴포넌트를 테스트할 때 간단하게 테스트 할 수 있다.

```javascript
const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
}
```

## 테스트 시작하기

위의 설정들을 마친 후 `package.json` 에 들어가보면 scripts에 test가 생성되어있다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86609ea5-cf1a-434a-8af2-6a5567f65a06/_2021-07-16__6.42.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/86609ea5-cf1a-434a-8af2-6a5567f65a06/_2021-07-16__6.42.50.png)

지금은 gatsby에서 default로 설정한 `에러 메시지`가 들어가있는데 이것을 아래와 같이 설정하면 테스트를 시작할 준비가 완료된다 !

```jsx
"test": "jest"
```

아래는 작성한 테스트가 정상적으로 동작하는 모습이다!

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c6e6a56-58b0-46d6-a3b0-167a22d741e7/_2021-07-16__6.38.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c6e6a56-58b0-46d6-a3b0-167a22d741e7/_2021-07-16__6.38.42.png)