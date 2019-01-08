import React, {Component} from 'react';
import axios from 'axios';
import powerOutage from '../images/TempIn.png';

const aut ='Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxYTI2OGZjOTAyYmY5NjA5YzFmMzA5YmMyOTJmMmYxOGVhNjc3MzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc21hcnRob21lLTNjNmI5IiwibmFtZSI6ImZhdGloIiwiYXVkIjoic21hcnRob21lLTNjNmI5IiwiYXV0aF90aW1lIjoxNTQ2OTE3Njg3LCJ1c2VyX2lkIjoib1YzUWtocTJacVZmNWp0MlRra3lWdm1UUlN3MSIsInN1YiI6Im9WM1FraHEyWnFWZjVqdDJUa2t5VnZtVFJTdzEiLCJpYXQiOjE1NDY5MTc2ODcsImV4cCI6MTU0NjkyMTI4NywiZW1haWwiOiJmYXRpaEBmYXRpaC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZmF0aWhAZmF0aWguY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xijkwb5RsKxkejimMJH1uQ3Syz3U__4dngf0FebhGdtDq5RFBvinguwpcMXhSem4j2jxxTx4Qe7qHk1Zl1ldB8HJ0opcL-9KavRX2GNEcr4keKS18SDcKUzSpQGXI572mmdhNa0_XNe_BpmLameL1-5-7ignHf6XpwswzR2AhuStp5tpc8GcLhNn9rw9OAiJQbkerQgGLdd2CEYhb8xpQTztn0mZelnqHeqgAt_tFojtlC8rQJZyzTs3FsDYxoJPfGICWEaVJ0SHPsS7CrKjk9sgZXod6vrXyFNTqQ73PNIcVTXGWfi-APyXYKTUdqzYA6n8uAFLqqJr9JjrY7lkZQ';

class PowerOutage extends Component {


    constructor() {
        super();
        this.state = ({
            power:{
                value: ''
            }

        });

    }
/*
    componentDidMount(){
        axios.get('https://europe-west1-smarthome-3c6b9.cloudfunctions.net/devices/CO7kWmm0MLkOqzKcWsfE/',
            { headers:
                {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': aut
                } })
            .then(resp => {
                this.setState({
                   power: {
                        value: resp.data.value
                    }

                });
                console.log(this.state.power)
            })
            .catch(error => {
                console.log(error)
            })
    }
*/
    render() {
        //render yapmasini geciktir
        let val=this.state.power.value;

        if (val.length<0){
            return<div>Loading</div>
        }
        return (
            <div className="wrap-component">
                <div className="display-component">
                    <div>
                        <div className="component-image">
                            <img src={powerOutage} alt="powerOut"/>
                        </div>

                        <div className="component-state">
                            <span className="state-on-span">Temp.Upstairs</span>

                        </div>
                    </div>

                </div>

                <div className="window-bottom">
                    <span className="state-on-span">Temp : {val} C°</span>

                </div>

            </div>

        );

    }



}

export default PowerOutage;