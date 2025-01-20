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
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

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
