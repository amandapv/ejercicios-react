//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Persona from "./components/Persona";
//renderizo un componente Persona. Hay que importar el jsx de Persona. Solo queremos importar el css de cada componente, no de todo de manera global

//Siempre debe haber un componente padre. 
function App() {
  const personas = [
    {
      id: 1,
      nombre: "Amanda",
      edad: 26,
      profesion: "Alumna",
      foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=miguel"
    },

    {
      id: 2,
      nombre: "Miguel",
      edad: 30,
      profesion: "Alumno",
      foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=amanda"
    },
  ];

  //esto no es reutilizable
  return (
    <>
      {/* <Persona 
        nombre ="Amanda" 
        edad={26} 
        profesion="alumna" 
        foto="https://api.dicebear.com/7.x/avataaars/svg?seed=amanda"
      />
      <Persona 
          nombre ="Miguel" 
          edad={30} 
          profesion="alumno" 
          foto="https://api.dicebear.com/7.x/avataaars/svg?seed=miguel"
      /> */}

        {personas.map((persona) => (
          <Persona 
            key={persona.id}
            nombre ={persona.nombre}
            edad={persona.edad}
            profesion={persona.profesion}
            foto={persona.foto}
          />
        ))}
      </>
  );
}

export default App
