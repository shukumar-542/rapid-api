import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [change, setChange] = useState('');
  const [final, setFinal] = useState('');
  console.log(change);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '840e76a14cmshe09ae5a93a9943ep138c95jsn3408c2d12e97',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=+${change}`, options)
      .then(response => response.json())
      .then(response => setMovies(response.d))
      .catch(err => console.error(err));
  }, [final])

  const handleSubmit=(e)=>{
    e.preventDefault()
    setFinal(change)
  }
  const handleChange = (e)=>{
    setChange(e.target.value)
  }
  return (
    <div className="App">
     <div className="input-area">
     <form onSubmit={handleSubmit}>
        <input type="text" value={change} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
     </div>
    <div className="element">
    {movies.map(items =>{
        return(
          <div>
            <img src={items.i.imageUrl} alt="" />
            <p>{items.l}</p>

          </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
