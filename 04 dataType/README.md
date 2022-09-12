# 자바스크립트 원시타입과 객체타입

| 구분     | 데이터 타입         | 설명                                               |
| -------- | ------------------- | -------------------------------------------------- |
| 원시타입 | 숫자(number)타입    | 숫자. 정수와 실수 구분 없이 하나의 숫자타입만 존재 |
|          | 문자열(string)타입  | 문자열                                             |
|          | 불리언(boolean)타입 | 논리적 참(true)과 거짓(false)                      |
|          | undefined 타입      | var 키워드로 선언된 변수에 암묵적으로 할당되는 값  |
|          | null 타입           | 값이 없다는 것을 의도적으로 명시할 때 사용하는 값  |
|          | 심벌(symbol) 타입   | ES6에서 추가된 7번째 타입                          |
| 객체타입 |                     | 원시 타입을 제외한 모든 것                         |

<br>
<br>

# 숫자 타입

> 자바스크립트는 `하나의 숫자 타입만 존재` 한다.

-   ECMAScript 사양에 따르면, 숫자 타입은 `배정밀도 64비트 부동소수점 형식` 을 따른다. 즉 모든 수를 `실수(float)로 처리`
-   숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
    -   `Infinity` : 양의 무한대
    -   `-Infinity` : 음의 무한대
    -   `NaN` : Not-a-Number, 산술 연산 불가

<br>
<br>

# 문자열 타입

> 자바스크립트에서 문자열은 `원시타입` 이며, `변경 불가능한 값(immutable value)` 이다. 즉, 문자열이 한번 생성되면 그 문자열은 변경할 수 없다는 것을 의미

-   `작은따옴표('')` , `큰 따옴표("")`, ` 백틱(``) ` 으로 텍스트를 감싼다.

<br>
<br>

# 템플릿 리터럴

> `ES6`부터 템플릿 리터럴(template literal)이라고 하는 `새로운 문자열 표기법` 이 도입되었다.

-   `멀티 라인 문자열(muti-line string)`, `표현식 삽입(expression interpolation)`, `태그드 템플릿(tagged template)` 등 편리한 문자열 처리 기능을 제공
-   템플릿 리터럴은 `런타임(runtime) 에 일반 문자열로 변환`되어 처리
-   템플릿 리터럴은 ` 백틱(``) ` 을 사용해 표현

<br>

### 멀티라인 문자열

```jsx
// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
var str = "Hello
world";
// SyntaxError: Invaild or unexpected token

// 1️⃣ 그래서 HTML 문자열을 작성시 기존 문자열 방식으로는 이스케이프 시퀀스(escape sequence)를 사용해야 한다.
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template);
```

```html
<!-- 1️⃣ - 결과 -->
<ul>
    <li><a href="#">Home</a></li>
</ul>
```

```jsx
// 🔎 2️⃣ - 멀티라인 문자열 사용시
var template = `<ul>
	<li><a href="#">Home</a></li>
</ul>;
console.log(template);

```

```html
<!-- 2️⃣ - 결과 -->
<ul>
    <li><a href="#">Home</a></li>
</ul>
```

<br>

### 표현식 삽입

> 자바스크립트에서 문자열 연결은 `+` 사용해 연결할 수 있다. 하지만 `표현식 삽입(expression interpolation)` 을 통해 더욱 깔끔하고 쉽게 문자열을 삽입할 수 있다.

```jsx
var first = "YOUNG";
var last = "MIN";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is YOUNG MIN.

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is YOUNG MIN.
```
