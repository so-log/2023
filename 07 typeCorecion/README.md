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
