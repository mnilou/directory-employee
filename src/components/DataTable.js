import React, {useContext} from 'react';
import DataBody from './DataBody';
import DataAreaContext from '../utils/DataAreaContext';

const DataTable = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="datatable">
      <table id="table" className="table">
        <thead>
          <tr>
            {context.developerState.headings.map(({name, width}) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{width}}
                  onClick={() => {
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <DataBody />
      </table>
    </div>
  );
};

export default DataTable;
