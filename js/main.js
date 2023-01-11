import { DrawTriangle } from "./Eppyjs/triangles.js";
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

export function DrawMesh(mesh, color) {
  /* takes a mesh class (ie above) and a color and draws i on the screen */

  for (var i = 0; i < mesh.link_map.length; i++) {
    let triangle_indices = mesh.link_map[i];

    var points = [
      mesh.vertices[triangle_indices[0]],
      mesh.vertices[triangle_indices[1]],
      mesh.vertices[triangle_indices[2]],
    ];

    points = TransfromPoints(points, mesh.position);

    DrawTriangle(points, color);
  }
}

function TransfromPoints(list, offset) {
  /* translate all points in a list respectively with the offset*/

  let result = [];
  for (var i = 0; i < list.length; i++) {
    let point = list[i];
    result.push([
      point[0] - offset[0],
      point[1] - offset[1],
      point[2] - offset[2],
    ]);
  }

  return result;
}

export function RotateMesh(mesh, rotation) {
  /*takes a mesh and a rotation vector [Rx, Ry, Rz] and returns a new mesh with the new set of vertices coordinates */
  if(rotation[0] != 0){  mesh = _Rx(mesh, rotation[0]);}
  if(rotation[1] != 0){  mesh = _Ry(mesh, rotation[1]);}
  if(rotation[2] != 0){  mesh = _Rz(mesh, rotation[2]);}

  return mesh;
}

function _Rx(mesh, rotation){
  /**rotation t on x */
  /* [ 1    0        0    ]
     [ 0  cos(t)  -sin(t) ]
     [ 0  sin(t)   cos(t) ]
     
    x = x
    y = y*cos(t) - z*sin(t)
    z = y*sin(t) + z*cos(t)
  */

    let points = mesh.vertices;
    let result = [];
    for(var i = 0; i<points.length; i++) {
      let point = points[i];

      let x = point[0];
      let y = point[1] * Math.cos(rotation) - point[2] * Math.sin(rotation);
      let z = point[1] * Math.sin(rotation) + point[2] * Math.cos(rotation);

      result.push([x, y, z]);

    }

    mesh.vertices = result;
    return mesh;





}

function _Ry(mesh, rotation){
  /**rotation t on y */
  /* [ cos(t)  0  sin(t) ]
     [   0     1    0    ]
     [-sin(t)  0  cos(t) ]
     
     x = x*cos(t) + z*sin(t)
     y = y
     z = z*cos(t) - x*sin(t)
     */
     let points = mesh.vertices;
     let result = [];
     for(var i = 0; i<points.length; i++) {
       let point = points[i];
 
       let x = point[2] * Math.sin(rotation) + point[0] * Math.cos(rotation);
       let y = point[2];
       let z = point[2] * Math.cos(rotation) - point[0] * Math.sin(rotation);
 
       result.push([x, y, z]);
 
     }
 
     mesh.vertices = result;
     return mesh;

}

function _Rz(mesh, rotation){
  /**rotation t on z */
  /* [ cos(t) -sin(t)  0 ]
     [ sin(t)  cos(t)  0 ]
     [   0       0     1 ]
     
     x = x*cos(t) - y*sin(t)
     y = x*sin(t) + y*cos(t)
     z = z
     */
     let points = mesh.vertices;
     let result = [];
     for(var i = 0; i<points.length; i++) {
       let point = points[i];
 
       let x = point[0] * Math.cos(rotation) - point[1] * Math.sin(rotation);
       let y = point[0] * Math.sin(rotation) + point[1] * Math.cos(rotation);
       let z = point[3];
 
       result.push([x, y, z]);
 
     }
 
     mesh.vertices = result;
     return mesh;


}
