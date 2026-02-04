function testButton(){
    alert("JavaScript is working ✅");
}
let availableMachines = [];

function scanGym() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.capture = "environment";

  input.onchange = () => {
    alert("Gym photo saved ✅\n(בעתיד זה יזהה אוטומטית את המכשירים)");
    
    // בינתיים נוסיף מכשירים ידנית לדוגמה
    availableMachines = [
      "Bench Press",
      "Lat Pulldown",
      "Leg Press",
      "Cable Machine",
      "Dumbbells"
    ];

    localStorage.setItem("machines", JSON.stringify(availableMachines));
  };

  input.click();
}
