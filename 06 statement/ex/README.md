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
