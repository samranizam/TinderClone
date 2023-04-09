
import './App.css';
import Header from './Header';
import Tindercards from './Tindercards';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Chat from './Chat';
function App() {
  return (
   <>
  
  <div className="App">
  
  <Router>
 
    <Switch>
    <Route path="/chat/:person">
      
      <Header backButton="/chat"/>
       <ChatScreen/>
      <h2>work</h2>
</Route>
    <Route path="/chat">
      
    <Header backButton="/"/>
    <Chats/>
    
      </Route>
      <Route path="/">
        <Header/>
        <Tindercards/>
        <SwipeButtons/>
        
      </Route>
      
       
    </Switch>
   {/*Tinder Cards*/}
  {/*Buttons*/}
  {/*Chat Screen*/}
  {/*Indivisual Chat Screen*/}
  
  </Router>
  </div>
  </>
  );
}


export default App;
