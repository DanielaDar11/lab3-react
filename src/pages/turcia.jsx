import React from 'react'
import turcia from '../assets/tarile/Turcia.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteSpania from '../data/turcia.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/turcia/Imaginile/im1.png';
import im2 from '../assets/tarile/turcia/Imaginile/im2.png';
import im3 from '../assets/tarile/turcia/Imaginile/im3.png';
import im4 from '../assets/tarile/turcia/Imaginile/im4.png';
import im5 from '../assets/tarile/turcia/Imaginile/im5.png';
import im6 from '../assets/tarile/turcia/Imaginile/im6.png';
import im7 from '../assets/tarile/turcia/Imaginile/im7.png';

function Turcia() {

  const imagini = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriere = {
    text1: "Turcia este o destinație de neuitat, unde istoria fascinantă se îmbină cu peisaje  și tradiții autentice.",
    text2: "Turcia te întâmpină cu situri istorice uluitoare, orașe vibrante și plaje spectaculoase, oferind o experiență diversă și captivantă. De la minunile arhitecturale din Istanbul și ruinele antice din Efes până la plajele însorite ale Rivierei Turcești, vei descoperi o lume plină de farmec și diversitate.",
    text3: "Dacă îți dorești relaxare la soare și peisaje de poveste, stațiunile din Antalya, Bodrum și Marmaris sunt destinații ideale pentru vacanțe exotice. Cappadocia te așteaptă cu formațiuni stâncoase impresionante și zboruri cu balonul, iar croazierele pe Bosfor oferă priveliști de neuitat asupra Istanbulului. Orașele istorice precum Ankara și Izmir sunt adevărate comori culturale și istorice.",
    text4: "",
    text5: "Descoperă Turcia și bucură-te de o vacanță plină de aventuri, relaxare și momente de neuitat!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={turcia} 
        name="Turcia" 
        text="Turcia este o destinație fascinantă, unde istoria bogată și frumusețea naturală se îmbină armonios la fiecare pas. De la mărețele moschei din Istanbul până la plajele însorite ale Rivierei Turcești, Turcia oferă o varietate de experiențe captivante. Fie că explorezi ruinele antice din Efes și Cappadocia sau te relaxezi în stațiuni precum Antalya și Bodrum, fiecare colț al acestei țări îți dezvăluie o parte din farmecul Orientului."
      />
      <Oferte oferte={oferteSpania} />
      <Informatie nume="Turcia" imagini={imagini} descriere={descriere} />
    </div>
  );
}

export default Turcia;
