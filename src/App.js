import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AddInfo from './components/AddInfo/AddInfo'
import About from './components/About/About'
import EditInfo from './components/EditInfo/EditInfo'
import DisplayInfo from './components/DisplayInfo/DisplayInfo'
import Delete from "./components/Delete/Delete"


import { BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  
  return (
   <Router> 
    <Navbar title="REACT CURD"/>

     <Route exact path="/" render={() => <Home title="Chart Information"/> }/>
     <Route   path="/add_info" render={() => <AddInfo title="Add your Information"/> }/>
     <Route   path="/about_info" render={() => <About title="about Information"/> }/>
     <Route   path="/edit_info/:id" render={() => <EditInfo title="Edit Information"/> }/>
     <Route   path="/display_info/:id" render={() => <DisplayInfo title="Display Information"/> }/>
     <Route   path="/delete_info/:id" render={() => <Delete title="Delete Information"/> }/>
     
   </Router>
  );
}

export default App;
