import { useState } from 'react'

// Import data
import { mockData } from './postings';

// Import components
import SearchBar from './Components/SearchBar';
import Directory from './Components/Directory';
import Sidebar from './Components/Sidebar';
import Gallery from './Components/Gallery';
import './App.css';

function App(){
  const [postings, setPostings] = useState(mockData)
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar/>
        <Directory/>
        <Sidebar/>
        <Gallery postings={postings}/>
        </div>
    </div>
  );
}

export default App;
