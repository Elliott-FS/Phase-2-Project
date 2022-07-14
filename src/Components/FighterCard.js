import styled from 'styled-components'

function FighterCard({fighterObj}) {
  let  { name, image, role, hp, abilities } = fighterObj
 
 
    return(
    <FighterDetail>
        <div className="card-container"  >
            <div className="image-container">
                <img 
                    className ="card-image"
                    src ={image}
                    alt= {name}
                />
                <div className ="card title">
                    <h3>{name}</h3>
                </div>
                <div className ="card_role"> 
                    <h4>{role}</h4>
                </div>
                <div className ="card_abilities">
                    <p>{abilities}</p>
                </div>
                <div className ="card_hp">
                    <p>{hp}</p>   
                    </div>

                

            </div>
            
        </div>
    </FighterDetail>
    )
    
}

export default FighterCard;

const FighterDetail = styled.div`
    img{
        max-width: 100px;
        max-height:100px;
        justify-content: center;

        
}
    
        width: 275px;
        height: 375px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: 100px;
        box-shadow: 0px 0px 15px 0px;
        background-color: #d8e1f2;
        
        
    
   
 
    
    
    h3,h4,p{
        text-align: center;
        
        
    }

    .image-container{
        align-items: center;

    }

`