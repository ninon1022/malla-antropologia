const malla = document.getElementById("malla");

for (let i = 0; i < 25; i++) {
  const cuadro = document.createElement("div");
  cuadro.className = "cuadro";
  cuadro.onclick = () => {
    cuadro.style.backgroundColor = getRandomColor();
  };
  malla.appendChild(cuadro);
}

function getRandomColor() {
  const colores = ["#ff6666", "#66ff66", "#6666ff", "#ffff66", "#ff66ff"];
  return colores[Math.floor(Math.random() * colores.length)];
}
