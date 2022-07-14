import styled from 'styled-components'
import '../index.css'


function Search({sendUpSearch}){
return(
    <SearchDetail>
    <div className="search">
        <input type="text" className="search-bar"
            onChange ={(synthEvent) => sendUpSearch( synthEvent.target.value)} />

    <h2>Search Bar</h2>

    </div>
    </SearchDetail>



)
}

export default Search;

const SearchDetail = styled.div`
color: #E6E6FF;
font-family: 'Space Grotesk', sans-serif;
display: flex;
flex-direction: column;
align-items: center;

h2{
    text-align: center;
}

`