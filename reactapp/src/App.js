import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import { Switch, Route } from 'react-router-dom';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import Appointment from './Components/Appointment';
import Doctors from './Components/Doctor';
import Doctordashboard from './Components/Doctordashboard';
import doctorprofile from './Components/DoctorProfile';
import Contact from './Components/Contact';
import viewDoctors from './Components/ViewDoctors';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signUp/:userId" component={SignUp} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/appointment" component={Appointment} />
        <Route exact path="/doctor" component={Doctors} />
        <Route exact path="/dashboard/:doctorId" component={Doctordashboard} />
        <Route exact path="/Profile/:doctorId" component={doctorprofile} />
        <Route exact path="/ViewDoctors" component={viewDoctors} />
      </Switch>
    </div>
    );
} 
export default App;

