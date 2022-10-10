# 09-01

```javascript
var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입 캐스팅한다.
var str = x.toString();
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

# 09-02

```javascript
var x = 10;

// 암묵적 타입 변환
// 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
var str = x + "";
console.log(typeof str, str); // string 10

// x 변수의 값이 변경된 것은 아니다.
console.log(typeof x, x); // number 10
```

# 09-03

```javascript
// 피연산자가 모두 문자열 타입이어야 하는 문맥
"10" + 2; // -> '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * "10"; // -> 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0; // -> true
if (1) {
}
```

# 09-04

```javascript
1 + "2"; // -> "12"
```

# 09-05

```javascript
`1 + 1 = ${1 + 1}`; // -> "1 + 1 = 2"
```

# 09-06

```javascript
// 숫자 타입
0 + ''         // -> "0"
-0 + ''        // -> "0"
1 + ''         // -> "1"
-1 + ''        // -> "-1"
NaN + ''       // -> "NaN"
Infinity + ''  // -> "Infinity"
-Infinity + '' // -> "-Infinity"

// 불리언 타입
true + ''  // -> "true"
false + '' // -> "false"

// null 타입
null + '' // -> "null"

// undefined 타입
undefined + '' // -> "undefined"

// 심벌 타입
(Symbol()) + '' // -> TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + ''           // -> "[object Object]"
Math + ''           // -> "[object Math]"
[] + ''             // -> ""
[10, 20] + ''       // -> "10,20"
(function(){}) + '' // -> "function(){}"
Array + ''          // -> "function Array() { [native code] }"
```

# 09-07

```javascript
1 - "1"; // -> 0
1 * "10"; // -> 10
1 / "one"; // -> NaN
```

# 09-08

```javascript
"1" > 0; // -> true
```

# 09-09

```javascript
// 문자열 타입
+"" + // -> 0
    "0" + // -> 0
    "1" + // -> 1
    "string" + // -> NaN
    // 불리언 타입
    true + // -> 1
    false + // -> 0
    // null 타입
    null + // -> 0
    // undefined 타입
    undefined + // -> NaN
    // 심벌 타입
    Symbol() + // -> ypeError: Cannot convert a Symbol value to a number
    // 객체 타입
    {} + // -> NaN
    [] + // -> 0
    [10, 20] + // -> NaN
    function () {}; // -> NaN
```
