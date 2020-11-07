import React from 'react';
import '../styles/SearchName.css';

const SearchName = ({handleSearchChange}) => {
  // const context = useContext(DataAreaContext);

  return (
    <div className="card">
      <div className="card-body">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="query">Search</label>
            <input
              type="text"
              className="form-control"
              id="query"
              placeholder="Jane Doe"
              onChange={(e) => handleSearchChange(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchName;
