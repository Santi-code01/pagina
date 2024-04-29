function opcion1() {
    document.getElementById("respuesta").innerText = "Buena elección, él no te quiere.";
  }
  
  function opcion2() {
    var respuesta = prompt("¿Y si todavía te quiere?");
    if (respuesta !== null) {
      document.getElementById("respuesta").innerText = "Está bien.";
    }
  }
  