// 1. call signature
// 함수위에 마우스를 올렸을 때 보게 되는 것

// function add(a: number, b: number) {
//   return a + b;
// }

// const add = (a: number, b: number) => a + b;

// type Add = { (a: number, b: number): number }; //call signature

// const add: Add = (a, b) => a + b;

// 2. overloading
// Function(=Method) Overloading은 직접 작성하기보다 외부 라이브러리에 자주 보이는 형태로, 하나의 함수가 복수의 Call Signature를 가질 때 발생한다

type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};
// const add: Add = (a, b) => a + b; // 이렇게 작성할 경우 b의 타입이 number도 string도 될 수 있기 때문에 더할 수 없다는 오류 발생

const add: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
}; // 따라서 다음과 같이 타입을 확인해 주어야 함

//polymorphism(다형성) : 여러가지 다른 구조들
// type Polymorphism = {
//   (arr: number[]): void;
//   (arr: boolean[]): void;
//   (arr: string[]): void;
// };

// const polymorphism: Polymorphism = (arr) => {
//   arr.forEach((i) => console.log(i));
// };

// polymorphism([1, 2, 3, 4]);
// polymorphism([true, false, true]);
// polymorphism(["1", "2", "3"]);
//polymorphism(["1", true, 1]); 이런 배열은 call signature가 없기 때문에 오류가 뜸
// 하지만 매번 가능한 모든 타입을 조합해서 call signature를 선언해 줄 수는 없기 때문에 generic을 사용

// generic : type의 placehoder 같은 것으로 generic을 선언하면 ts가 타입을 유츄해줌
// call signature를 사용할 때 들어올 확실한 타입을 모를 때 사용

type Polymorphism = <T>(arr: T[]) => T; // Generic을 하고싶은 이름으로 선언해 줄 수 있음
const polymorphism: Polymorphism = (a) => a[0];

polymorphism([1, 2, 3, 4]);
polymorphism([true, false, true]);
polymorphism(["1", "2", "3"]);
polymorphism(["1", true, 1]);
// 모두 오류 없이 잘 작동

// type Polymorphism = <T, M>(arr: T[], b: M) => T; 다음과 같이 하나 더 선언 가능
// polymorphism([1, 2, 3, 4], 'x');
// polymorphism([true, false, true], 1);
