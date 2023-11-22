import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import { Switch,Route } from 'react-router-dom';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path ="/" component={Home}/>
       <Route exact path ="/login" component={SignIn}/>
       <Route exact path="/signUp"component={SignUp}/>

      </Switch>
    </div>
  );
}

export default App;
