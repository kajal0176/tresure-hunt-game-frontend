
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Register from './User/pages/auth/Register';
import GameIntro from './User/pages/GameInto';
import GameProblem from './User/pages/GameProblem';
import GameResult from './User/pages/GameResult';
import Login from './User/pages/auth/login';
import Clue from './User/pages/Clue';

function App() {
  return (
    <Router>
        <Routes>
           <Route exact path="/" element={<Register/>}/>
           <Route exact path="/login" element={<Login/>}/>
           <Route path="/gameIntro" element={<GameIntro/>}/>
           <Route path="/gameProblem" element={<GameProblem/>}/>
           <Route path ="/gameResult" element={<GameResult/>}/>
           <Route path ="/clue" element={<Clue/>}/>              
        </Routes>
    </Router>
  );
}

export default App;
