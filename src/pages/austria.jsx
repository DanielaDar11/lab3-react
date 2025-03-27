import React from 'react'
import austria from '../assets/tarile/Austria.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteSpania from '../data/spania.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/austria/Imaginile/im1.png';
import im2 from '../assets/tarile/austria/Imaginile/im2.png';
import im3 from '../assets/tarile/austria/Imaginile/im3.png';
import im4 from '../assets/tarile/austria/Imaginile/im4.png';
import im5 from '../assets/tarile/austria/Imaginile/im5.png';
import im6 from '../assets/tarile/austria/Imaginile/im6.png';
import im7 from '../assets/tarile/austria/Imaginile/im7.png';

function Spania() {

  const imagini = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriere = {
    text1: "Austria este o destinație de vis, unde peisajele montane impresionante și istoria bogată se întâlnesc perfect.",
    text3: "Austria este o destinație de neuitat, unde tradițiile istorice se îmbină cu peisaje montane și orașe de o eleganță desăvârșită. Austria te întâmpină cu castele medievale, capitale culturale vibrante și peisaje de vis, oferind o experiență diversă și captivantă. De la palatele imperiale din Viena și Salzburg la peisajele alpine din Tirol și Carpați, vei descoperi o țară plină de farmec și rafinament.",
    text4: "Dacă îți dorești o vacanță relaxantă, stațiunile de schi din Alpi și lacurile pitorești din regiunea Salzburg sunt ideale pentru iubitorii de natură și sporturi de iarnă. Orașele istorice, precum Innsbruck și Linz, îți vor dezvălui comori culturale și arhitecturale remarcabile.",
    text5: "Descoperă Austria și bucură-te de o vacanță plină de aventuri, tradiții și momente de neuitat!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={austria} 
        name="Austria" 
        text="Austria este o destinație fascinantă, unde istoria impresionantă și peisajele montane spectaculoase se îmbină armonios. De la palatele regale din Viena și farmecul orașului Salzburg, până la stațiunile de schi din Alpi, Austria oferă o varietate de experiențe captivante. Fie că explorezi patrimoniul cultural din capitalele istorice sau te relaxezi în peisajele montane idilice, Austria te va cuceri cu frumusețea sa naturală și tradițiile sale."
      />
      <Oferte oferte={oferteSpania} />
      <Informatie nume="Austria" imagini={imagini} descriere={descriere} />
    </div>
  );
}

export default Spania;
