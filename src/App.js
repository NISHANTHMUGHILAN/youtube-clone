import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
      <div className='app__page'>
      
        <Routes>      
          <Route path='/search/:searchTerm' element={<Sidebar />} />
        </Routes>
        <Routes>
        <Route path='/search/:searchTerm' element={<SearchPage />} />
        </Routes>
        </div>
          <div className='app__page'>
          <Routes>
            <Route path="/" element={<Sidebar />} />
          </Routes>
          <Routes>
          <Route path="/" element={<RecommendedVideos />} />
          </Routes>
          </div>      
        </Router>
    </div>

  );
}

export default App;