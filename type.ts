// 배열: 자료형[]
// 숫자 number
// 문자열 string
// 논리 boolean

// // object는 굳이 :object라고 타입 선언을 해줄 필요가 없음
// const player: {
//   name: string;
//   age?: number; // optional: age의 값이 undefined일 수도 있기 때문에 ? 사용
// } = {
//   name: "sujeong",
// };

// if (player.age && player.age < 10) {
//   // age의 값이 undefined일 수도 있기 때문에 age의 존재를 확인해줘야함
// }

type Player = {
  readonly name: string; // 다음과 같이 readonly를 사용하면 값 변경 불가능
  age?: number;
};
// 변수를 선언할 때마다 같은 타입을 매번 선언해 줄 수는 없기 때문에 Alias 타입을 선언해줌

// 아래와 같이 필요한 곳에서 선언해주기
const sj: Player = {
  name: "sj",
  age: 26,
};

const js: Player = {
  name: "js",
};

// 함수에서 사용하기

// function playerMaker(name: string): Player {
//   return {
//     name,
//   };
// }

// 화살표 함수에서 사용
const playerMaker = (name: string): Player => {
  return { name };
};

const sujeong = playerMaker("sj");
sujeong.age = 26;

// Tuple : array를 생성할 수 있게 해줌, 최소한의 길이를 가져야함, 특정 위치에 특정 타입이 있어야함
const player2: [string, number, boolean] = ["sj", 26, false];
// player2[0] = 1 따라서 이런 형태는 오류가 뜸

// any : 비어있는 값은 기본적으로 any가 됨, 아무 타입이나 될 수 있기 때문에 되도록 사용하지 않는 것이 좋음

// unknown : 어떤 타입인지 미리 알 수가 없는 변수를 선언할 때, 사용할 때마다 타입 체크를 해줘야 함
let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

// void: 아무것도 return 하지 않는 함수를 대상으로 함
function helloVoid() {
  console.log("x");
}
// 굳이 void를 지정해 주지 않아도 return 값이 없으면 자동으로 void 타입을 지정해줌

//never : 함수가 절대 return 하지 않을 때
// function helloNever():never{
//   return "x"
//   }
// 에러

function helloNever(): never {
  throw new Error("xxx");
}
// return 하지 않고 오류를 발생시킴
