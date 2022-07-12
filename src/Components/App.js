//import logo from './logo.svg';
//import './App.css';

import {useState, useEffect} from 'react'
import Forms from "./Forms";
import Search from "./Search";
import Header from './Header';
import FighterContainer from "./FighterContainer";
import Quest from "./Quest";

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

    //This may have to be moved above the search function <--HEADS UP
    function getNewCharacterFromForm(newCharacterFromForm) {
        //console.log("getNewCharacterFromForm:", getNewCharacterFromForm)

        //frontEnd Updates
        //setFighterList([newCharacterFromForm, ...fighterList])
        //setSearchFighter([newCharacterFromForm, ...searchFighter])


        //backEnd Updates

    }


    return(
    <div className='App'>
        <Header />
         <Quest arrayOfQuest={questData} />
         <Search sendUpSearch ={getSearchBar}/>
         <FighterContainer arrayOfFighters={fighterList}/> 
        <Forms sendUpForm = {getNewCharacterFromForm}/>   
    </div>
)
}

export default App;

//Header
//Nav
//characters list: character cards,
//character form toggle quest form
//search bar
