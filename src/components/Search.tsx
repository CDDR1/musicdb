const Search = () => {
  return (
    <div className="search">
      <form action="" className="search__form">
        <label htmlFor="song" className="search__label">Search your favoite song!</label>
        <input type="text" id="song" className="search__input" placeholder="Enter song name..." />
        <button className="search__submit">Search</button>
      </form>
    </div>
  );
}

export default Search;