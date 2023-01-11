import {DrawTriangle} from "./Eppyjs/triangles.js";
// WEB RENDERER CSS

//needs a div of id render-anchor emett: dive#render-anchor

// [x, y, z]

console.log("impot main.js");



export class Mesh {
  /* vertices : list of vertex
    link_map : list of indices of vertex to connect to form a triangle : [tri, tri, tri]*/
  constructor(vertices, link_map, position) {
    this.vertices = vertices;
    this.link_map = link_map;
    this.position = position;
  }
}

//



export function DrawMesh (mesh, color) {

    for (var i = 0; i<mesh.link_map.length; i++) {

        let triangle_indices = mesh.link_map[i];

        var points = [
            mesh.vertices[triangle_indices[0]],
            mesh.vertices[triangle_indices[1]],
            mesh.vertices[triangle_indices[2]]
        ]

        points = TransfromPoints(points, mesh.position);

        DrawTriangle(points, color);
    }

}


function TransfromPoints(list, offset) {

  let result = [];
  for(var i = 0; i<list.length; i++){
    let point = list[i];
    result.push(  [point[0] - offset[0], point[1] - offset[1], point[2] - offset[2]]  );
  }

  return result;

}