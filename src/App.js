import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import MainPage from './Components/MainPage';
import Countries  from './Components/Countries';




function App(){
  const [newsCountry, setNewsCountry] = useState([]);
  const [countries, setCountries] = useState('')

 return(
     <Router>
       <Navigation country={countries}/>
         <Switch>
           <Route path="/" exact>
             <MainPage />
           </Route>
            <Route path="/:country">
              <Countries />
            </Route>
         </Switch>
     </Router>
 )
}

export default App;


// Api Key 8b495a78e5b34ec3ab122be33ffe0dc7
// Nigeria - https://newsapi.org/v2/top-headlines?country=ng&apiKey=8b495a78e5b34ec3ab122be33ffe0dc7
