let timer = null;
let currentExercise = 0;

let exercises = [
  { name: "Push Ups", time: 30 },
  { name: "Rest", time: 15 },
  { name: "Squats", time: 30 },
  { name: "Rest", time: 15 },
  { name: "Plank", time: 30 },
];

function startWorkout() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  currentExercise = 0;
  runExercise();
}

function runExercise() {
  let box = document.getElementById("workoutBox");

  if (currentExercise >= exercises.length) {
    box.innerHTML = "Workout Complete 💪🔥";
    return;
  }

  let ex = exercises[currentExercise];
  let timeLeft = ex.time;

  timer = setInterval(() => {
    box.innerHTML = `
      <h1>${ex.name}</h1>
      <h2>${timeLeft}s</h2>
    `;

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      currentExercise++;
      runExercise();
    }
  }, 1000);
}
