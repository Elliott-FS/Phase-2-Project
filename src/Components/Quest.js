import QuestCard from "./QuestCard";
function Quest({arrayOfQuest}){
// console.log(arrayOfQuest)

    return (
    <div className="Quest">
        {arrayOfQuest.map((eachQuest) => {
            return <QuestCard key={eachQuest.id} eachQuestObj={eachQuest} />
        })}
    </div>
)
}

export default Quest;