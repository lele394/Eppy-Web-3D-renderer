
//const fs = require("fs");


export function ConvertOBJ(data){

    /*
    let data = readFile(file_path, (err, data) => {
        if (err) throw err;
      
        return data.toString();
      });*/

      data = `
# cube.obj
#

o cube

v  0.0  0.0  0.0
v  0.0  0.0  1.0
v  0.0  1.0  0.0
v  0.0  1.0  1.0
v  1.0  0.0  0.0
v  1.0  0.0  1.0
v  1.0  1.0  0.0
v  1.0  1.0  1.0

vt 0.25 0.0
vt 0.5  0.0
vt 0    0.25
vt 0.25 0.25
vt 0.5  0.25
vt 0.75 0.25
vt 0.0  0.5
vt 0.25 0.5
vt 0.5  0.5
vt 0.75 0.5
vt 0.25 0.75
vt 0.5  0.75
vt 0.25 1.0
vt 0.5  1.0

vn  0.0  0.0  1.0
vn  0.0  0.0 -1.0
vn  0.0  1.0  0.0
vn  0.0 -1.0  0.0
vn  1.0  0.0  0.0
vn -1.0  0.0  0.0

f  1/11/2  7/14/2  5/12/2
f  1/11/2  3/13/2  7/14/2 
f  1/7/6  4/4/6  3/3/6 
f  1/7/6  2/8/6  4/4/6 
f  3/1/3  8/5/3  7/2/3 
f  3/1/3  4/4/3  8/5/3 
f  5/10/5  7/6/5  8/5/5 
f  5/10/5  8/5/5  6/9/5 
f  1/11/4  5/12/4  6/9/4 
f  1/11/4  6/9/4  2/8/4 
f  2/8/1  6/9/1  8/5/1 
f  2/8/1  8/5/1  4/4/1 `




      let vertices = [];
      let link_map = [];
      
      let lines = data.split("\n");


      //my god that's inneficient af
      for (var i = 0; i<lines.length; i++) {
        let split_line = lines[i].split(" ");
        split_line = split_line.filter(n => n !== "");//filter all "" due to file formatting, should work on all of em
        switch(split_line[0]) {

            case "v":
                vertices.push([parseFloat(split_line[1]),  parseFloat(split_line[2]),  parseFloat(split_line[3])]);
                break;

            case "f":
                let p1 = split_line[1].split("/")[0];
                let p2 = split_line[2].split("/")[0];
                let p3 = split_line[3].split("/")[0];
                link_map.push( [ parseFloat(p1)-1, parseFloat(p2)-1, parseFloat(p3)-1 ]); //-1 to reset indices to 0
                break;
        }
      }


    console.log([vertices, link_map]);
      return [vertices, link_map];

}

