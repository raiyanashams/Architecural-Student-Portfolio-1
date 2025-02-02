import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./All the Pics/1.png",
  "./All the Pics/2.png",
  "./All the Pics/3.png",
  "./All the Pics/4.png",
];

const trees = [
  "./Charts/1.png",
  "./Charts/2.png",
  "./Charts/3.png",
  "./Charts/4.png",
]

const kites = [
  "./Charts/5.png",
  "./Charts/6.png",
]

const cards = [
  "./Charts/7.png",
  "./Charts/8.png",
  "./Charts/9.png",
  "./Charts/10.png",
]

const pics = [
  "./Charts/7.png",
  "./Charts/8.png",
  "./Charts/9.png",
  "./Charts/10.png",
]

const houses = [
  "./houseDrawings/house1.jpg",
  "./houseDrawings/house2.jpg",
  "./houseDrawings/house3.jpg",
  "./houseDrawings/house4.jpg",
];

document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./All the Pics/All done.png" target ="new">
          <img src="./All the Pics/All done.png" id="model1"
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            <a href="./All the Pics/1.png" taret ="new">
              <img src="./All the Pics/1.png"
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
              </a>
          </div>
          <h4 id="description">cadavre exquis: the future she deserves</h4>
          <h5 id="description">This cadavre exquis is a bold, imaginative vision of a world redefined by the transformative power of women’s leadership. It captures the tension between the challenges we face – climate change, systemic inequality, and social injustice – and the hope for a future rooted in empathy, equity, and sustainability. Through vivid imagery, it rejects the paradigms of greed and exploitation, instead celebrating the values often associated with women: compassion, empathy, and an unwavering commitment to justice. By intertwining nature, humanity, and the pursuit of freedom, this piece calls for a world where leadership is driven not by power or profit but by the desire to create a thriving, inclusive planet. It is both a critique of the present and a rallying cry for the future – a reminder that the qualities dismissed as “weak” are, in fact, the ones that will lead us to lasting change.</h5>

          </div>
      </div> 

       <section id="projects">
      <div id="project-row">
        <div class="three-model">
          <a href="./All the Pics/All done.png" target ="new">
          <img src="./All the Pics/All done.png" id="model1"
          </a>
        </div>
        <div id="images-description">
          <div id="images">
            ${pics
              .map(
                (pic, index) => `<img src="${pic}" alt="pic${index + 1}" />`
              )
              .join("")}
              </a>
          </div>
          <h4 id="description">interop(erability)</h4>
          <h5 id="description">This exploration of 3D file interoperability highlights the critical role of format selection in digital design workflows. Differences in subdivision handling, mesh explosion, and file compression impact everything from visualization quality to fabrication efficiency. Understanding how formats like FBX, OBJ, STL, and PLY interpret geometry allows for more informed decisions when transitioning between software. These insights emphasize the need for standardized transformation workflows, careful file size management, and strategic use of NURBS vs. mesh modeling based on project requirements. By applying these learnings, future architecture and design projects can optimize both digital and physical outcomes, ensuring precision, efficiency, and smooth cross-platform collaboration.</h5>
          </div>
      </div> 

      <div id="images1">
          </a>
        </div>
                 <div id="imag1">
              ${trees
              .map(
                (tree, index) => `<img src="${tree}" alt="tree${index + 1}" />`
              )
              .join("")}
              </a>
          </div>

          </div>
      </div> 

                
      <div id="table">
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Torus Comparison</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Torus Comparison Chart</h2>

