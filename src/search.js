const SearchBar = ({searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            value={searchQuery}
            onInput={ e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Type here"
            name="s" 
        />
        <button id="searchButton" type="submit">Search</button>
    </form>
);
  

export default SearchBar;