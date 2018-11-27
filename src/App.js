import React, { Component } from 'react';
import './App.css';

import DeviceList from "./deviceList";
import Header from "./header";
import LightControl from "./lightControl";


class App extends Component {
    render(){
        return(
            <div>
              <Header/>
                <LightControl/>

            </div>

        );
    }
}
export default App