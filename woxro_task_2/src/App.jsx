import { useState } from 'react'
import React from 'react';

import './App.css'

function App() {
  const [directors, setDirectors] = useState([]);

  const handleAdd = () => {
    const newDirector = {
      directorName: '',
      movieName: '',
    };
    setDirectors([...directors, newDirector]);
  };

  const handleRemove = (index) => {
    setDirectors(directors.filter((director, i) => i !== index));
  };

  const handleChange = (event, index) => {
    const updatedDirectors = [...directors];
    updatedDirectors[index][event.target.name] = event.target.value;
    setDirectors(updatedDirectors);
  };

  return (
    <div className="App">
      <div className="container" >
        <h1 className='header'>Director and Movies</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Director Name</th>
            <th>Movie Name</th>
            <th>
              <button  style={{backgroundColor:'green'}} onClick={handleAdd}>Add</button>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {directors.map((director, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="directorName"
                  value={director.directorName}
                  onChange={(event) => handleChange(event, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="movieName"
                  value={director.movieName}
                  onChange={(event) => handleChange(event, index)}
                />
              </td>
              <td>
                <button style={{backgroundColor:"red"}} onClick={() => handleRemove(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>  
  )
}

export default App



      
