const examples = 'H2 CO2 CN- AlBr3 SnCl2 O2 SiCl4 PH3 SeBr2 Cl2 AsF5 TeF4 ICl3 BrF2 SeCl6 IF5 XeF4'.split(' ');

const menuArr = 'AX AX2 AXE AX3 AX2E AXE2 AX4 AX3E AX2E2 AXE3 AX5 AX4E AX3E2 AX2E3 AX6 AX5E AX4E2'.split(' ');

const getBondAngles = function (n) {
  if (n === 3) {
    return '120°';
  } else if (n === 4) {
    return '< 120°';
  } else if (n === 6) {
    return '109.5°';
  } else if (n === 7 || n === 8) {
    return ' < 109.5°';
  } else if (n === 10) {
    return '90°/120°';
  } else if (n === 11) {
    return '< 90°/120°/180°';
  } else if (n === 12 || n === 15) {
    return '< 90°/180°';
  } else if (n === 14 || n === 16) {
    return '90°/180°';
  } else {
    return '180°';
  }
};

const getElecGeo = function (n) {
  if (n < 3) {
    return 'Linear';
  } else if (n < 6) {
    return 'Trigonal Planer';
  } else if (n < 10) {
    return 'Tetrahedral';
  } else if (n < 14) {
    return 'Trigonal Bipyramidal';
  } else {
    return 'Octahedral';
  }
}

const getShape = function (n) {
  if (n === 3) {
    return 'Trigonal Planer';
  } else if (n === 4 || n === 8) {
    return 'Bent';
  } else if (n === 6) {
    return 'Tetrahedral';
  } else if (n === 7) {
    return 'Trigonal Pyramid';
  } else if (n === 10) {
    return 'Trigonal Bipyramidal';
  } else if (n === 11) {
    return 'See-saw';
  } else if (n === 12) {
    return 'T-shape';
  } else if (n === 14) {
    return 'Octahedral';
  } else if (n === 15) {
    return 'Square Pyramid';
  } else if (n === 16) {
    return 'Square Planer';
  } else {
    return 'Linear';
  }
}



const getExample = function (n) {
  return examples[n];
}

let canvas = new ChemDoodle.TransformCanvas3D('transformAngle', 300, 300);
canvas.specs.set3DRepresentation('Ball and Stick');
canvas.specs.backgroundColor = 'black';
canvas.specs.shapes_color = '#fff';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');

  for (var i = 0; i < menuArr.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = menuArr[i];
    menu.appendChild(button);
    let n = i;
    button.addEventListener('click',() => {
      document.getElementById('title').innerHTML = `${menuArr[n]}`;

      document.getElementById('bondAngles').innerHTML = `Bond Angles: ${getBondAngles(n)}`;

      document.getElementById('elecGeo').innerHTML = `Electron Geometry: ${getElecGeo(n)}`;

      document.getElementById('shape').innerHTML = `Shape: ${getShape(n)}`;

      document.getElementById('example').innerHTML = `Example: ${getExample(n)}`;

      ChemDoodle.io.file.content(`./model/${getExample(n)}.mol`, function(ex) {
        const mol = ChemDoodle.readMOL(ex, 1);
        if (mol.atoms.length < 3) {
          canvas.loadMolecule(mol)
        } else {
          const angle = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[2]);
          canvas.loadContent([mol], [angle]);
        }
      });
    });
  };
});