<table>
    <tr>
        <th>#</th>
        <th>Action</th>
        <th>FBX</th>
        <th>OBJ</th>
        <th>PLY</th>
        <th>STL</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Importing Notes</td>
        <td>Scaled by 0.1, rotated</td>
        <td>Scaled by 100, rotated</td>
        <td>Scaled by 100</td>
        <td>Scaled by 100</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Original import with 0 subdivisions (all closed meshes)</td>
        <td>Composed of quads, looks like OBJ, exploded into 576 meshes<br>File size: 30 KB</td>
        <td>Composed of quads, looks like FBX, exploded into 576 meshes<br>File size: 64 KB</td>
        <td>Composed of quads, smoother, gray, cannot be exploded<br>File size: 23 KB</td>
        <td>Composed of tris, exploded into 12 meshes<br>File size: 57 KB</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Original → SubDivide (still closed meshes)</td>
        <td>More subdivisions, looks like OBJ, same exploding as before</td>
        <td>More subdivisions, looks like FBX, same exploding as before</td>
        <td>More subdivisions, smoother, gray, same exploding as before</td>
        <td>More subdivisions, tris turned into a mix of tris & quads, same exploding as before</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Original → ToNURBS (TrimTriangularFaces = Yes, now all closed polysurfaces)</td>
        <td>Similar to SubDivide, lighter subdivision lines, looks like OBJ, same exploding as before</td>
        <td>Similar to SubDivide, lighter subdivision lines, looks like FBX, same exploding as before</td>
        <td>Similar to SubDivide, lighter subdivision lines, smoother, gray, exploded into 576 surfaces</td>
        <td>More subdivisions, exploded into 1152 surfaces</td>
    </tr>
    <tr>
        <td>4</td>
        <td>ToNURBS (TrimTriangularFaces = Yes) → Mesh (now all closed meshes)</td>
        <td>Composition became a mix of tris & quads, more subdivided than OBJ, same exploding as before</td>
        <td>Composition became a mix of tris & quads, same exploding as before</td>
        <td>Composition became a mix of tris & quads, smoother, gray, same exploding as before</td>
        <td>Composition became a mix of tris & quads, looks like ToNURBS (TrimTriangularFaces = No), same exploding as before</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Original → ToNURBS (TrimTriangularFaces = No, now all closed polysurfaces)</td>
        <td>Same as Original → SubDivide, same exploding as before</td>
        <td>Same as Original → SubDivide, same exploding as before</td>
        <td>Same as Original → SubDivide, same exploding as before</td>
        <td>Same as Original → SubDivide, but wireframe shows tris have split further, same exploding as before</td>
    </tr>
    <tr>
        <td>6</td>
        <td>ToNURBS (TrimTriangularFaces = No) → Mesh (now all closed meshes)</td>
        <td>Composition became a mix of tris & quads, more subdivided than OBJ but less than previous ToNURBS → Mesh, same exploding as before</td>
        <td>Composition became a mix of tris & quads, less divided than previous ToNURBS → Mesh, same exploding as before</td>
        <td>Composition became a mix of tris & quads, smoother, gray, more divided than previous ToNURBS → Mesh, same exploding as before</td>
        <td>Composition became a mix of tris & quads, looks like ToNURBS (TrimTriangularFaces = No), less divided than previous ToNURBS → Mesh, exploded into 1204 meshes</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Import with 3 subdivisions (all closed meshes)</td>
        <td>Same as Original but more subdivisions, looks like OBJ, exploded into 36864 meshes<br>File size: 1529 KB</td>
        <td>Same as Original but more subdivisions, looks like FBX, exploded into 36864 meshes<br>File size: 4861 KB</td>
        <td>Same as Original but more subdivisions, cannot be exploded<br>File size: 1357 KB</td>
        <td>Same as Original but more subdivisions, cannot be exploded<br>File size: 3601 KB</td>
    </tr>
    <tr>
        <td>8</td>
        <td>Import with 3 subdivisions → SubDivide (still closed meshes)</td>
        <td>Same as previous but with even more subdivisions, looks like OBJ, same exploding as before</td>
        <td>Same as previous but with even more subdivisions, looks like FBX, same exploding as before</td>
        <td>Same as previous but with even more subdivisions, same exploding as before</td>
        <td>Same as previous but with even more subdivisions, same exploding as before</td>
    </tr>
</table>

</body>
</div>
</html>

 <div id="images1">
          </a>
        </div>
                 <div id="imag1">
              ${kites
              .map(
                (kite, index) => `<img src="${kite}" alt="kite${index + 1}" />`
              )
              .join("")}
              </a>
          </div>

          </div>
      </div> 



      <div id="table">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pavilion Comparison Chart</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color:rgb(116, 31, 31);
        }
    </style>
</head>
<body>

<h2>Pavilion Comparison Chart</h2>

<table>
    <tr>
        <th>#</th>
        <th>Action</th>
        <th>FBX</th>
        <th>OBJ</th>
        <th>PLY</th>
        <th>STL</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Importing Notes</td>
        <td>Scaled by 0.01, rotated</td>
        <td>Scaled by 10, rotated</td>
        <td>Scaled by 10, rotated</td>
        <td>Scaled by 10, rotated</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Import with 0 subdivisions (all open meshes)</td>
        <td>Composed of quads, looks like OBJ, exploded into 45 meshes<br>File size: 14 KB</td>
        <td>Composed of quads, looks like FBX, exploded into 45 meshes<br>File size: 7 KB</td>
        <td>Would not import despite several attempts<br>File size: 3 KB</td>
        <td>Composed of tris, exploded into 66 meshes<br>File size: 6 KB</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Import with 1 subdivision (all still open meshes, just subdivided)</td>
        <td>Composed of quads, looks like OBJ, exploded into 204 meshes<br>File size: 21 KB</td>
        <td>Composed of quads, looks like FBX, exploded into 204 meshes<br>File size: 29 KB</td>
        <td>Composed of quads, smoother, gray, cannot be exploded<br>File size: 11 KB</td>
        <td>Composed of tris, exploded into 50 meshes<br>File size: 21 KB</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Import with 3 subdivisions (all still open meshes, just more subdivided)</td>
        <td>Composed of quads, looks like OBJ, exploded into 3264 meshes<br>File size: 158 KB</td>
        <td>Composed of quads, looks like FBX, exploded into 3260 meshes (interesting difference)<br>File size: 447 KB</td>
        <td>Composed of quads, smoother, gray, cannot be exploded<br>File size: 132 KB</td>
        <td>Composed of tris, exploded into 2 meshes (interesting reduction)<br>File size: 319 KB</td>
    </tr>
</table>

