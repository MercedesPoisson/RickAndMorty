import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Title from "./components/Title/Title.jsx";
import Nav from "./components/SearchBar/Nav";
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
 
function App() {
   const [characters, setCharacters] = useState([]);
   const [showImage, setShowImage] = useState(true);
   
   
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setShowImage(false);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }    
   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
      setCharacters(charactersFiltered)
      if (charactersFiltered.length === 0) {
         setShowImage(true);
      }
   }

   // const getRandomCharacter = () => {
   //    const randomIndex = Math.floor(Math.random() * characters.length);
   //    const randomCharacter = characters[randomIndex];
   //    setCharacters((oldChars) => [...oldChars, randomCharacter]);
   // }
 
   return (
      <div className='App'>
         
         <Nav onSearch={onSearch} />

         <div className='title-image'>
         <img src='https://occ-0-5428-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWT5HIl9YXE1ZG5Khq2rGPAsxwcnKPhqJMO3E2WiZBVNemNHAlH148400SKvcFoxJFZsxLBpOCb31CliGnE3RYbxVAyHf10wyEfqZHliqF0z.png?r=a6e' />
         </div>
         {showImage && (
            <div className='title-image'>
               <img src='https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg' />
            </div>
         )}
         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:detailId' element={<Detail/>} />
         </Routes>
      
         
      </div>
   );
   }


export default App;
