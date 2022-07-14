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
        max-width: 275px;
        max-height:275px;
        justify-content: center;
        border-radius: 10px;
        align-items: center;

}
    .card-container{
        
        width: 250px;
        height: 365px;
        overflow: hidden;
        margin: 30px;
        box-shadow: 0px 0px 15px 10px;
        background-color: #d8e1f2;
        border-radius: 10px;
        font-size: 10px


    }
   
        
        
    
   
 
    
    
    h3,h4,p{
        text-align: center;
        
        
    }

    .image-container{
        align-items: center;

    }

`