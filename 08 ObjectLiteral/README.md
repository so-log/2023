> 자바스크립트는 `객체(object)` 기반의 프로그래밍 언어

-   [원시값(primitive value)](https://developer.mozilla.org/ko/docs/Glossary/Primitive) 을 제외한 나머지 값( `함수`, `배열`, `정규 표현식` 등 )은 모두 객체
-   원시 타입은 하나의 값만 나타내지만 `객체 타입(object / reference type)` 은 `다양한 타입의 값(원시 값 또는 다른 객체)을 하나의 단위로 구성`
-   원시값은 `변경 불가(immutable)` 한 값이지만, 객체는 `변경 가능(mutable)` 한 값
-   객체는 0개 이상의 `프로퍼티(property)` 로 구성된 집합이며, 프로퍼티는 `키(key) : 값(value)` 로 구성
-   자바스크립트에서 `함수(function)` 도 프로퍼티의 값으로 설정가능 → `메서드(method)`

```jsx
var myObj = {
	num: 0,  // 프로퍼티
  increase: function () { ... )  // 메서드
}
```

```jsx
[ 💡 NOTE ]

프로퍼티(property) = 객체의 상태를 나타내는 값(data)
메서드(method) = 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)
```
