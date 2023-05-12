console.log("hello");
const maxCount = 100;
const textbox = document.querySelector('.msg');
const remainChar = document.querySelector('.remaining__count');

textbox.value = "";

const getWord = () => {
  let remainCount = maxCount - textbox.value.length;
  remainCount >= 0 ? remainChar.innerHTML = remainCount : remainChar.previousSibling.textContent = `Out of Range `;
};

textbox.addEventListener('keyup', getWord);


// let maxcount=100;
// let smstypefun = () => {
//   //get the value of text entered by user with length
//   let texEnteredLength = document.querySelector("#text-area").value.length;
//   console.log(texEnteredLength);

//   //select the span tag
//   let spanTag = document.querySelector("#chars");

//   //get the remaining count ;
//   let remainingcount = maxcount - texEnteredLength;
//   spanTag.innerHTML = remainingcount;
// };

// const getPromiseBurger = new Promise(resolve, reject => {

//   const randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber);

//   if (randomNumber % 2 === 0) {
//     resolve("You get burger");
//   } else {
//     reject("You wont get burger");
//   }

// });

// console.log(getPromiseBurger);