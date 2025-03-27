import React from 'react'
import ImagineaSus from '../components/ImagineaSus/ImagineaSus';
import Valuri from '../assets/valuri.png';
import Despre1 from '../components/Despre/Despre';
import Beneficii from '../components/Beneficii/Beneficii'
import World from '../assets/Despre/world.png';
import Recenzii from '../components/Recenzii/Recenzii';
import listaRecenzii from '../data/recenzii.json';
import Motive from '../components/Motive/Motive';
import Membri from '../data/echipa.json';
import Echipa from '../components/EchipaV/Echipa'
import InformatiiJos from '../components/InformatiiJos/InformatiiJos';


const listaBeneficii = [
  "7 ani de experiență în domeniul turismului",
  "Peste 80 de destinații, pentru toate gusturile și bugetele",
  "30 de experți în turism, dedicați să îți ofere cele mai bune recomandări",
  "2 oficii în Chișinău, deservind clienții 6 zile pe săptămână",
  "4 limbi vorbite de echipa noastră",
  "Clienți din mai mult de 10 țări",
  "Peste 50.000 de clienți satisfăcuți, trimiși la vacanțele lor de vis",
  "Acces la mii de opțiuni de cazare, disponibile pentru rezervare directă"
];

function Despre() {
  return (
    <div>
      <ImagineaSus imagine={Valuri} name="Despre noi" />
      <Despre1 />
      <Beneficii 
        title="Via Travel, cu experiență vastă în domeniul turismului, oferă:"
        list={listaBeneficii}
        image={World}
      />
      <Recenzii listaRecenzii={listaRecenzii} />
      <Motive/>
      <Echipa membri={Membri}/>
      <InformatiiJos />
    </div>
  );
}

export default Despre