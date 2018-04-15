# VSEPR Models
## Background
VSEPR Theory is used to predict the molecule geometry. It mainly has 18 different shapes.

VSEPR Models is a tool that illustrate the 3D views of different shapes.

User can select generic formula on the menu to view it in 3D.
## Functionality and MVP
By selecting a shape, users will see:
- [ ] Informations about bond angles
- [ ] Molecular shape
- [ ] Example
- [ ] 3D interactive molecule

In VSEPR Models, users will be able to:
- [ ] Select which shape to interact with
- [ ] Rotate the molecule by dragging or buttons
- [ ] Zoom in/out by scrolling or buttons

## Wireframes
This app will consist of 2 containers and contents will be updated according to user's selection of which configuration to display.

![Wireframe](https://github.com/tsai810417/resources/blob/master/Untitled%20Diagram.png?raw=true)

## Architecture and Technologies
This project will be build with the following technologies:
* ChemDoodle Web Components library to provide 3D graphics and animations of chemical structures

* HTML5 Canvas

* HTML5 WebGL to render 3D senes through Javascript

## Timeline

#### Over the Weekend: Prepare the resources for the project
- [ ] Finish reading the tutorial of how to use ChemDoodle
- [ ] Set up the menu and actions when buttons are clicked
- [ ] Download 3D molfiles for all the molecules needed

#### Day 1: Set up the environment to begin with the project and create backend data
- [ ] Setup webpack, including webpack.config.js and package.json
- [ ] Setup backend storing the informations that will be render in each case
- [ ] Setup HTML file and canvas tag where the 3D molecule will be rendered

#### Day 2: Start building the canvas components
- [ ] Build the component to render the informations
- [ ] Build the canvas components of molecule objects, ready to render when called by function

#### Day 3: Set up the logic deciding render which component
- [ ] Build functions for calling each molecule to be rendered in the component

#### Day 4: Adding more animations to the components
- [ ] Add animations to the 3D molecule
- [ ] Create controls to interact with the rendered molecule

## Bonus Features
- [ ] User can type in molecules, then the application will determine the geometry and render 3D molecule and informations
