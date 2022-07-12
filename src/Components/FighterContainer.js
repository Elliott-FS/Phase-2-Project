import FighterCard from "./FighterCard"

 
function FighterContainer(props) {
    console.log(props)

return(
    <div className="card content" >
        { 
        props.arrayOfFighters.map(
            (eachFighter) => {
                return <FighterCard key={eachFighter.id} fighterObj={eachFighter}/>
            }

        )
        
        }

    {/* input .map to render cards here */}
    
    </div>
)



}

export default FighterContainer; 