import styled from 'styled-components'
function QuestCard({eachQuestObj}){
// console.log(eachQuestObj)
return(
    <div className="quest-card">
        <QuestDetail>
         <h2>{eachQuestObj.Quest}</h2>
         <img src={eachQuestObj.image_quest} alt="Loading"></img>
         <h4>{eachQuestObj.desc}</h4>
         <h3>{eachQuestObj.Ranged}</h3>
         <h3>{eachQuestObj.Melee}</h3>
         <img src={eachQuestObj.Melee_img} alt="Loading"/>
         <h3>{eachQuestObj.Mage}</h3>
        </QuestDetail>
    </div>
)
}
export default QuestCard

const QuestDetail = styled.div`
img{
    max-width: 200px;
    max-height: 200px
},

`