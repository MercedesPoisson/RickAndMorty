import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Title from "./components/Title/Title.jsx";
import Nav from "./components/SearchBar/Nav";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form';


const API_KEY = "0a9b7fd55434.d735a9319775188f7884";
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
 
function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [showImage, setShowImage] = useState(true);
   const [access, setAcces] = useState(false);
   
   const email = "mercedespoisson@yahoo.com";
   const password = "123abc";

   const login = (userData) => {
      if(userData.email === email && userData.password === password){
         setAcces(true)
         navigate("/home");
      }
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      
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
      const charactersFiltered = characters.filter(character => character.id !== (id)) 
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

         <div className='title-image'>
         <img src='https://occ-0-5428-1740.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWT5HIl9YXE1ZG5Khq2rGPAsxwcnKPhqJMO3E2WiZBVNemNHAlH148400SKvcFoxJFZsxLBpOCb31CliGnE3RYbxVAyHf10wyEfqZHliqF0z.png?r=a6e' />
         </div>
                 
         {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}

         
         {/* {showImage && (
            <div className='RickandMorty-image'>
               <img src='https://es.rollingstone.com/wp-content/uploads/2022/09/La-serie-Rick-y-Morty-podria-ser-eterna.jpg' />
            </div> */}
         {/* )} */}

         <Routes>
            <Route path='/home' element={<Cards onClose={onClose} characters={characters} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            {/* <Route path='/' element={<Form/>} /> */}
         </Routes>
      
         
      </div>
   );
   }


export default App;
