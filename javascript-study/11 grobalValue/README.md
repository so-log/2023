> 변수도 `생명 주기(life cycle)` 가 있다.

-   변수는 선언에 의해 `생성` → 할당을 통해 `값을 갖음` → 언젠가는 `소멸`
-   변수에 생명주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 `영원히 메모리 공간을 점유`하게 된다.

<br />

# 지역변수 생명 주기

> 지역 변수의 생명 주기는 `함수의 생명 주기와 일치`

-   즉, 함수가 호출되어 실행되는 동안에만 유효하다.

```jsx
function foo() {
    var x = "local";
    console.log(x); // local
    return x;
}

foo();
console.log(x); // ReferenceError: x is not defined  << 🔎
```

<br />

### 지역 변수 호이스팅 스코프

> 지역 변수의 호이스팅은 지역 변수의 선언이 지역 스코프의 선두로 끌어 올려진 것처럼 동작

-   즉, 지역 변수는 함수 전체에서 유효하다.

```jsx
var x = "global";

function foo() {
    console.log(x); // undefined << 🔎
    var x = "local";
}

foo();
console.log(x); // "global"
```

/_
foo 함수 내부에 선언된 x 변수는, foo 함수 호출 시 이미 undefined로 초기화 되어 있음 (변수 선언과정이 이미 끝남, 값 할당과정은 X)
따라서, console 출력문을 만나는 시점에는 아직 x에 값이 할당되기 이전이기 때문에 undefined 를 출력
중요한 것은 최상단에 전역변수 x까지는 스코프가 유효하지 않다는 것, 즉 함수 내부에서 선언된 지역변수는 함수 내에서만 스코프를 가짐
_/

````

<br />
<br />

# 전역 변수 생명 주기

> `var 키워드` 로 선언한 전역 변수의 생명 주기는 `전역 객체의 생명 주기와 일치`

```jsx
[ 💡 "전역 객체" (global object) ]

+ 코드가 실행되기 이전 단계에(즉, 런타임 이전) 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체
+ 브라우저에서는 "window", Node.js 에서는 "global 객체"를 의미
+ ES11에서 "globalThis" 로 전역 객체를 가리키는 식별자를 통일
+ 표준 빌트인 객체(Object, String, Number, Function, Array ...)와 환경에 따른 호스트 객체(브라우저의 Web API 또는 Node.js의 호스트 API), var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 가진다.
````

-   전역 코드는 명시적인 호출 없이 실행된다.
    -   전역 코드는 함수 호출과 같이 전역 코드를 실행하는 특별한 진입점이 없다.
    -   로드되자마자 곧바로 해석(= 평가)되고 실행된다.
    -   함수는 함수 몸체의 마지막 문 or 반환문이 실행되면 종료하지만, 전역 코드는 반환문이 없으므로 마지막 문이 실행되어 더 이상 실행할 코드가 없을 때 비로소 종료한다.
    -   `var 키워드` 로 선언한 전역 변수는 `전역 객체의 프로퍼티` 가 된다.

![https://blog.kakaocdn.net/dn/xMfYs/btrbOPzSE5W/keaxKBha6CSiovT2KTp7tK/img.png](https://blog.kakaocdn.net/dn/xMfYs/btrbOPzSE5W/keaxKBha6CSiovT2KTp7tK/img.png)

<br />
