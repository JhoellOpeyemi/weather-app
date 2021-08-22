const SearchButton = ({ openSearch }) => {
  return (
    <div>
      <i className="fas fa-search" onClick={openSearch}></i>
    </div>
  );
};

export default SearchButton;
