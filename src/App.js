import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Title from "./components/Title/Title.jsx";
import Nav from "./components/SearchBar/Nav";
import { useState } from 'react';
import axios from 'axios';

function App() {
   const [characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         alert('¡No hay personajes con este ID!');
      }
   });
}
      
 
   const onClose = () => {
      
   }
 
   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <div className='title-image'>
         <img src='https://occ-0-5428-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWT5HIl9YXE1ZG5Khq2rGPAsxwcnKPhqJMO3E2WiZBVNemNHAlH148400SKvcFoxJFZsxLBpOCb31CliGnE3RYbxVAyHf10wyEfqZHliqF0z.png?r=a6e' />
       </div>
         <Cards characters={characters} />
        
      </div>
   );
   }


export default App;
