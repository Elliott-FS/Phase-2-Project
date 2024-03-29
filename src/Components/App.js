//import logo from './logo.svg';
//import './App.css';
 
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Forms from "./Forms";
import Search from "./Search";
import Header from './Header';
import FighterContainer from "./FighterContainer";
import Quest from "./Quest";
import Home from './Home'

function App() {
    //quest fetch data
    const [questData, setQuestData] = useState([])

    const [fighterList, setFighterList] = useState([])

    const [searchFighter, setSearchFighter] = useState([])
    
    useEffect(() => {
    fetch('http://localhost:3000/quest')
    .then(res => res.json())
    .then((data) => setQuestData(data))
    },[])
    // console.log(questData)
    //quest fetch data
 
    useEffect(() => {
        fetch('http://localhost:3000/fighters')
        .then(res => res.json())
        .then( (data)=> {
            setFighterList(data)
            setSearchFighter(data)
        })

        
    },[])

    function getSearchBar(whatIsTyped) {
        let resultOfFilter = searchFighter.filter(
            (eachFighter) => {
                if (
                    eachFighter.name.toLowerCase().includes(whatIsTyped.toLowerCase())
                )
                return (eachFighter)
            })
            setFighterList(resultOfFilter)
    } 
    //form section 

    function getNewFighter(newFighterObj){
        setFighterList([...fighterList, newFighterObj])
        fetch('http://localhost:3000/fighters', {
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newFighterObj)
        })
    }
    //quest section 

    function getNewQuest(newQuestObj){
        
        setQuestData([...questData, newQuestObj])
        fetch('http://localhost:3000/quest', {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newQuestObj)
        })
    }
 

    return(
    <div className='App'>
        <BrowserRouter>
            <Image/>
            <Header />
        <Routes>
            <Route path='/quest' element={<Quest arrayOfQuest={questData} />}/>  
            <Route path='/search' element={<Search sendUpSearch ={getSearchBar} />}/> 
            <Route path='/fighters' element={<FighterContainer arrayOfFighters={fighterList} />}/> 
            <Route path='/adventure' element={<Forms sendNewFighter={getNewFighter} sendNewQuest={getNewQuest} />}/>   
            <Route path='/' element={<Home />}/>
         </Routes>
        </BrowserRouter>    
    </div>
)
} 

export default App;

const Image = styled.img.attrs(() => ({
    src:"https://images.pling.com/img/00/00/62/69/92/1725198/free-fantasy-wallpaper-desktop-131.jpg"
}))` position: fixed; 
top: 0; 
left: 0; 
min-width: 100%;
min-height: 100%;
z-index: -1`

//Header
//Nav
//characters list: character cards,
//character form toggle quest form
//search bar
