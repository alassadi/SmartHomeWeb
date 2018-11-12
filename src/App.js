import React, { Component } from 'react'



//classes
import './App.css'
import RoomList from "./deviceList";
import LightControl from "./lightControl";
import Header from "./header";


class App extends Component {
   render(){
       return(
           <div>
               <Header/>
               <RoomList/>
               <LightControl/>
           </div>

       );
   }
}
export default App