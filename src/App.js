import logo from './logo.svg';
import './App.css';
import './styles.css';
import { Header } from './components/Header';
import Footer  from './components/Footer';
import { Users } from './components/Users';

function App() {

  var title = "USER APP"


  return (
    <div className="App">
      <h1>APP JS</h1>
      <Users title = {title}/> 
    </div>
    
  );
}

export default App;
