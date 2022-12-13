import {Link} from "react-router-dom"

import styled from 'styled-components'
import '../index.css'


function Header() {
 

return(
<header>
 <Nav>
  <nav>
    <div className='Nav'>
    <button className="nav-button">
    <Link to="/" style={{textDecoration: 'none'}}>Multiverse Adventure Sim</Link>
    </button>
    <button className="nav-button">
    <Link to="/fighters" style={{textDecoration: 'none'}}>Fighters</Link>
    </button>
    <button className="nav-button">
    <Link to="/adventure" style={{textDecoration: 'none'}}>Adventure</Link>
    </button>
    <button className="nav-button">
    <Link to="/quest" style={{textDecoration: 'none'}}>Quest</Link>
    </button>
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
        display: center;
        width: 50%;
        &:hover{background-color: violet;}
       
      }
      

      h1{
        color: #E6E6FF;
        font-family: 'Cinzel Decorative', cursive;
        //font-family: 'Cormorant SC', serif;
        font-size: 20px
      }
      
      
`