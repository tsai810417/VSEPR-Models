const examples = 'H2 CO2 CN- AlBr3 SnCl2 O2 SeH4 PH3 SeBr2 Cl2 AsF5 TeF4 ICl3 BrF2 SeCl6 IF5 XeF4'.split(' ');

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
    return '90°/120°/180°';
  } else if (n === 12 || n === 15) {
    return '<= 90°/180°';
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
    return 'Trigonal Planar';
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
    return 'Square Planar';
  } else {
    return 'Linear';
  }
}

const getExample = function (n) {
  return examples[n];
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeButton = document.getElementById('close-button');
  const menu = document.getElementById('menu');
  modal.style.display = 'block';
  closeButton.onclick = () => modal.style.display = 'none';
  window.onclick = e => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  }

  for (var i = 0; i < menuArr.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = menuArr[i];
    menu.appendChild(button);
    let n = i;
    button.addEventListener('click',() => {
      document.getElementById('title').innerHTML = `${menuArr[n]}`;

      document.getElementById('bondAngles').innerHTML = `${getBondAngles(n)}`;

      document.getElementById('elecGeo').innerHTML = `${getElecGeo(n)}`;

      document.getElementById('shape').innerHTML = `${getShape(n)}`;

      document.getElementById('example').innerHTML = `${getExample(n)}`;

      ChemDoodle.io.file.content(`./model/${getExample(n)}.mol`, function(ex) {
        const mol = ChemDoodle.readMOL(ex, 1);
        if (mol.atoms.length < 3) {
          canvas.loadMolecule(mol)
        } else if (n === 1) {
          const angle = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[2], mol.atoms[0]);
          canvas.loadContent([mol], [angle]);
        } else if (n === 3) {
          const angle = new ChemDoodle.structures.d3.Angle(mol.atoms[0], mol.atoms[1], mol.atoms[3]);
          canvas.loadContent([mol], [angle]);
        } else if (n === 10 || n === 11) {
          const angle1 = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[3]);
          const angle2 = new ChemDoodle.structures.d3.Angle(mol.atoms[3], mol.atoms[0], mol.atoms[4])
          canvas.loadContent([mol], [angle1, angle2]);
        } else if (n === 12 || n === 14 || n === 15) {
          const angle1 = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[2]);
          const angle2 = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[3])
          canvas.loadContent([mol], [angle1, angle2]);
        } else if (n === 16) {
          const angle = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[3]);
          canvas.loadContent([mol], [angle]);
        }
        else {
          const angle = new ChemDoodle.structures.d3.Angle(mol.atoms[1], mol.atoms[0], mol.atoms[2]);
          canvas.loadContent([mol], [angle]);
        }
      });

    });
  };


});
