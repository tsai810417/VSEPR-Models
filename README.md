# VSEPR Models
## Demo
[Live demo](https://vsepr-model.herokuapp.com/)
## Setup
You will need `npm` installed on your machine. Before start running the application, you will clone this repo and setup the environment in terminal:
```command
$ git clone https://github.com/tsai810417/VSEPR-Models.git

$ cd VSEPR-Models

$ npm install

$ npm start
```
Then you will be able to access the application on: `http://localhost:8080/`
## Key Features
* The application has a short description on VSEPR theory and how to use it

* User will be able to choose which generic formula to study on

* An interactive 3D molecule will be shown on the page

* User can drag to rotate and scroll to zoom the molecule

## Planning for Project
Before start working on the project, I created a blueprint while designing what features will be required and what wireframe to expect.
The blueprint can be found in [proposal](https://github.com/tsai810417/VSEPR-Models/blob/master/proposal.md)
## Technologies
* The script is written in pure `JavaScript`

* Use `ChemDoodle Web Components` library to provide 3D graphics and animations of chemical structures

* HTML5 `WebGL` to render 3D senes through Javascript

## Future Directions
* Add electron structures to illustrate Electron Geometry

* Refactor and DRY the code

* Allow user to type in molecule name and the application will be able to define its generic formula, shape and electron geometry, etc.
