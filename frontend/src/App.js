import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Search from './components/Search'

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const url = 'https://api.unsplash.com'
const App = () => {
  const [word, setWord] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`${url}/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="App">
    <Header title="Images Gallery"/>
    <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}

export default App;
