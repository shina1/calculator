// const btn = document.getElementsByClassName("btn");
const btn = document.querySelectorAll("#num-btn");
const vals = document.querySelector(".vals");
const ans = document.querySelector("#ans");
const clear = document.getElementById("sym-cancel");
const finalResult = document.querySelector(".result");
const plus = document.querySelector(".sym-plus");
const remove = document.querySelector("#remove");
// const cursor = document.querySelector(".cursor").textContent;
// console.log(cursor);
finalResult.textContent = 0;

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    // cursor.style.display = "none";
    vals.textContent += e.target.textContent;
    e.preventDefault();
  });
}
// for clearing the screen at once
clear.addEventListener("click", () => {
  vals.textContent = "";
  finalResult.textContent = "0";
});
// for deleting values one at a time';
remove.addEventListener("click", (e) => {
  vals.textContent.splice(-1);
});

function additions(array) {
  array.reduce((total, init) => {
    console.log((total += init));
    return (total += init);
  }, 0);
}

ans.addEventListener("click", () => {
  let str = vals.textContent;
  let strArr = str.match(/\d+\.\d+|\d+|[^0-9]/g);
  //   console.log(strArr);
  let evalResult;
  for (let i = 0; i < strArr.length; i++) {
    if (i == 0) {
      evalResult = parseFloat(strArr[i]);
      finalResult.textContent = evalResult;
    } else if (!isNaN(strArr[i])) {
      switch (strArr[i - 1]) {
        case "-":
          evalResult -= parseFloat(strArr[i]);
          finalResult.textContent = evalResult;
          break;
        case "+":
          evalResult += parseFloat(strArr[i]);
          finalResult.textContent = evalResult;
          break;
        case "/":
          evalResult /= parseFloat(strArr[i]);
          finalResult.textContent = evalResult;
          break;
        case "x":
          evalResult *= parseFloat(strArr[i]);
          finalResult.textContent = evalResult;
          break;
        case "%":
          evalResult %= parseFloat(strArr[i]);
          finalResult.textContent = evalResult;
          break;
        default:
          finalResult.textContent = 0;
          break;
      }
    }
  }
});