</body>
</div>
</html>


 <div id="images1">
          </a>
        </div>
                 <div id="imag1">
              ${cards
              .map(
                (card, index) => `<img src="${card}" alt="card${index + 1}" />`
              )
              .join("")}
              </a>
          </div>

          </div>
      </div> 

       <div id="images1">
          </a>
        </div>
                 <div id="imag1">
              ${cards
              .map(
                (card, index) => `<img src="${card}" alt="card${index + 1}" />`
              )
              .join("")}
              </a>
          </div>

          </div>
      </div> 


      <div id="table">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Duck Comparison Chart</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>Duck Comparison Chart</h2>

<table>
    <tr>
        <th>#</th>
        <th>Action</th>
        <th>FBX</th>
        <th>OBJ</th>
        <th>PLY</th>
        <th>STL</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Importing Notes (exported from Blender with 2 subdivisions)</td>
        <td>Scaled by 0.1, rotated</td>
        <td>Scaled by 100, rotated</td>
        <td>Scaled by 100</td>
        <td>Scaled by 4 (interesting difference)</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Original import (no subdivisions, all closed meshes)</td>
        <td>Composed of quads and tris, looks like OBJ<br>Duck, pen, and cap are 3 separate meshes, exploded into 3681 meshes<br>File size: 219 KB</td>
        <td>Composed of quads and tris, looks like FBX<br>Duck, pen, and cap are 3 separate meshes, exploded into 3681 meshes<br>File size: 541 KB</td>
        <td>Composed of quads and tris, smoother, gray<br>Everything is 1 mesh, exploded into 6 meshes (interesting that it exploded)<br>File size: 160 KB</td>
        <td>Composed of tris<br>Duck, pen, and cap are 3 separate meshes, exploded into 91 meshes<br>File size: 401 KB</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Original → SubDivide (still closed meshes)</td>
        <td>More subdivisions, looks like OBJ, same exploding as before</td>
        <td>More subdivisions, looks like FBX, same exploding as before</td>
        <td>More subdivisions, smoother, gray, same exploding as before</td>
        <td>More subdivisions, composition became a mix of tris & quads, same exploding as before</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Original → ToNURBS (TrimTriangularFaces = Yes, now all closed polysurfaces)</td>
        <td>Pen and cap became polysurfaces, but duck would not change<br>Similar to SubDivide, lighter subdivision lines, looks like OBJ, same exploding as before</td>
        <td>Similar to SubDivide, lighter subdivision lines, looks like FBX, same exploding as before</td>
        <td>No change from original import</td>
        <td>More subdivisions, composition remained tris, exploded into 17464 surfaces and 91 meshes (super interesting numbers)</td>
    </tr>
    <tr>
        <td>4</td>
        <td>ToNURBS (TrimTriangularFaces = Yes) → Mesh (now all closed meshes) (this made my computer angry, but the results were quite interesting)</td>
        <td>Composition remained a mix of tris & quads, more subdivided than OBJ, exploded into 1600 surfaces and 1585 meshes</td>
        <td>Composition remained a mix of tris & quads, more subdivided, same exploding as before</td>
        <td>Composition remained a mix of tris & quads, smoother, gray, same exploding as before</td>
        <td>Composition became a mix of tris & quads, looks like ToNURBS (TrimTriangularFaces = No), exploded into 16268 surfaces, 48 polysurfaces, and 16312 meshes</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Import with 3 subdivisions (all closed meshes)</td>
        <td>Same as Original but more subdivisions and smoother, looks like OBJ, exploded into 58881 meshes<br>File size: 3079 KB</td>
        <td>Same as Original but more subdivisions and smoother, looks like FBX, exploded into 2560 meshes<br>File size: 9465 KB</td>
        <td>Same as Original but more subdivisions and smoother, exploded into 6 meshes<br>File size: 2419 KB</td>
        <td>Same as Original but more subdivisions and smoother, exploded into 134 meshes<br>File size: 6401 KB</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Import with 3 subdivisions → SubDivide (still closed meshes) (computer got very angry)</td>
        <td>Same as previous but with even more subdivisions and even smoother, looks like OBJ, exploded into 3840 meshes (interesting difference)</td>
        <td>Same as previous but with even more subdivisions and even smoother, looks like FBX, exploded into 58862 meshes (interesting difference)</td>
        <td>Same as previous but with even more subdivisions and even smoother, same exploding as before</td>
        <td>Same as previous but with even more subdivisions and even smoother, same exploding as before</td>
    </tr>
</table>
</body>
</div>
</html>




      ${/* Model 2 commented out
      <div id="project-row">
      Model 2
        <div class="three-model">
          <div id="model2"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${trees
              .map(
                (trees, index) =>
                  `<img src="${trees}" alt="tree${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D tree model is a geometric representation of a tree, featuring a trunk, branches, and foliage. The trunk is typically cylindrical, with textured bark, while the branches extend outward to support leaves or a canopy. It may include roots or flowers for added detail.</h4>
        </div>
      </div>
      */""}
      <div id="project-row">
      ${/* Model 3 commented out
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${houses
              .map(
                (house, index) => `<img src="${house}" alt="house${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */""}
    </section>

    <ul id="footer-items">
      <li>email me! ${data.contact.email}</li>
      <li>connect with me! <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
