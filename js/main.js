import {DrawTriangle} from "./Eppyjs/triangles.js";
// WEB RENDERER CSS

//needs a div of id render-anchor emett: dive#render-anchor

// [x, y, z]

console.log("impot main.js");



export class Mesh {
  /* vertices : list of vertex
    link_map : list of indices of vertex to connect to form a triangle : [tri, tri, tri]*/
  constructor(vertices, link_map) {
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

        //TransfromPoints(point, mesh.position);

        DrawTriangle(points, color);
    }

}


function TransfromPoints(list, offset) {

  for(var i = 0; i<list.length; i++){

  }


}