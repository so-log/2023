# 06-01

```javascript
// 모두 숫자 타입이다.
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수
```

# 06-02

```javascript
var binary = 0b01000001; // 2진수
var octal = 0o101; // 8진수
var hex = 0x41; // 16진수

// 표기법만 다를 뿐 모두 같은 값이다.
console.log(binary); // 65
console.log(octal); // 65
console.log(hex); // 65
console.log(binary === octal); // true
console.log(octal === hex); // true
```

# 06-03

```javascript
// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); // true
console.log(4 / 2); // 2
console.log(3 / 2); // 1.5
```

# 06-04

```javascript
// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * "String"); // NaN
```

# 06-05

```javascript
// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined
```

# 06-06

```javascript
// 문자열 타입
var string;
string = "문자열"; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱 (ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";
```

# 06-07

```javascript
// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError: hello is not defined
```

# 06-08

```javascript
var template = `Template literal`;
console.log(template); // Template literal
```

# 06-09

```javascript
var str = 'Hello
world.';
// SyntaxError: Invalid or unexpected token
```

# 06-10

```javascript
var template = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/
```

# 06-11

```javascript
var template = `<ul>
  <li><a href="#">Home</a></li>
</ul>`;

console.log(template);
/*
<ul>
  <li><a href="#">Home</a></li>
</ul>
*/
```

# 06-12

```javascript
var first = "So Hee";
var last = "An";

// ES5: 문자열 연결
console.log("My name is " + first + " " + last + "."); // My name is So Hee An.
```
