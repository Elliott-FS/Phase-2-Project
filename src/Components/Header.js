import {Link, NavLink} from 'react-router-dom'
import styled from 'styled-components'
function Header() {
return(
<header>
 <Nav>
  <nav>
    <div className='Nav'>
        
        <NavLink to="/" style={{textDecoration: 'none'}}>
        <h1>Multiverse Adventure</h1>
        </NavLink>
       
        <NavLink exact to="/fighters">
        <button className='nav-button'>Fighters</button>
        </NavLink>
        
        <NavLink exact to="/quest">
        <button className='nav-button'>Quests</button>
        </NavLink>
        
        <NavLink exact to={"/adventure"}>
        <button className='nav-button'>Adventure</button>
        </NavLink>
    
    </div>
  </nav>
 </Nav>
</header>)
}

export default Header;

export const Nav = styled.nav`
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 20px;

      .nav-button{
        justify-content: space-between;
      }



      h1{
        color: #E6E6FF;
        font-family: 'Cinzel Decorative', cursive;
        font-size: 30px
      }
      
`