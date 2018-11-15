import React, { Component } from 'react'
import axios from 'axios';

import lightBulb from './images/Light-bulb.png';

class LightControl extends Component {

    constructor() {
        super();
        this.state = { enabled:'' }
    }


    turnOnSubmit = event => {
        event.preventDefault();

        axios.post(`https://europe-west1-smarthome-3c6b9.cloudfunctions.net/updateDeviceStatus?id=my9iXu6WvEgx5oNLLegs&enabled=true`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    };

    turnOffSubmit = event => {
        event.preventDefault();

        axios.post(`https://europe-west1-smarthome-3c6b9.cloudfunctions.net/updateDeviceStatus?id=my9iXu6WvEgx5oNLLegs&enabled=false`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <div className="wrap-light-component">
                <div className="light-component">
                    <div className="light-header">
                        Living Room Light
                    </div>
                    <hr/>

                    <div className="img-light-bulb">
                        <img src={lightBulb} alt="light"/>
                    </div>
                </div>

                <div className="button-light-on">

                    <form  onSubmit={this.turnOnSubmit}>
                        <label>

                        </label>
                        <button className="button-on" type="submit">Turn On</button>
                    </form>
                </div>

                <div className="button-light-off">
                    <form onSubmit={this.turnOffSubmit}>
                        <label>

                        </label>
                        <button className="button-off" type="submit">Turn Off</button>
                    </form>
                </div>
            </div>



        )
    }
}

export default LightControl;