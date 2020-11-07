import React, {useContext} from 'react';
import '../styles/SearchName.css';
import DataAreaContext from '../utils/DataAreaContext';

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input
              type="text"
              className="form-control"
              id="query"
              placeholder="Jane Doe"
              nChange={(e) => context.handleSearchChange(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchName;
