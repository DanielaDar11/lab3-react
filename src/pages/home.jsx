import React from 'react'
import Principala from '../components/Principala/Principala'
import Destinatii from '../components/Destinatii/Destinatii';
import Oferte from '../components/Oferte/Oferte';
import Tari from "../components/Tari/Tari";
import InformatiiC from "../components/InformatiiC/InformatiiC";

function Home() {
  return (
    <> 
    <Principala/>
    <Destinatii/>
    <Oferte/>
    <Tari/>
    <InformatiiC/>
    </>
  )
}

export default Home