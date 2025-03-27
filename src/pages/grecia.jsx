import React from 'react';
import grecia from '../assets/tarile/Grecia.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteGrecia from '../data/grecia.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/grecia/Imaginile/im1.png';
import im2 from '../assets/tarile/grecia/Imaginile/im2.png';
import im3 from '../assets/tarile/grecia/Imaginile/im3.png';
import im4 from '../assets/tarile/grecia/Imaginile/im4.png';
import im5 from '../assets/tarile/grecia/Imaginile/im5.png';
import im6 from '../assets/tarile/grecia/Imaginile/im6.png';
import im7 from '../assets/tarile/grecia/Imaginile/im7.png';

function Grecia() {

  const imaginiGrecia = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriereGrecia = {
    text1: "Grecia este o țară plină de farmec, unde istoria antică și frumusețea naturală se întâlnesc la fiecare pas.",
    text2: "Grecia este un loc unde tradiția, cultura și peisajele spectaculoase se îmbină perfect. De la insulele paradisiace ale Mării Egee și Mediterane la ruinele antice ale Atenei, Grecia atrage turiști din întreaga lume, oferindu-le o experiență de neuitat.",
    text3: "Dacă ești pasionat de soare și plaje cu nisip fin, insulele grecesti precum Santorini, Mykonos și Creta sunt ideale pentru relaxare și distracție. Regiunile montane, cum ar fi Pindus și Olimp, sunt perfecte pentru iubitorii de drumeții și aventuri în aer liber, în timp ce orașele istorice, precum Atena și Delphi, te vor purta înapoi în timp, la rădăcinile civilizației occidentale.",
    text4: "Grecia este, de asemenea, un adevărat paradis gastronomic. De la tzatziki și souvlaki la uleiul de măsline de calitate și vinurile excelente, fiecare masă în Grecia este o adevărată sărbătoare a simțurilor.",
    text5: "Vino să descoperi Grecia și să trăiești o vacanță de neuitat!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={grecia} 
        name="Grecia" 
        text="Grecia este o destinație de vis, unde istoria antică, cultura vibranta și peisajele impresionante se îmbină perfect. De la ruinele legendare ale Atenei până la plajele idilice ale insulelor grecești, Grecia oferă o diversitate unică de experiențe. Regiuni pitorești, cum ar fi insula Santorini, cu apusurile sale spectaculoase și casele albe cu acoperișuri albastre, dar și peisajele verzi ale insulei Creta, sunt doar câteva dintre atracțiile care vă vor cuceri."
      />
      <Oferte oferte={oferteGrecia} />
      <Informatie nume="Grecia" imagini={imaginiGrecia} descriere={descriereGrecia} />
    </div>
  );
}

export default Grecia;
