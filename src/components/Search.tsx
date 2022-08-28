interface Props {
  handleSearch: (text: string) => void;
  fetchData: (e: any) => void;
}

const Search = ({ handleSearch, fetchData }: Props) => {
  return (
    <div className="search">
      <form onSubmit={(e) => fetchData(e)} action="" className="search__form">
        <label htmlFor="song" className="search__label">
          Search your favoite song!
        </label>
        <input onChange={(e) => handleSearch(e.target.value)} type="text" id="song" className="search__input" placeholder="Enter song name..." />
        <button className="search__submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
