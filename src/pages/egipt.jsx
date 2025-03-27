import React from 'react'
import spania from '../assets/tarile/Egipt.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteSpania from '../data/egipt.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/egipt/Imaginile/im1.png';
import im2 from '../assets/tarile/egipt/Imaginile/im2.png';
import im3 from '../assets/tarile/egipt/Imaginile/im3.png';
import im4 from '../assets/tarile/egipt/Imaginile/im4.png';
import im5 from '../assets/tarile/egipt/Imaginile/im5.png';
import im6 from '../assets/tarile/egipt/Imaginile/im6.png';
import im7 from '../assets/tarile/egipt/Imaginile/im7.png';

function Egipt() {

  const imagini = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriere = {
    text1: "Egiptul este o destinație de neuitat, unde măreția istoriei antice se îmbină cu peisaje impresionante și tradiții vii.",
    text2: "Egiptul te întâmpină cu piramidele grandioase, temple fascinante și peisaje spectaculoase, oferind o experiență diversă și captivantă. De la piramidele din Giza și Valea Regilor până la plajele însorite ale Mării Roșii, vei descoperi o lume plină de mister și frumusețe.",
    text3: "Dacă îți dorești relaxare la soare și plaje cu nisip auriu, stațiunile din Hurghada și Sharm El Sheikh sunt destinații perfecte pentru vacanțe exotice. Deșertul Sahara îți oferă aventuri de neuitat, iar croazierele pe Nil te vor purta pe urmele faraonilor. Orașele vibrante precum Cairo și Alexandria sunt adevărate comori de cultură și istorie.",
    text4: "Bucătăria egipteană este un deliciu pentru simțuri. De la preparate tradiționale precum mahshi și kebab până la deserturi dulci și ceaiuri aromate, fiecare masă îți dezvăluie savoarea Orientului.",
    text5: "Descoperă Egiptul și lasă-te cucerit de o vacanță plină de aventuri și momente magice!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={spania} 
        name="Egipt" 
        text="Egiptul este o destinație fascinantă, unde măreția istoriei și frumusețea naturală se întâlnesc la tot pasul. De la impunătoarele piramide din Giza până la plajele aurii ale Mării Roșii, Egiptul oferă o gamă variată de experiențe. Fie că explorezi templele antice de pe Valea Nilului sau te relaxezi în stațiuni precum Sharm El Sheikh și Hurghada, fiecare colț al acestei țări îți dezvăluie o parte din misterul Orientului."
      />
      <Oferte oferte={oferteSpania} />
      <Informatie nume="Egipt" imagini={imagini} descriere={descriere} />
    </div>
  );
}

export default Egipt;
