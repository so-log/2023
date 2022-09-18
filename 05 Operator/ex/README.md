# 07-01

```javascript
// 산술 연산자
5 * 4; // -> 20
// 문자열 연결 연산자
"My name is " + "Lee"; // -> 'My name is Lee'
// 할당 연산자
color = "red"; // -> 'red'
// 비교 연산자
3 > 5; // -> false
// 논리 연산자
true && false; // -> false
// 타입 연산자
typeof "Hi"; // -> string
```

# 07-02

```javascript
5 + 2; // -> 7
5 - 2; // -> 3
5 * 2; // -> 10
5 / 2; // -> 2.5
5 % 2; // -> 1
```

# 07-03

```javascript
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++; // x = x + 1;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--; // x = x - 1;
console.log(x); // 1
```

# 07-04

```javascript
var x = 5,
    result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당(prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
```

# 07-05

```javascript
// 아무런 효과가 없다.
+10; // -> 10
+-10; // -> -10
```

# 07-06

```javascript
var x = "1";

// 문자열을 숫자로 타입 변환한다.
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // "1"

// 불리언 값을 숫자로 타입 변환한다.
x = true;
console.log(+x); // 1
// 부수 효과는 없다.
console.log(x); // true

// 불리언 값을 숫자로 타입 변환한다.
x = false;
console.log(+x); // 0
// 부수 효과는 없다.
console.log(x); // false

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
x = "Hello";
console.log(+x); // NaN
// 부수 효과는 없다.
console.log(x); // "Hello"
```

# 07-07

```javascript
// 부호를 반전한다.
-(-10); // -> 10

// 문자열을 숫자로 타입 변환한다.
-"10"; // -> -10

// 불리언 값을 숫자로 타입 변환한다.
-true; // -> -1

// 문자열은 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-"Hello"; // -> NaN
```

# 07-08

```javascript
// 문자열 연결 연산자
"1" + 2; // -> '12'
1 + "2"; // -> '12'

// 산술 연산자
1 + 2; // -> 3

// true는 1로 타입 변환된다.
1 + true; // -> 2

// false는 0으로 타입 변환된다.
1 + false; // -> 1

// null은 0으로 타입 변환된다.
1 + null; // -> 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // -> NaN
1 + undefined; // -> NaN
```

# 07-09

```javascript
var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str); // 'My name is Lee'
```

# 07-10

```javascript
var x;

// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10
```

# 07-11

```javascript
var a, b, c;

// 연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// ① c = 0 : 0으로 평가된다
// ② b = 0 : 0으로 평가된다
// ③ a = 0 : 0으로 평가된다
a = b = c = 0;

console.log(a, b, c); // 0 0 0
```

# 07-12

```javascript
// 동등 비교
5 == 5; // -> true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == "5"; // -> true
```

# 07-13

```javascript
// 동등 비교. 결과를 예측하기 어렵다.
"0" == ""; // -> false
0 == ""; // -> true
0 == "0"; // -> true
false == "false"; // -> false
false == "0"; // -> true
false == null; // -> false
false == undefined; // -> false
```

# 07-14

```javascript
// 일치 비교
5 === 5; // -> true

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === "5"; // -> false
```

# 07-15

```javascript
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // -> false
```

# 07-16

```javascript
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); // -> true
Number.isNaN(10); // -> false
Number.isNaN(1 + undefined); // -> true
```

# 07-17

```javascript
// 양의 0과 음의 0의 비교. 일치 비교/동등 비교 모두 결과는 true이다.
0 === -0; // -> true
0 == -0; // -> true
```

# 07-18

```javascript
-0 === +0; // -> true
Object.is(-0, +0); // -> false

NaN === NaN; // -> false
Object.is(NaN, NaN); // -> true
```

# 07-19

```javascript
// 부동등 비교
5 != 8; // -> true
5 != 5; // -> false
5 != "5"; // -> false

// 불일치 비교
5 !== 8; // -> true
5 !== 5; // -> false
5 !== "5"; // -> true
```

# 07-20

```javascript
// 대소 관계 비교
5 > 0; // -> true
5 > 5; // -> false
5 >= 5; // -> true
5 <= 5; // -> true
```

# 07-21

```javascript
var x = 2;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? "홀수" : "짝수";

console.log(result); // 짝수
```

# 07-22

```javascript
var x = 2,
    result;

// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if (x % 2) result = "홀수";
else result = "짝수";

console.log(result); // 짝수
```
