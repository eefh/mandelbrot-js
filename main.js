graphics = document.getElementById("graphics").getContext("2d");

const atom = (x, y, c) => {
  graphics.fillStyle = c;
  graphics.fillRect(x, y, 5, 5);
};

for (let y = 0; y <= 1000; y++) {
  for (let x = 0; x <= 1000; x++) {
    let dx = (x - 500) / 500;
    let dy = (y - 500) / 500;
    a = dx;
    b = dy;
    for (let t = 0; t < 200; t++) {
      d = a * a - b * b + dx;
      b = 2 * (a * b) + dy;
      a = d;
      condition = d > 200;
      if (condition) {
        atom(x, y, `rgb(${t * 3}, ${t * 1}, ${t * 0.5})`);
        break;
      }
    }
  }
}
