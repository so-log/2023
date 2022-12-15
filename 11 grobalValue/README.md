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
