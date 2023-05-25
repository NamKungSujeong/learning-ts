// // object는 굳이 :object라고 타입 선언을 해줄 필요가 없음
// const player: {
//   name: string;
//   age?: number; // age의 값이 undefined일 수도 있기 때문에 ? 사용
// } = {
//   name: "sujeong",
// };

// if (player.age && player.age < 10) {
//   // age의 값이 undefined일 수도 있기 때문에 age의 존재를 확인해줘야함
// }

type Player = {
  name: string;
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

function playerMaker(name: string): Player {
  return {
    name,
  };
}

const sujeong = playerMaker("sj");
sujeong.age = 26;
