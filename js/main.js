// WEB RENDERER CSS

//needs a div of id render-anchor emett: dive#render-anchor

// [x, y, z]

const FocalLength = 10;
var CameraPosition = [0, 0, -3];





class Mesh  {
    /* vertices : list of vertex
    link_map : list of indices of vertex to connect to form a triangle */
    constructor(vertices, link_map) {
        this.vertices = vertices;
        this.link_map = link_map;
    }
}






function DrawTriangle(points, color) {
    /* pourcentage full viewport */

    let projete = Projection(points)


    //instanciation
    let tri = document.createElement("div");

    tri.style.position = "fixed";
    tri.style.width = "100%";
    tri.style.height = "100%";
    tri.style.background = color;
    tri.style.clipPath = `polygon( ${projete[0][0]}% ${projete[0][1]}%, ${projete[1][0]}% ${projete[1][1]}%, ${projete[2][0]}% ${projete[2][1]}%)`;
 

    document.getElementById("render-anchor").appendChild(tri);

}



function Projection(points)
{
    let p1 = _ProjPoint(points[0]);
    let p2 = _ProjPoint(points[1]);
    let p3 = _ProjPoint(points[2]);
    return [p1, p2, p3];    
}

function _ProjPoint(pos_object) 
{
    let AspectRatio = window.innerWidth / window.innerHeight;

    //3D space projection
    let x = (pos_object[0] - CameraPosition[0]) * FocalLength / (FocalLength + pos_object[2]- CameraPosition[2]);
    let y = (pos_object[1] - CameraPosition[1]) * FocalLength / (FocalLength + pos_object[2]- CameraPosition[2]);
    
    //Screen space correction
    x = (x+1)/2 * 100; //2 is screen size for a camera forming square on 2*2 
    y = (y+1)/2 * 100; //which is centered in 0 0
                       // coordinate+1 accounts for the center of the screen being in 50% 50%  


    console.log([x, y]);
    return [x, y*AspectRatio] //apsect ratio for size conservation
}



