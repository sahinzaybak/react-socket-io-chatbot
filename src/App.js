import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.scss'
import index from './pages/index.jsx'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={index}></Route>
    </div>
  );
}

export default App;
