import "./style.css";
import data from "./data/data";
import { createThreeScene } from "./threeScene";

const cubes = [
  "./cubeDrawings/cube1.webp",
  "./cubeDrawings/cube2.webp",
  "./cubeDrawings/cube3.webp",
  "./cubeDrawings/cube4.webp",
];

const trees = [
  "./treeDrawings/tree1.jpg",
  "./treeDrawings/tree2.jpg",
  "./treeDrawings/tree3.jpg",
  "./treeDrawings/tree4.jpg",
];

const cadavre = [
  "./cadavreExquis/HANDS.png",
  "./cadavreExquis/CULTURE.png",
  "./cadavreExquis/NATURE.png",
  "./cadavreExquis/BUILT ENVIRONMENT.png",
]


document.querySelector("#app").innerHTML = `
  <main id="container">
    <section id="heading">
      <h1>${data.name}</h1>
      <p>${data.bio}</p>
    </section>

    <section id="projects">
      <div id="project-row">
      Cadavre Exquis
        <div class="three-model">
          <a href="./cadavreExquis/Denis Rosales Becerra - Cadavre Exquis.png" target="_blank">
            <img src="./cadavreExquis/Denis Rosales Becerra - Cadavre Exquis.png" id="model1" alt="Model 1 Image" />
        </div>
        <div id="images-description">
  
          <div id="images">
            <a href="./cadavreExquis/HANDS.png" target="_blank">
              <img src="./cadavreExquis/HANDS.png" alt="hands" />
            </a>
            <a href="./cadavreExquis/CULTURE.png" target="_blank">
              <img src="./cadavreExquis/CULTURE.png" alt="culture" />
            </a>
            <a href="./cadavreExquis/NATURE.png" target="_blank">
              <img src="./cadavreExquis/NATURE.png" alt="nature" />
            </a>
            <a href="./cadavreExquis/BUILT ENVIRONMENT.png" target="_blank">
              <img src="./cadavreExquis/BUILT ENVIRONMENT.png" alt="built environment" />
            </a>
          </div>

          <h4 id="description">People are the essence of the built environment. We collectively design spaces for ourselves and for each other. These spaces, in turn, shape how we live, interact, and grow as communities. It is a dynamic canvas where culture, function, and human experience intersect, creating opportunities for connection and shared meaning. Without art and without culture, cities are empty, soulless husks of concrete. It is our duty as inhabitants to blend together our different passions, cultures, and influences to make our space our home.</h4>
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
      */ ""}
      
      ${/* Model 3 commented out
      <div id="project-row">
      Model 3
        <div class="three-model">
          <div id="model3"></div>
        </div>
        <div id="images-description">
          <div id="images">
            ${cubes
              .map(
                (cube, index) => `<img src="${cube}" alt="cube${index + 1}" />`
              )
              .join("")}
          </div>
          <h4 id="description">A 3D house model is a geometric representation of a house, featuring walls, a roof, and windows. It often includes additional details such as doors, chimneys, and balconies, with textures like brick, wood, or stucco to enhance realism. The interior may also feature rooms, furniture, and lighting for a more detailed design.</h4>
        </div>
      </div>
      */ ""}
    </section>

    <ul id="footer-items">
      <li>Email: ${data.contact.email}</li>
      <li>Phone: ${data.contact.phone}</li>
      <li>LinkedIn: <a href="${data.contact.linkedin}">${
  data.contact.linkedin
}</a></li>
      <li>GitHub: <a href="${data.contact.github}">${
  data.contact.github
}</a></li>
    </ul>
  </main>
`;

// Create three.js scenes for each
//createThreeScene("#model1", "/3DModels/project1/cube.obj");
//createThreeScene("#model2", "/3DModels/project2/tree.obj");
//createThreeScene("#model3", "/3DModels/project3/cottage.obj");
