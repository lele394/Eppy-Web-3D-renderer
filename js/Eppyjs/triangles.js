import { Projection } from "./projection.js"

export function DrawTriangle(points, color) {
  /* pourcentage full viewport */

  let projete = Projection(points);

  //instanciation
  let tri = document.createElement("div");

  tri.style.position = "fixed";
  tri.style.width = "100%";
  tri.style.height = "100%";
  tri.style.background = color;
  tri.style.clipPath = `polygon( ${projete[0][0]}% ${projete[0][1]}%, ${projete[1][0]}% ${projete[1][1]}%, ${projete[2][0]}% ${projete[2][1]}%)`;

  document.getElementById("render-anchor").appendChild(tri);
}

//


