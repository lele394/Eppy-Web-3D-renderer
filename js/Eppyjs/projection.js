import {FocalLength, CameraPosition} from "./config.js";


export function Projection(points) {
    let p1 = _ProjPoint(points[0]);
    let p2 = _ProjPoint(points[1]);
    let p3 = _ProjPoint(points[2]);
    return [p1, p2, p3];
  }
  
  //
  

function _ProjPoint(pos_object) {
    let AspectRatio = window.innerWidth / window.innerHeight;
  
    //3D space projection
    let x =
      ((pos_object[0] - CameraPosition[0]) * FocalLength) /
      (FocalLength + pos_object[2] - CameraPosition[2]);
    let y =
      ((pos_object[1] - CameraPosition[1]) * FocalLength) /
      (FocalLength + pos_object[2] - CameraPosition[2]);
  
    //Screen space correction
    x = ((x + 1) / 2) * 100; //2 is screen size for a camera forming square on 2*2
    y = ((y + 1) / 2) * 100; //which is centered in 0 0
    // coordinate+1 accounts for the center of the screen being in 50% 50%
  
    return [x, y * AspectRatio]; //apsect ratio for size conservation
  }