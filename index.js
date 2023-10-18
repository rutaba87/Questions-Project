const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);
  btn.addEventListener("click", function (e) {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// second method( traversing the dom)
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
// first parent element will indicate the div having class "question-title" while second parent element will indicate the upper parent divthat is article
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });ww1
// });
