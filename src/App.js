import React, { Component } from 'react';
import './App.css';

import DeviceList from "./deviceList";
import LightControl from "./lightControl";
import Header from "./header";


class App extends Component {
    render(){
        return(
            <div>
              <Header/>
                <DeviceList/>
              <LightControl/>
            </div>

        );
    }
}
export default App