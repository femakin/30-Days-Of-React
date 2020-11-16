// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Switch, NavLink,} from 'react-router-dom'

// import Home from './Home'
// import About from './About'
// import Contact from './Contact'
// import NotFound from './NotFound'

// class App extends Component {
//   render() {
//     return (
//       <Router>
      
//         <div className='App'>
//           <h1>React Router DOM </h1>
//           <ul>
//             <li>
//               <NavLink to='/'>Home</NavLink>
//              <li> <NavLink to='/about'>About</NavLink></li>
//              <li> <NavLink to='/contact'>Contact</NavLink></li>
//             </li>
//           </ul>
//              <Switch>
            
//              <Route exact strict path="/about" component={About}/>
//              <Route exact strict path='/contact' component={Contact}/> 
//              <Route exact path='/' component={Home} />
//              <Route component={NotFound} />
//              </Switch>
//         </div>
//       </Router>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch, NavLink,} from 'react-router-dom'

function App() {
    return (
        <Router>
        
          <div className='App'>
            <h1>React Router DOM </h1>
            <ul>
              <li>
                <NavLink to='/'>Home</NavLink>
               <li> <NavLink to='/about'>About</NavLink></li>
               <li> <NavLink to='/contact'>Contact</NavLink></li>
              </li>
            </ul>
               <Switch>
              
               <Route exact strict path="/about" component={About}/>
               <Route exact strict path='/contact' component={Contact}/> 
               <Route exact path='/' component={Home} />
               <Route component={NotFound} />
               </Switch>
          </div>
        </Router>
      )
}

export default App
