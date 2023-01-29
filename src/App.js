
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import CourseDetails from './CourseDetails';
import ProfilePage from './ProfilePage';


function App() {
  return (
    
    <Router>
    <div className="App">
     <Navbar />
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Create/>
        </Route>
        <Route path="/home">
         <Home />
        </Route>
        <Route path="/details/:id">
         <CourseDetails />
        </Route>
        <Route path="/profile">
         <ProfilePage/>
        </Route>
      </Switch>
      </div>  
    </div>
    </Router>
  );
}

export default App;
