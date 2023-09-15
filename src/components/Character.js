export default function Character(props) {
  const {characters,setCharacters} = props;
  const resetCharacters =()=>{
    console.log("Reseteando")
    setCharacters(null)
  }
  
  return (
    <div className="characters">
      <h1> Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
      <div className="container-characters">
        {characters.map((character,index) =>(
          <div className="character-container" key={index}>
            <div>
              
              {/* para mostrar la imagen */}
              <img src={character.image} alt={character.name} />
              </div>

              <div>
                {/* para mostrar el nombre */}
              <h3>{character.name}</h3>

              <h6>
                {character.status === "Alive" ?(
                  <>
                  <span className="alive"/>
                  Alive
                  </>
                ):(
                  
                  <>
                   <span className="dead"/>
                       DEAD
                   
                  </>
                )}
              </h6>
              <p className="text-gray"> <span> Episodio: </span></p>
              <span>{character.episode.length}</span>
              <p>
                <span className="text-gray">Especie: </span>
                <span>{character.species} </span>
              </p>
                </div>

            </div>

       ))}
      </div>
      <span className="back-home" onClickC={resetCharacters}>Volver a la home</span>
    </div>
  )
}
