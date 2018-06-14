(function() {
  // Modal opnening
  count = 0;
  const addClientButton = document.querySelector(".addClientButton");
  const modal = document.querySelector("div.create-client__modal");
  const background = document.querySelector(" .layout__dashboard");

  addClientButton.addEventListener("click", () => {
    if (count === 3) {
      count = 0;
      for (var i = 0; i < STEPS.length; i++) {
        STEPS[i].classList.remove("create-client__modal-step-active");
      }
    }

    modal.classList.toggle("modalClosed");
    STEPS[0].classList.toggle("create-client__modal-step-active");
    CURRENT_STEPPER[0].classList.add("current");
    background.classList.toggle("layout__blur");
  });

  // Form management

  const STEPS = document.querySelectorAll(".step");
  const ACTION_BUTTON = document.querySelector(".create-client__modal-btn");

  const CURRENT_STEPPER = document.querySelectorAll(".stepper__step");
  const CURRENT_STEPPER_COUNT = document.querySelector(".stepper__step-number");

  const INFOS_ACTION_BUTTON = document.querySelector(
    ".create-client__modal-btn span.btn__inner-text:first-child"
  );
  const ALL_INPUTS = document.querySelectorAll("input");

  ACTION_BUTTON.addEventListener("click", function() {
    if (count !== STEPS.length) {
      count++;
      if (CURRENT_STEPPER[count]) {
        CURRENT_STEPPER[count].classList.toggle("current");
      }
    }

    if (STEPS[count - 1]) {
      STEPS[count - 1].classList.toggle("create-client__modal-step-active");
    }

    if (STEPS[count]) {
      STEPS[count].classList.toggle("create-client__modal-step-active");
    } else {
      count = 0;
      modal.classList.toggle("modalClosed");
      background.classList.toggle("layout__blur");
      for (var i = 0; i < ALL_INPUTS.length; i++) {
        ALL_INPUTS[i].value = "";
      }

      for (var i = 0; i < CURRENT_STEPPER.length; i++) {
        CURRENT_STEPPER[i].classList.toggle("current");
      }
    }

    INFOS_ACTION_BUTTON.innerHTML = count + 1 + "/3";
  });
})();
