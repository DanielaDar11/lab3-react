import React from 'react'
import Italia from '../assets/tarile/Italia.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteItalia from '../data/italy.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/italia/Imaginile/im1.png';
import im2 from '../assets/tarile/italia/Imaginile/im2.png';
import im3 from '../assets/tarile/italia/Imaginile/im3.png';
import im4 from '../assets/tarile/italia/Imaginile/im4.png';
import im5 from '../assets/tarile/italia/Imaginile/im5.png';
import im6 from '../assets/tarile/italia/Imaginile/im6.png';
import im7 from '../assets/tarile/italia/Imaginile/im7.png';

function Italy() {

  const imagini = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriere = {
    text1: "Italia este o țară de neuitat, unde tradiția se întâlnește cu inovația și fiecare colț te invită să descoperi o poveste.",
    text2: "Italia este un loc unde istoria, arta și natura se îmbină armonios. De la plajele Mediteranei la vârfurile Alpelor, Italia oferă o diversitate de peisaje și experiențe care atrag turiști din întreaga lume.",
    text3: "Dacă iubești soarele și plajele de nisip fin, coasta Amalfi sau insulele din sudul Italiei îți vor oferi momente de relaxare de neuitat. Regiunile montane, cum ar fi Dolomiții și Alpii Italieni, sunt perfecte pentru iubitorii de schi și drumeții, iar orașele renumite precum Roma, Florența și Veneția sunt un adevărat muzeu în aer liber, cu un patrimoniu cultural deosebit.",
    text4: "Italia nu este doar despre peisaje spectaculoase și monumente istorice, ci și despre o gastronomie care îți va încânta simțurile. De la paste și pizza la vinuri celebre, fiecare masă este o adevărată sărbătoare.",
    text5: "Vino să descoperi Italia și să trăiești o vacanță de neuitat!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={Italia} 
        name="Italia" 
        text="Italia este o destinație de vis, unde istoria, cultura și peisajele spectaculoase se îmbină perfect. De la ruinele antice ale Romei până la canalele romantice ale Veneției, Italia oferă o diversitate unică de experiențe. Regiuni pitorești, cum ar fi Toscana, cu colinele sale verzi și orașele medievale, dar și plajele strălucitoare ale Coastei Amalfitane, sunt doar câteva dintre atracțiile care vă vor captiva."
      />
      <Oferte oferte={oferteItalia} />
      <Informatie nume="Italia" imagini={imagini} descriere={descriere} />
    </div>
  );
}

export default Italy;
