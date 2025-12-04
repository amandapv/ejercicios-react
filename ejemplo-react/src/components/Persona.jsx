//Metido en la carpeta Components porque serán los componenetes que yo cree por mi cuenta

function Persona({nombre, edad, profesion,foto}) { //abro mostachos para poder usar cosas de Javascript
    //objeto javascript
    //const persona = {
      //  nombre: "Amanda",
        //edad: "26",
        //profesion: "Alumna",
        //foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=amand"
    //};

    return (
        //<div className="persona-card">
         //   <img src={persona.foto} alt={persona.nombre} className="persona-foto" />
          //  <h2 className="persona-nombre">{persona.nombre}</h2>
            //<h2 className="persona-info">{persona.edad} años</h2>
            //<h2 className="persona-nombre">{persona.profesion}</h2>
        //</div>

        <div className="persona-card">
            <img src={foto} alt={nombre} className="persona-foto" />
            <h2 className="persona-nombre">{nombre}</h2>
            <h2 className="persona-info">{edad} años</h2>
            <h2 className="persona-nombre">{profesion}</h2>
        </div>
    )

}

export default Persona;