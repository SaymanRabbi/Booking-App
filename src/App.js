import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Properties from './Components/Properties/Properties';
import Rule from './Components/Rule/Rule';
import SearchBar from './Components/SearchBar/SearchBar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function App() {
  return (
    <div >
      <Navbar />
      <Rule />
      <Properties />
      <Rule />
      <SearchBar/>
    </div>
  );
}

export default App;
