import styled from 'styled-components'

function FighterCard({fighterObj}) {
  let  { name, image, role, hp, abilities } = fighterObj

 
    return(
    <FighterDetail>
        <div className="card list" >
            <div className="card">
                <img 
                    className ="card image"
                    src ={image}
                    alt= {name}
                />
                <div className ="card content">
                    <div className ="card title">{name}</div>
                    <div className ="card_role"> {role}</div>
                    <div className ="card_abilities">{abilities}</div>
                    <div className ="card_hp">{hp} </div>

                </div>

            </div>
            
        </div>
    </FighterDetail>
    )
    
}

export default FighterCard;

const FighterDetail = styled.div`
img{
    max-width: 200px;
    max-height:200px
}
`