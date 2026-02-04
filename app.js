let time = 30;
let timer;

function startWorkout(){
  const display = document.getElementById("timer");
  time = 30;
  display.textContent = "Exercise: 30s";

  timer = setInterval(()=>{
    time--;
    display.textContent = "Exercise: " + time + "s";

    if(time <= 0){
      clearInterval(timer);
      restTime();
    }
  },1000);
}

function restTime(){
  const display = document.getElementById("timer");
  let rest = 15;
  display.textContent = "Rest: 15s";

  const restTimer = setInterval(()=>{
    rest--;
    display.textContent = "Rest: " + rest + "s";

    if(rest <= 0){
      clearInterval(restTimer);
      startWorkout();
    }
  },1000);
}
