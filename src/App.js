import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Properties from './Components/Properties/Properties';
import Rule from './Components/Rule/Rule';
import SearchBar from './Components/SearchBar/SearchBar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Features from './Components/Features/Features';

function App() {
  return (
    <div >
      <Navbar />
      <Rule />
      <Properties />
      <Rule />
      <SearchBar />
      <Rule />
      <Features/>
    </div>
  );
}

export default App;
