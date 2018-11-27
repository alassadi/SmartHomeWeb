import React, { Component } from 'react'
import axios from 'axios';
import lightBulb from './images/Light-bulb.png';

class LightControl extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            inDoorLight:{
                enabled : '',
                name : '',
                room_id : '',
                version : ''
            }

        });

    }
    componentDidMount(){
        axios.get('https://europe-west1-smarthome-3c6b9.cloudfunctions.net/getDeviceFromDB?id=my9iXu6WvEgx5oNLLegs')
            .then(resp => {
                this.setState({
                    inDoorLight : {
                        enabled: resp.data.enabled,
                        name: resp.data.name,
                        room_id: resp.data.room_id,
                        version: resp.data.version
                    }

                });
                console.log(this.state.inDoorLight)
            })
            .catch(error => {
                console.log(error)
            })
    }


    turnOnSubmit = event => {
        event.preventDefault();
        axios.post(`https://europe-west1-smarthome-3c6b9.cloudfunctions.net/updateDeviceStatus?id=my9iXu6WvEgx5oNLLegs&enabled=true`)
            .then(res => {
                this.setState=({
                    inDoorLight:{
                        enabled:''
                    }
                });
                //console.log(res.data);
                console.log(this.state.inDoorLight.enabled);
            })

    };

    turnOffSubmit = event => {
        event.preventDefault();
        axios.post(`https://europe-west1-smarthome-3c6b9.cloudfunctions.net/updateDeviceStatus?id=my9iXu6WvEgx5oNLLegs&enabled=false`)
            .then(res => {
                this.setState=({
                    inDoorLight:{
                        enabled:''
                    }
                });
               // console.log(res);
                console.log(this.state.inDoorLight.enabled);
            })
    };


    render() {
        //render yapmasini geciktir
        let val=this.state.inDoorLight.enabled;

            if (val.length<0){
                return<div>Loading</div>
            }
        return (
            <div className="wrap-light-component">
                <div className="light-component">
                    <div className="light-header">
                        <h3>Indoor Light</h3>
                    </div>
                    <div>
                        <div className="img-light-bulb">
                            <img src={lightBulb} alt="light"/>
                        </div>

                        <div className="light-state">
                            {this.state.inDoorLight.enabled==='true' && <span className="on-light-span">State : ON</span>}
                            {this.state.inDoorLight.enabled==='false' && <span className="off-light-span">State : OFF</span>}
                        </div>
                    </div>

                </div>
                <div className="button-light-on">
                    <form  onSubmit={this.turnOnSubmit}>
                        <button className="button-on" type="submit">On</button>
                    </form>
                </div>
                <div className="button-light-off">
                    <form onSubmit={this.turnOffSubmit}>
                        <button className="button-off" type="submit">Off</button>
                    </form>
                </div>
                </div>

        );

    }
}

export default LightControl;