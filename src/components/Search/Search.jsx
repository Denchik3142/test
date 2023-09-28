import { useContext } from 'react';
import './Search.css';
import { AppContext } from '../../App';

const Search = () => {
  const search = useContext(AppContext);
  return (
    <input
      value={search.searchValue}
      onChange={(Event) => search.setSearchValue(Event.target.value)}
      className="search"
      placeholder="Поиск пиц..."
    />
  );
};

export default Search;
