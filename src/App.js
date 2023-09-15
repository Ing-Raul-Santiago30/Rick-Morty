
import imgeRickMorty from './img/rick-morty.png'; 
import './App.css';
import React, { useState } from 'react';
import Character from './components/Character';





function App() {
  const [characters, setCharacters] = useState(null);
/*  creamos la constante reqapi para el evento onclick*/
  const reqApi = async()=>{ 
  const api = await fetch('https://rickandmortyapi.com/api/character')
  /*  general otra constante*/
  const characterapi = await api.json();

  setCharacters(characterapi.results)
  
  
};


  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className='title'> Rick & Morty</h1>

        {characters ?(
          <Character characters={characters} setCharacters={setCharacters} />

        ) : (
        <>
       {/* Esto es para cargar la imagen  y importar arriba */}
        <img src={imgeRickMorty} alt='rick-morty' className='img-hom'></img> 
        
        {/* Esto es el boton de buscar con el evento */}
        <button onClick={reqApi}className='btn-search'>
        Buscar Personajes
        </button>
        </>
        )}



        
          
        

       

      </header>
    </div>
  );
}

export default App;
