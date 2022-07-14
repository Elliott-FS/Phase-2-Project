import FighterCard from "./FighterCard"
import styled from 'styled-components'

  
function FighterContainer(props) {
    console.log(props)

return(
   <CardContent>
    <div className="card-content" >
        { 
        props.arrayOfFighters.map(
            (eachFighter) => {
                return <FighterCard key={eachFighter.id} fighterObj={eachFighter}/>
            }

        )
        
        }

    {/* input .map to render cards here */}
    
    </div>
    </CardContent>
)



}

export default FighterContainer; 
const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: baseline;
    align-content: center;
    justify-content: center;
    box-shadow: 0px 10px 15px 10px;

    .card-content{
        display: flex;
        flex-flow: row wrap;
        width: 70%;
        justify-content: center;

    }

   

`


