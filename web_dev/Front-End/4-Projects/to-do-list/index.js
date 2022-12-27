var len = 0;
var ind = 1;
/* Plus button functionality */
document.getElementById("plus-button").addEventListener("click", () => {
  addTask();
  lineThrough();
  editTask();
  deleteTask();
});

document.getElementById("plus-button").addEventListener("mouseover", () => {
  document.querySelector("img").style.backgroundColor = "#bbadff";
});
document.getElementById("plus-button").addEventListener("mouseout", () => {
  document.querySelector("img").style.backgroundColor = "#cbb2fe";
});

/* 'Enter' button functionality */
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    document.querySelector("img").style.backgroundColor = "#bbadff";
    addTask();
    lineThrough();
    editTask();
    deleteTask();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    document.querySelector("img").style.backgroundColor = "#cbb2fe";
  }
});

/* To-do task adding function */
function addTask() {
  var inputValue = document.querySelector("input[type=text]").value;
  if (inputValue.length > 0) {
    const span = document.createElement("span");
    span.classList.add("item");
    span.classList.add("item-" + ind);
    span.innerHTML =
      '<span class="message"><input type="checkbox" class="check-box"><p class="note">' +
      document.querySelector("input[type=text]").value +
      '</p></span><span class="edit"><img src="assets/edit-icon.svg" class="edit-button" alt="edit-icon"><img src="assets/delete-icon.svg" class="delete-button" alt="delete-icon"></span>';

    document.querySelector("input[type=text]").value = null;

    document.querySelector(".add-item").appendChild(span);

    len = document.querySelectorAll(".item").length;

    /* Functionality to buttons */
    let deleteSelector = document.querySelector(
      ".item-" + ind + " > .edit > .delete-button"
    );
    deleteSelector.addEventListener("click", function () {
      document.querySelector(this).remove();
      // len = document.querySelectorAll(".item").length;
      // console.log(this);
    });
    // ind++;
  }
}

/* Select and line-through functionality of checkbox */
function lineThrough() {
  let flag = [];
  for (let i = 0; i < len; i++) {
    flag[i] = true;
    let taskSelector = document.querySelectorAll(".check-box")[i];
    taskSelector.addEventListener("click", function () {
      if (flag[i] === true) {
        document.querySelectorAll(".note")[i].style.textDecoration =
          "line-through";
        flag[i] = false;
      } else {
        document.querySelectorAll(".note")[i].style.textDecoration = "none";
        flag[i] = true;
      }
    });
  }
}

// function deleteTask() {
//   for (let i = 0; i < len; i++) {
//     let deleteSelector = document.querySelectorAll(".delete-button")[i];
//     deleteSelector.addEventListener("click", function () {
//       document.querySelector(".item-" + i).remove();
//       console.log("clicked");
//       len = document.querySelectorAll(".item").length;
//     });
//   }
// }

function editTask() {
  for (let i = 0; i < len; i++) {
    let editSelector = document.querySelectorAll(".edit-button")[i];
    editSelector.addEventListener("click", function () {
      let note = document.querySelectorAll(".note")[i].textContent;
      document.querySelectorAll(".item")[i].remove();
      document.querySelector("input[type=text]").value += " " + note;
      len = document.querySelectorAll(".item").length;
    });
  }
}
