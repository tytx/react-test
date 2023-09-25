import React from 'react';

function SearchHistory({ history, onDelete }) {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
