import React, { Component } from 'react'
import axios from 'axios';

//Classes
import './App.css';
import LightControl from './lightControl';


class DeciceList extends Component {

    constructor(){
        super();

        this.state = {
            inDoorLight:{
                enabled : '',
                name : '',
                room_id : '',
                version : ''
            }

        }

    };
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

    render () {
        return (
            <div className="device-list">

            </div>

        )
    }
}

export default DeciceList
// <div>
//<LightControl enabled={this.state.inDoorLight.enabled }/>
//</div>