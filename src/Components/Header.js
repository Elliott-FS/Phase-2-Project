import {Link, NavLink } from 'react-router-dom'

import styled from 'styled-components'
import '../index.css'


function Header() {
 

return(
<header>
 <Nav>
  <nav>
    <div className='Nav'>
       {/* <Link> */}
         <a href="/" style={{textDecoration: 'none'}}>
          <h1>Multiverse Adventure</h1>
         </a> 
      {/* </Link> */}
        {/* <Link  to="/fighters"> */}
        <a href="/fighters">
         <button className='nav-button'>Fighters</button>
        </a>
        {/* </Link> */}
      
        {/* <Link  to="/adventure"> */}
        <a href="/adventure">
        <button className='nav-button'>Adventure</button>
        </a>
        {/* </Link> */}

        
        {/* <Link  to="/quest"> */}
        <a href="/quest">
        <button className='nav-button'>Quests</button>
        </a>
        {/* </Link> */}
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
        width: 100%;
        backgound-color: #d8e1f2;
        &:hover{background-color: violet;}
       
      }
      

      h1{
        color: #E6E6FF;
        font-family: 'Cinzel Decorative', cursive;
        //font-family: 'Cormorant SC', serif;
        font-size: 40px
      }
      
      
`