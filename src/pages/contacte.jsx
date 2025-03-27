import React from 'react'
import ImagineaSus from '../components/ImagineaSus/ImagineaSus';
import Valuri from '../assets/valuri.png';
import Oficiu1 from '../components/Oficii/Oficiu1/Oficiu1';
import Oficiu2 from '../components/Oficii/Oficiu2/Oficiu2';
import Oficiu3 from '../components/Oficii/Oficiu3/Oficiu3';
import Consultatie from '../components/Consultatie/Consultatie';

function Contacte() {
  return (
  <><ImagineaSus
  imagine={Valuri} 
  name="Contactele noastre" 
/>
<h1 style={{ textAlign: "center", fontSize:"30px"}}>Oficiile noastre</h1>
<Oficiu1/>
<Oficiu2/>
<Oficiu3/>
<Consultatie titlu="Consultație gratuită pentru alegerea vacanței perfecte!"/>
  </>)

}

export default Contacte