import React, { Component } from 'react'
import './App.css'
import axios from 'axios';

class RoomList extends Component {

    constructor(){
        super();
        this.state = { roomNumbers:[]}
    };
    componentDidMount(){
        axios.get('https://us-central1-smarthome-3c6b9.cloudfunctions.net/getRooms')
            .then(resp =>{
                this.setState({roomNumbers: resp.data});
/*
        axios.get('https://us-central1-smarthome-3c6b9.cloudfunctions.net/getRoomDevices?id=K7F2O2YJLAWJxy4t9DI9')
            .then(resp =>{
                this.setState({roomNumbers: resp.data});
                bu kod ile device id sini al ve light controlda get regust yap



        axios.get('https://us-central1-smarthome-3c6b9.cloudfunctions.net/turnOnDevice?id=')
            .then(resp =>{
                this.setState({roomNumbers: resp.data});
*/

            });
    }

    render () {
        return (
            <div className="list-device">
                <ul>
                    {this.state.roomNumbers.map(getNumbers =>
                        <li className="list-device" key={getNumbers.id}>
                            {getNumbers.id} <hr/>
                        </li>)}

                </ul>
            </div>

        )
    }
}
export default RoomList