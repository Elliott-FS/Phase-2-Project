import {useState} from "react"


function Forms({sendUpForm}) {   
    //console.log("Form props working?", sendUpForm)



    const [characterOrQuest, setToChangeForm] = useState(true) //character=true

    //inputs for new character
    const [inputFieldforNewNameOfCharcter, updateInputFieldforNewNameOfCharcter] = useState("")
    const [inputFieldforNewRoleOfCharcter, updateInputFieldforNewRoleOfCharcter] = useState("")
    const [inputFieldforNewAbilitiesOfCharcter, updateInputFieldforNewAbilitiesOfCharcter] = useState("")
    const [inputFieldforNewHPOfCharcter, updateInputFieldforNewHPOfCharcter] = useState("")
    const [inputFieldforNewImageOfCharcter, updateInputFieldforNewImageOfCharcter] = useState("")

    //inputs for new quest
    const [inputFieldforNewQuestName, updateInputFieldforNewQuestName] = useState("")
    const [inputFieldforNewQuestImage, updateInputFieldforNewQuestImage] = useState("")
    const [inputFieldforNewQuestDescription, updateInputFieldforNewQuestDescription] = useState("")



    return (
        
    <div className = "searchArea"> 
     <h2>Forms Section</h2>
        <form onSubmit={(synthEvent) => {
            synthEvent.preventDefault()
            console.log("submit form:", synthEvent)

            let newCharacterObject = {
            "name": inputFieldforNewNameOfCharcter,
            "role": inputFieldforNewRoleOfCharcter,
            "abilities": inputFieldforNewAbilitiesOfCharcter,
            "hp": inputFieldforNewHPOfCharcter,
            "image": inputFieldforNewImageOfCharcter
            }

            let newQuestObject = {
                "Quest": inputFieldforNewQuestName,
                "image_quest": inputFieldforNewQuestImage,
                "desc": inputFieldforNewQuestDescription
            }
             sendUpForm(newCharacterObject)
            }
        }
        
        >
            <div className= "toggleButton"
                 onClick = {()=>{setToChangeForm(!characterOrQuest)}}
            >
                <button>
                {characterOrQuest ? 
                    "Add Character"
                    :
                    "Add Quest"
                }
                </button>
            </div>
        </form>
    </div>
    
    )
}

export default Forms;