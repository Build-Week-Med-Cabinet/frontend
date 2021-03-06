import React, { useState } from 'react';
// import Header from "./Components/Header";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
// import Profile from "./Components/Profile";
import ProfileCard from "./Components/ProfileCard"
import TestProfile from "./Components/TestProfile";
import Entrance from "./Components/Entrance";
import SearchForm from "./Components/SearchForm";
import { Route, Switch } from 'react-router-dom';
import {ProtectedRoute} from './Components/ProtectedRoute'
import NavBar from './Components/NavBar.js';
import EntranceHome from './Components/EntranceHome.js';


function App() { 

  // favorites state is accessible by both the ProfileCard and SearchForm components
  const [favorites, setFavorites] = useState([])

  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={EntranceHome}/>

      <Route exact path='/getmeds' component={Entrance}/>
      
      {/* <Route exact path='/search' render={(props) => <SearchForm favorites={favorites} setFavorites={setFavorites}/>}/> */}
      {/*<ProtectedRoute exact path='/profile' render={(props) => <ProfileCard favorites={favorites} setFavorites={setFavorites}/>}/>*/}
      <ProtectedRoute exact path='/profile' component={ProfileCard}/>
      <ProtectedRoute exact path='/search' component={SearchForm}/>

      <Route path ="*" component={()=> "404 not found"}/>
      </Switch>

      {/*<Route exact path='/testprofile' render={(props) => <ProfileCard favorites={favorites} setFavorites={setFavorites}/>}/>*/}

    </div>
    )
}

export default App;
