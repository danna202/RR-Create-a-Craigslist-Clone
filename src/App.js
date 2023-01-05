// Import data
import { postings } from './postings';

// Import components
import SearchBar from './Components/SearchBar';
import Directory from './Components/Directory';
import Sidebar from './Components/Sidebar';
import Gallery from './Components/Gallery';
import './App.css';

function App(){
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
