# 08-01

```javascript
// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}
```

# 08-02

```javascript
var num = 2;
var kind;

// if 문
if (num > 0) {
    kind = "양수"; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if...else 문
if (num > 0) {
    kind = "양수";
} else {
    kind = "음수"; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if 문
if (num > 0) {
    kind = "양수";
} else if (num < 0) {
    kind = "음수";
} else {
    kind = "영";
}
console.log(kind); // 양수
```

# 08-03

```javascript
var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind); // 양수
```

# 08-04

```javascript
// x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
var x = 2;
var result;

if (x % 2) {
    // 2 % 2는 0이다. 이때 0은 false로 암묵적 강제 변환된다.
    result = "홀수";
} else {
    result = "짝수";
}

console.log(result); // 짝수
```

# 08-05

```javascript
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? "홀수" : "짝수";
console.log(result); // 짝수
```
