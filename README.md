# Eppy-Web-3D-renderer
## not gonna lie i kinda stopped on this one sorry, might come back on it at a later date tho.
 Current feature in dev : Rotation matrices
 ======

Eppy is in a very early stage and currently only supports rendering of 3D triangles using DrawTriangle in a veeeeerry unoptimized way. An example of the current possible implementation is availble in [demo.hmtl](https://github.com/lele394/Eppy-Web-3D-renderer/blob/master/demo.html).

Planned features are :

* using .obj files (can currently use hardcoded data, parser works, see [obj-parser.js](https://github.com/lele394/Eppy-Web-3D-renderer/blob/master/js/Eppyjs/obj-parser.js)
)
* shading of faces 
* "texturing" (probably just chosing the color of specific traingles)
* culling

Eppy currently is extremely inneficient, is heavy on the CPU, and maybe really broken. I plan on porting most of the draw calls to the GPU once the technique works.
Feel free to submit any upgrades you think could be implemented.

Bear in mind that this is just a passion project and is a dumb idea.


Current features :
* can parse .obj file text using obj-parser.js
* draws triangle on screen, after projection from 3D space to 2D plane (DrawTriangle in triangles.js, see projection.js)
* can move objects to determined position
* aspect ratio can change without affecting the result (need to redraw everything though, see demo)

Available settings :
* Focal length
* Camera position
* Position of mesh
* obj-parser.js is easy to modify to accept any shapes
