//Form next and prev button
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const formContainer = document.querySelectorAll(".formContainer")
//All steps
const allSteps = document.querySelectorAll(".step")
let currentStep = 1
function incrementStep() {
    currentStep = currentStep < allSteps.length ? currentStep + 1 : 1
}
function decrementStep() {
    currentStep = currentStep > 1 ? currentStep - 1 : 1
}
function changeForBackBtns() {
    nextBtn.dataset.step = currentStep
    prevBtn.dataset.step = currentStep

    if (parseInt(prevBtn.dataset.step) === 1) {
        prevBtn.classList.add("hideBtn")

    } else {
        prevBtn.classList.remove("hideBtn")
    }

    if (parseFloat(nextBtn.dataset.step) === 5) {
        document.querySelector(".btnWrapper").style.display = "none"
        document.querySelector(".steps").style.display = "none"
    }
}
function changeForm() {
    // 👇 This is the fix
    document.querySelector(".formParentWrapper").setAttribute("data-step", currentStep);

    formContainer.forEach((form) => {
        form.classList.toggle("hide", parseInt(form.dataset.step) !== currentStep);
    });
}
// function changeStepNumber() {
//   allSteps.forEach((step) => {
//     // Remove any previous active class
//     step.classList.remove("active");

//     // Clear inner "Done" text if it exists
//     if (step.classList.contains("lastStep")) {
//       step.textContent = ""; // reset to empty before conditionally adding "Done"
//     }

//     // Activate current step
//     if (parseInt(step.dataset.step) === currentStep) {
//       step.classList.add("active");

//       // If it's the last step, mark it as done
//       if (step.classList.contains("lastStep")) {
//         step.textContent = "✓"; // Or use innerHTML = '<i class="bi bi-check-lg"></i>' for Bootstrap Icon
//         step.classList.add("done");
//       }
//     }
//   });
// }

// NEXT BUTTON
function changeStepNumber() {
  allSteps.forEach((step) => {
    const stepNum = parseInt(step.dataset.step);

    step.classList.remove("active", "done");
    step.textContent = ""; // Clear content like checkmarks

    if (stepNum < currentStep) {
      step.classList.add("done");
      step.textContent = "✓"; // Optional checkmark
    } else if (stepNum === currentStep) {
      step.classList.add("active");
    }
  });
}
nextBtn.addEventListener("click", (e) => {
    //Normal steps if validations are clear
    incrementStep() //incrementing the active state
    changeStepNumber()
    changeForBackBtns()
    changeForm()
})

// BACK BUTTON
prevBtn.addEventListener("click", (e) => {
    decrementStep()
    changeStepNumber()
    changeForBackBtns()
    changeForm()
})
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword.addEventListener('click', () => {
    const isPassword = password.type === 'password';
    password.type = isPassword ? 'text' : 'password';
    eyeIcon.classList.toggle('bi-eye');
    eyeIcon.classList.toggle('bi-eye-slash');
});
const teamButtons = document.querySelectorAll('.team-btn');

teamButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        teamButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked button
        button.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const addMemberBtn = document.getElementById('addMemberBtn');
    const emailInputs = document.getElementById('emailInputs');

    addMemberBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const newInputGroup = document.createElement('div');
        newInputGroup.className = 'mb-3 email-input-group';

        newInputGroup.innerHTML = `
        <input type="email" class="form-control email-input" placeholder="memberemail@gmail.com" />
      `;
        emailInputs.prepend(newInputGroup);

    });
});