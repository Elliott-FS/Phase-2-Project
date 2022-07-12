
function Search({sendUpSearch}){
return(

    <div className="search">
        <input type="text" className="search-bar"
            onChange ={(synthEvent) => sendUpSearch( synthEvent.target.value)} />

    <h2>Search Bar</h2>

    </div>




)
}

export default Search;