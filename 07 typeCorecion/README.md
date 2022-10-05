# 타입 변환

> `명시적 타입변환(explict coercion)` or `타입 캐스팅(type casting)` 은 개발자가 **의도적으로 값의 타입을 변환**하는 것

> `암묵적 타입변환(implicit coercion)` or `타입 강제 변환(type coercion)` 은 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 **자바스크립트 엔진에 의해 암묵적으로 타입이 변환**되는 것

-   명시적 타입변환이나 암묵적 타입변환이 원시 값(primitive value)을 직접 변경하는 것은 아니다. → `변경 불가능한 값(immutable value)`
-   단지, 기존 원시 값을 사용해 다른 타입의 `새로운 원시 값을 생성` 하는 것

<br>
<br>

# 암묵적 타입변환

> 자바스크립트 엔진이 표현식을 평가할 때 개발자의 의도와는 상관없이 `코드의 문맥을 고려해 암묵적으로` 데이터 타입을 강제 변환(암묵적 타입 변환)하는 것

-   암묵적 타입 변환이 발생하면 → `문자열(string), 숫자(number), 불리언(boolean)` 과 같은 `원시 타입(primitive type)` 중 하나로 타입을 자동 변환

<br>

### 문자열 타입으로 변환

```jsx
// 🎯 주의할 것 중심

// 숫자 타입
NaN + '';             // "NaN"
Infinity + ''         // "Infinity"

// null 타입
null + '';            // "null"

// undefined 타입
undefined + '';       // "undefined"

// 심벌 타입
(Symbol()) + '';      // TypeError: Cannot convert a Symbol value to a string

// 객체 타입
({}) + '';            // "[object Object]"
Math + '';            // "[object Math]"
[] + '';              // ""
[10, 20] + '';        // "10,20"
(function(){}_ + '';  // "function(){}"
Array + '';           // "function Array() { [native code] }"
```

<br>

### 숫자 타입으로 변환

```jsx
// 문자열 타입
+""; // 0
+"0"; // 0
+"1"; // 1
+"string" + // NaN
    // 불리언 타입
    true; // 1
+false; // 0

// null 타입
+null; // 0

// undefined 타입
+undefined; // NaN

// 심벌 타입
+Symbol(); // TypeError: Cannot convert a Symbol value to a number

// 객체 타입
+{}; // NaN
+[]; // 0
+[10, 20]; // NaN
+function () {}; // NaN
```

-   `빈 문자열(''), 빈 배열([]), null, false` → `0`
-   `true` → `1`
-   `객체, 빈 배열이 아닌 배열(= 값이 있는 배열), undefined` → `NaN` ( 주의 ! )

<br>

### 불리언 타입으로 변환

> 자바스크립트 엔진은 불리언 타입이 아닌 값을 `Truthy 값(참으로 평가되는 값)` or `Falsy 값(거짓으로 평가되는 값)` 으로 구분한다.

```jsx
// 💡 자바스크립트 엔진이 Falsy 값으로 판단하는 값

+ false
+ undefined
+ null
+ 0, -0
+ NaN
+ ''(빈 문자열)
```

-   `Falsy 값` 을 제외한 모든 값은 `Truthy 값`

<br>
<br>

# 명시적 타입 변환

> 개발자의 의도에 따라 명시적으로 타입을 변경하는 방법에는 대표적으로 다음과 같다.

-   `표준 빌트인(built-in) 생성자 함수` → `String(), Number(), Boolean()` 을 `new 키워드` 없이 호출하는 방법
-   `빌트인(built-in) 메서드 사용하는 방법`
-   암묵적 타입변환

<br>

### 문자열 타입으로 변환

1. `String 생성자 함수를 new 키워드 없이 호출하는 방법`
2. `Object.prototype.toString 메서드를 사용하는 방법`
3. 문자열 연결 연산자를 이용하는 방법

```jsx
// 1. String 생성자 함수를  new 키워드 없이 호출하는 방법
String(1);              // "1"
String(NaN);            // "NaN"
String(Infinity);       // "Infinity"

String(true);           // "true"
String(false);          // "false"

// 2. Object.prototype.toString 메서드를 사용하는 방법
(1).toString();         // "1"
(NaN).toString();       // "NaN";
(Infinity).toString();  // "Infinity"

(true).toString();      // "true"
(false).toString();     // "false"

// 3. 문자열 연결 연산자를 이용하는 방법
1 + '';                 // "1"
...
```

<br>

### 숫자 타입으로 변환

1. `Number 생성자 함수를 new 키워드 없이 호출하는 방법`
2. `parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)`
3. 산술 연산자를 사용하는 방법

```jsx
// 1. Number 생성자 함수를 new 키워드 없이 호출하는 방법
Number("0"); // 0
Number("-1"); // -1
Number("10.53"); // 10.53

Number(true); // 1
Number(false); // 0

// 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
parseInt("0"); // 0
parseInt("-1"); // -1
parseInt("10.53"); // 10
parseFloat("10.53"); // 10.53

// 산술 연산자를 사용하는 방법
+"0"; // 0
```

<br>

### 불리언 타입으로 변환

1. `Boolean 생성자 함수를 new 키워드 없이 호출하는 방법`
2. !(부정 논리 연산자를 두 번 사용하는 방법

```jsx
// 1. Boolean 생성자 함수를 new 키워드 없이 호출하는 방법
Boolean('x');       // true
Boolean('');        // false
Boolean('false');   // true

Boolean(0);         // false
Boolean(1);         // true
Boolean(NaN);       // false
Boolean(Infinity);  // true

Boolean(null);      // false

Boolean(undefined); // false

Boolean({});        // true
Boolean([]);        // true

// 2. !(부정 논리 연산자를 두 번 사용하는 방법
!!'x';  // true ( !(!'x') === !(false) -> true )
...
```

<br>
<br>
