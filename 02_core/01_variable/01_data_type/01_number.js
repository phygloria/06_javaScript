/*
자바의 경우 정수와 실수를 구분해 int, long, float, double 등과 같은 다양한 숫자 타입을 제공한다.
하지만 자바스크립트의 경우 하나의 숫자 타입만 존재하고 모든 수를 실수로 처리한다.
*/

// 자바의 변수 표현식
// 자료형 변수명 = 10; ....변수선언문/변수초기화

// 넘버는 클래스타입
Number();
var inteager = 10; // int short byte long
var double =5.5; // float double
var negative = -10;

console.log(Number("10") * "10");
console.log(typeof integer);
console.log(typeof double);
console.log(typeof negative);

console.log(10 === 10.0); // === 는 '값과 자료형이 완전히 똑같다.'라는 의미 
                          // == 는 '값이 같다'라는 의미

console.log(10/4);

/*
infinity : 양의 무한대
-infinity : 음의 무한대
NaN : 산술 연산 불가
*/
console.log(10/0);
console.log(10/-10);
console.log(1*'문자열');
