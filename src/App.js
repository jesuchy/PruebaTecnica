import './assets/css/App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Index from './componen/Index';
import Proceso from './componen/Proceso'
import Error from './componen/Error';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/Proceso" component={Proceso} />
      <Route path="/Error" component={Error} />
    </Router>
  );
}

export default App;
