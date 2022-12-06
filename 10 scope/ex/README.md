# 10-01

```javascript
var person = {
    name: "Lee",
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`);
    },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}
```

# 10-02

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

# 10-03

```javascript
var person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: "Lee",
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20,
};
```

# 10-04

```javascript
var person = {
    firstName: "Ung-mo", // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    "last-name": "Lee", // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}
```

# 10-05

```javascript
var person = {
  firstName: 'Ung-mo',
  last-name: 'Lee' // SyntaxError: Unexpected token -
};
```

# 10-06

```javascript
var obj = {};
var key = "hello";

// ES5: 프로퍼티 키 동적 생성
obj[key] = "world";
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

# 10-07

```javascript
var foo = {
    "": "", // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}
```

# 10-08

```javascript
var foo = {
    0: 1,
    1: 2,
    2: 3,
};

console.log(foo); // {0: 1, 1: 2, 2: 3}
```

# 10-09

```javascript
var foo = {
    var: "",
    function: "",
};

console.log(foo); // {var: "", function: ""}
```

# 10-10

```javascript
var foo = {
    name: "Lee",
    name: "Kim",
};

console.log(foo); // {name: "Kim"}
```

# 10-11

```javascript
var circle = {
    radius: 5, // ← 프로퍼티

    // 원의 지름
    getDiameter: function () {
        // ← 메서드
        return 2 * this.radius; // this는 circle을 가리킨다.
    },
};

console.log(circle.getDiameter()); // 10
```

# 10-12

```javascript
var person = {
    name: "Lee",
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person["name"]); // Lee
```

# 10-13

```javascript
var person = {
    name: "Lee",
};

console.log(person[name]); // ReferenceError: name is not defined
```

# 10-14

```javascript
var person = {
    name: "Lee",
};

console.log(person.age); // undefined
```
