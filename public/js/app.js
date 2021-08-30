//---------------- 57. BROWSER HTTP REQUESTS WITH FETCH-------------//
/*
console.log("Client side javascript file is loaded!");

// fetch("http://localhost:3000/weather?address=boston").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });
*/

//------------- 58. CREATING A SEARCH FORM -----------------------//
/*
console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form"); //targetting form
const search = document.querySelector("input"); //targetting input


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  console.log(location);

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.location);
          console.log(data.forecast);
        }
      });
    }
  );
});
*/

//------------- 59. WIRING UP THE USER INTERFACE -----------------//
/*
// console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From JS";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      });
    }
  );
});
*/

//----------- 67. DEPLOYING NODE.JS TO HEROKU ----------//

// console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From JS";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
