import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';


function App() {
  const dispatch = useDispatch()
  const characters = useSelector(state => state.character)


  useEffect(getCharacters, [])

  const showCharacters = () => {
    return characters.map(character => 
      <h1>{character.name}</h1>)
  }

  function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character/?page=7')
      .then(response => response.json())
      .then(({result})=> dispatch({
        type: "GET_CHARACTERS",
        characters: result
      }))
  }
  
  return (
    <div className="App">
      {showCharacters()}
    </div>
  );
}

export default App;
