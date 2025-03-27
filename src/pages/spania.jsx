import React from 'react'
import spania from '../assets/tarile/Spania.png';
import ImagineaPrincipala from '../components/ImagineaPrincipala/ImagineaPrincipala';
import Oferte from '../components/Cardurile/Oferte/Oferte';
import oferteSpania from '../data/spania.json';
import Informatie from '../components/Informatie/Informatie';


import im1 from '../assets/tarile/spania/Imaginile/im1.png';
import im2 from '../assets/tarile/spania/Imaginile/im2.png';
import im3 from '../assets/tarile/spania/Imaginile/im3.png';
import im4 from '../assets/tarile/spania/Imaginile/im4.png';
import im5 from '../assets/tarile/spania/Imaginile/im5.png';
import im6 from '../assets/tarile/spania/Imaginile/im6.png';
import im7 from '../assets/tarile/spania/Imaginile/im7.png';

function Spania() {

  const imagini = [im1, im2, im3, im4, im5, im6, im7];

  
  const descriere = {
    text1: "Spania este o destinație fascinantă, unde istoria, cultura și peisajele uimitoare se împletesc perfect.",
    text2: "Spania este o țară plină de farmec, unde istoria, cultura și peisajele spectaculoase se îmbină perfect. De la arhitectura uimitoare a Barcelonei și plajele însorite ale Costa Brava, până la farmecul istoric al Andaluziei, Spania oferă o diversitate de experiențe unice.",
    text3: "Dacă îți place soarele și nisipul fin, plajele din insulele Baleare și Canare sunt locuri ideale pentru relaxare și distracție. Regiunile montane, cum ar fi Pirineii și Sierra Nevada, sunt perfecte pentru iubitorii de drumeții și sporturi de iarnă, iar orașele istorice precum Madrid și Sevilla te vor purta într-o călătorie în timp, în inima tradiției spaniole.",
    text4: "Spania este, de asemenea, un paradis culinar. De la tapas și paella, la vinuri excelente și ulei de măsline, fiecare masă este o adevărată sărbătoare a gusturilor.",
    text5: "Vino să explorezi Spania și să te bucuri de o vacanță de neuitat!"
  };

  return (
    <div>
      <ImagineaPrincipala 
        imagine={spania} 
        name="Spania" 
        text="Spania este o destinație de vis, unde cultura vibrantă și peisajele diverse se îmbină perfect. De la arhitectura unică a Barcelonei până la plajele însorite ale Costa Brava, Spania oferă o varietate de experiențe. Regiuni ca Andaluzia, cu farmecul său istoric, și insulele Baleare, cu plajele spectaculoase, sunt doar câteva dintre atracțiile care vă vor cuceri."
      />
      <Oferte oferte={oferteSpania} />
      <Informatie nume="Spania" imagini={imagini} descriere={descriere} />
    </div>
  );
}

export default Spania;
