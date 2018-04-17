const getbondAngles = function (n) {
  if (n === 4) {
    return '120°';
  } else if (n === 5) {
    return '< 120°';
  } else if (n === 7) {
    return '109.5°';
  } else if (n === 8 || n === 9) {
    return ' < 109.5°';
  } else if (n === 11) {
    return '90°/120°';
  } else if (n === 12) {
    return '< 90°/120°/180°';
  } else if (n === 13 || n === 16) {
    return '< 90°/180°';
  } else if (n === 15 || n === 17) {
    return '90°/180°';
  } else {
    return '180°';
  }
};

const getElecGeo = function (n) {
  if (n < 4) {
    return 'Linear';
  } else if (n < 7) {
    return 'Trigonal Planer';
  } else if (n < 11) {
    return 'Tetrahedral';
  } else if (n < 15) {
    return 'Trigonal Bipyramidal';
  } else {
    return 'Octahedral';
  }
}

const getShape = function (n) {
  if (n === 4) {
    return 'Trigonal Planer';
  } else if (n === 5 || n === 9) {
    return 'Bent';
  } else if (n === 7) {
    return 'Tetrahedral';
  } else if (n === 8) {
    return 'Trigonal Pyramid';
  } else if (n === 11) {
    return 'Trigonal Bipyramidal';
  } else if (n === 12) {
    return 'See-saw';
  } else if (n === 13) {
    return 'T-shape';
  } else if (n === 15) {
    return 'Octahedral';
  } else if (n === 16) {
    return 'Square Pyramid';
  } else if (n === 17) {
    return 'Square Planer';
  } else {
    return 'Linear';
  }
}

const examples = 'H2 CO2 CN- AlBr3 SnCl2 O2 SiCl4 PH3 SeBr2 Cl2 AsF5 SeH4 ICl3 BrF2 SeCl6 IF5 XeF4'.split(' ');

const getExample = function (n) {
  return examples[n];
}

const menuArr = 'AX AX2 AXE AX3 AX2E AXE2 AX4 AX3E AX5 AX4E AX3E2 AX2E3 AX6 AX5E AX4E2'.split(' ');


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  for (var i = 0; i < menuArr.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = menuArr[i];
    menu.appendChild(button);
    let n = i;
    button.addEventListener('click',() => getExample(n))
  };
});


// var transformBallAndStick = new ChemDoodle.TransformCanvas3D('transformBallAndStick', 250, 250);
// transformBallAndStick.specs.set3DRepresentation('Ball and Stick');
// transformBallAndStick.specs.backgroundColor = 'black';
// ChemDoodle.io.file.content('./model/Selenium hexachloride.mol', function(fileContent){
//   const mol = ChemDoodle.readMOL(fileContent, 1);
//   transformBallAndStick.loadMolecule(mol);
// })
