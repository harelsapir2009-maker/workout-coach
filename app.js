let exercises = [
  { name: "Push Ups", time: 30 },
  { name: "Rest", time: 15 },
  { name: "Squats", time: 30 },
  { name: "Rest", time: 15 },
  { name: "Plank", time: 30 },
];

function startWorkout() {
  let box = document.getElementById("workoutBox");
  let i = 0;

  function nextExercise() {
    if (i >= exercises.length) {
      box.innerHTML = "Workout Complete 💪🔥";
      return;
    }

    let ex = exercises[i];
    let timeLeft = ex.time;

    box.innerHTML = `<h2>${ex.name}</h2><p>${timeLeft}s</p>`;

    let timer = setInterval(() => {
      timeLeft--;
      box.innerHTML = `<h2>${ex.name}</h2><p>${timeLeft}s</p>`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        i++;
        nextExercise();
      }
    }, 1000);
  }

  nextExercise();
}
