import React, { Component } from 'react'
import axios from 'axios';

class LightControl extends Component {

    constructor() {
        super();
        this.state = { device:'' }
    }


    handleChange = event => {
        this.setState({ device: event.target.value });
    };

    /*
    turnOnSubmit = event => {
        event.preventDefault();

        const turnOn = {
            name: "light",
            state: "On"
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { turnOn })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    turnOffSubmit = event => {
        event.preventDefault();

        const turnOff = {
            name: "light",
            state: "Off"
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { turnOff })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <div className="button-container">
                    <form  onSubmit={this.turnOnSubmit}>
                        <label>

                        </label>
                        <button type="submit" className="button">Turn On</button>
                    </form>

                    <form onSubmit={this.turnOffSubmit}>
                        <label>

                        </label>
                        <button type="submit" className="button">Turn Off</button>
                    </form>

            </div>



        )
    }
    */

    turnOnSubmit = event => {
        event.preventDefault();


        axios.get(`https://us-central1-smarthome-3c6b9.cloudfunctions.net/turnOnDevice?id=y3BVqxWaMZOmmcEPunb6`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    turnOffSubmit = event => {
        event.preventDefault();

        axios.get(`https://us-central1-smarthome-3c6b9.cloudfunctions.net/turnOffDevice?id=y3BVqxWaMZOmmcEPunb6`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    render() {
        return (
            <div className="button-container">
                <form  onSubmit={this.turnOnSubmit}>
                    <label>

                    </label>
                    <button type="submit" className="button">Turn On</button>
                </form>

                <form onSubmit={this.turnOffSubmit}>
                    <label>

                    </label>
                    <button type="submit" className="button">Turn Off</button>
                </form>

            </div>



        )
    }





}

export default LightControl;