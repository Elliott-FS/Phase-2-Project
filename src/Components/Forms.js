import {useState} from "react"
import styled from 'styled-components'


function Forms({sendNewFighter, sendNewQuest}) {
    
    const [characterOrQuest, setToChangeForm] = useState(true) //character=true

    //state for characters
    const [inputForName, setInputForName] = useState("")
    const [inputForRole, setInputForRole] = useState("")
    const [inputForAbilities, setInputForAbilities] = useState("")
    const [inputForHP, setInputForHP] = useState("")
    const [inputForImage, setInputForImage] = useState("")

    //state for quests
    const [inputMage, setInputMage] = useState("")
    const [inputRanged, setInputRanged] = useState("")
    const [inputMelee, setInputMelee] = useState("")
    const [inputQuest, setInputQuest] = useState("")
    const [inputQuestImg, setInputQuestImg] = useState("")

    const handleSubmit = ((e) => {
        e.preventDefault()
        let newFighter = {
            name: inputForName,
            role: inputForRole,
            abilities: inputForAbilities,
            hp: inputForHP,
            image: inputForImage
        }
        sendNewFighter(newFighter)

    })

    const handleQuestSubmit = ((e) => {
        e.preventDefault()
        let newQuestObject = {
            Quest: inputQuest,
            image_quest: inputQuestImg,
            Mage: inputMage,
            Ranged: inputRanged,
            Melee: inputMelee
        }
        sendNewQuest(newQuestObject)
        
    })

    
    return (
        <div className="toggleButton">

            <button onClick = {()=>{setToChangeForm(!characterOrQuest)}}>
            {characterOrQuest ? 
                        "Add Quest"
                        :
                        "Add Character"
                    }
            </button>

        {characterOrQuest ?
        
            //character form 
            // <div className="characterForm">
            <form onSubmit={handleSubmit}>
                <input 
                className="name"
                name="name"
                placeholder="Name"
                onChange={(e) => {setInputForName(e.target.value)}}
                value={inputForName}></input>
                <select name="Role"
                onChange={(e) => {setInputForRole(e.target.value)}}
                value={inputForRole}>
                <option>Choose Role</option>
                    <option>Magic</option>
                    <option>Melee</option>
                    <option>Ranged</option>
                </select>
                <input 
                className="abilities" 
                name="abilities"
                placeholder="Abilities"
                onChange={(e) => {setInputForAbilities(e.target.value)}}
                value={inputForAbilities}>
                </input> 
                <input 
                className="hp" 
                name="hp"
                placeholder="HP"
                onChange={(e) => {setInputForHP(e.target.value)}}
                value={inputForHP}>
                </input> 
                <input 
                className="image" 
                name="image"
                placeholder="Image URL"
                onChange={(e) => {setInputForImage(e.target.value)}}
                value={inputForImage}>
                </input>
                <button type="submit">Submit Fighter</button>  
            </form>
         :
         
            <form onSubmit={ handleQuestSubmit }>
                <select 
                name="Mage"
                onChange={(e) => {setInputMage(e.target.value)}}
                value={inputMage}>
                    <option>Choose Mage</option>
                    <option>Wanda Maximoff</option>
                    <option>Maleificent</option>
                    <option>Samdolf</option>
                    <option>Aang</option>
                </select>
                <select name="Ranged"
                onChange={(e) => {setInputRanged(e.target.value)}}
                value={inputRanged}>
                <option>Choose Ranged</option>
                    <option>Hawkeye</option>
                    <option>John Wick</option>
                    <option>Hungry Hungry Hippos</option>
                    <option>Gaara</option>
                </select>
                <select name="Melee"
                onChange={(e) => {setInputMelee(e.target.value)}}
                value={inputMelee}>
                    <option>Choose Melee</option>
                    <option>Chun Li</option>
                    <option>Samurai Jack</option>
                    <option>Rock'em Sock'em(Blue)</option>
                    <option>Sub-Zero</option>
                </select>
                <select name="Quest"
                onChange={(e) => {setInputQuest(e.target.value)}}
                value={inputQuest}>
                    <option>Choose Quest</option>
                    <option>Journey to Middle Earth! Destroy the One Ring</option>
                    <option>Defeat the Empire! Destroy the Death Star</option>
                    <option>Defeat Thanos! Recover the Infinity Gauntlet</option>
                    <option>Insert Last One</option>
                </select>
                <input 
                placeholder="Insert adventure image url"
                name="Quest-image"
                onChange={(e) => setInputQuestImg(e.target.value)}
                value={inputQuestImg}
                ></input>
                <button type="submit">Submit</button>
            </form>
            // </div>
        
        }
    </div> 
    )  //return
}  
    

export default Forms;