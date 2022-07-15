import styled from 'styled-components'
import '../index.css'

function Home(){
    return (
        <HomeDetail>
         <div>
         <h2>Welcome to Multiverse Adventure</h2>
         <h4>Welcome to our adventure sim! Use the navigation bar to browse our collection of fighters and begin your adventure.</h4>
         <h4>The quests ahead are frought with danger DON'T GO ALONE and choose your companions wisely.</h4>
         <h4>Please keep your hands and feet inside the vehicle at all times.</h4>
         

         <p>Team Project: Class B|Software Engineering Flex Summer 2022|Developers: Hiba Rashed, Zev Geller, Elliott Wynn</p>
         
         </div>
        </HomeDetail>

    )
}

export default Home

const HomeDetail = styled.div`
color: #E6E6FF;
justify-content: center;
font-family: 'Montserrat', sans-serif;
//font-family: 'Quicksand', sans-serif;
width: 75%;
margin: 60px;
`