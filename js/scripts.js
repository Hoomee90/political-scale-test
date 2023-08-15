// UI logic

function formEventShow(form) {
  document.querySelector("div#" + form).removeAttribute("class");
}

function formSubmissionEventHandler() {
  let form = document.querySelector("#form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let taxInput = document.querySelector("#taxInput").value;
    // for future refactor
    // let trollyInput = document.querySelector("#trollyInput").value;
    let headpatInput = document.querySelector("#headpatInput").value;
  let simulationInput = document.querySelector("#simulationInput").value;
    if ((taxInput > 1 || headpatInput > 1) && simulationInput < 5) {
      formEventShow("resultsNormal");
    }
    else {
      formEventShow("resultsBreakdown");
    }
  }
}

window.onload = function() {
  formSubmissionEventHandler();
}