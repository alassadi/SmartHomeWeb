import React, { Component } from 'react'
import axios from 'axios';
import lightBulb from '../images/Light-bulb.png';

const aut ='Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjMxYTI2OGZjOTAyYmY5NjA5YzFmMzA5YmMyOTJmMmYxOGVhNjc3MzAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc21hcnRob21lLTNjNmI5IiwibmFtZSI6ImZhdGloIiwiYXVkIjoic21hcnRob21lLTNjNmI5IiwiYXV0aF90aW1lIjoxNTQ2OTE3Njg3LCJ1c2VyX2lkIjoib1YzUWtocTJacVZmNWp0MlRra3lWdm1UUlN3MSIsInN1YiI6Im9WM1FraHEyWnFWZjVqdDJUa2t5VnZtVFJTdzEiLCJpYXQiOjE1NDY5MTc2ODcsImV4cCI6MTU0NjkyMTI4NywiZW1haWwiOiJmYXRpaEBmYXRpaC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZmF0aWhAZmF0aWguY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Xijkwb5RsKxkejimMJH1uQ3Syz3U__4dngf0FebhGdtDq5RFBvinguwpcMXhSem4j2jxxTx4Qe7qHk1Zl1ldB8HJ0opcL-9KavRX2GNEcr4keKS18SDcKUzSpQGXI572mmdhNa0_XNe_BpmLameL1-5-7ignHf6XpwswzR2AhuStp5tpc8GcLhNn9rw9OAiJQbkerQgGLdd2CEYhb8xpQTztn0mZelnqHeqgAt_tFojtlC8rQJZyzTs3FsDYxoJPfGICWEaVJ0SHPsS7CrKjk9sgZXod6vrXyFNTqQ73PNIcVTXGWfi-APyXYKTUdqzYA6n8uAFLqqJr9JjrY7lkZQ';

class LightControl extends Component {

    constructor() {
        super();
        this.state = ({
            inDoorLight:{
                value : ''
            }
        });

    }

    /*
    componentDidMount(){
        axios.get('https://europe-west1-smarthome-3c6b9.cloudfunctions.net/devices/my9iXu6WvEgx5oNLLegs/',
            { headers:
                {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': aut } })
            .then(resp => {
                this.setState({
                    inDoorLight : {
                        value: resp.data.value
                    }

                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    //refres component

    turnOnSubmit = event => {
        const data={
            'value':'true'
        };
        event.preventDefault();
        axios.post('https://europe-west1-smarthome-3c6b9.cloudfunctions.net/devices/my9iXu6WvEgx5oNLLegs/',
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': aut
                }
            })
            .then(res => {
                this.componentDidMount();
                console.log(this.state.inDoorLight);
            })
            .catch(error => {
                console.log(error);

            });

    };

    turnOffSubmit = event => {
        const data={
            'value':'false'
        };
        event.preventDefault();
            axios.post('https://europe-west1-smarthome-3c6b9.cloudfunctions.net/devices/my9iXu6WvEgx5oNLLegs/',
                JSON.stringify(data),
                {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': aut
                }
                })
                .then(res => {
                    this.componentDidMount();
                    console.log(this.state.inDoorLight);

            })
                .catch(error => {
                    console.log(error);

                })

    };
    */

    render() {
        //render yapmasini geciktir
        let val=this.state.inDoorLight.value;

            if (val.length<0){
                return<div>Loading</div>
            }
        return (

            <div className="wrap-component">
                <div className="display-component">
                    <div>
                        <div className="component-image">
                            <img src={lightBulb} alt="light"/>
                        </div>

                        <div className="component-state">
                            <div>
                                <span className="state-on-span"> Indoor Light</span>
                            </div>

                            {this.state.inDoorLight.value==='true' && <span className="state-on-span">State : On</span>}
                            {this.state.inDoorLight.value==='false' && <span className="state-off-span">State : Off</span>}
                        </div>
                    </div>

                </div>
                <div className="button-right">
                    <form  onSubmit={this.turnOnSubmit}>
                        <button className="button-on" type="submit">On</button>
                    </form>
                </div>
                <div className="button-left">
                    <form onSubmit={this.turnOffSubmit}>
                        <button className="button-off" type="submit">Off</button>
                    </form>
                </div>
                </div>

        );

    }
}

export default LightControl;
//if statement for the state in div
//{this.state.inDoorLight.enabled==='true' && <span className="state-on-span">Indoor Light</span>}
//{this.state.inDoorLight.enabled==='false' && <span className="state-off-span">State : OFF</span>}
// authentication code
//eyJhbGciOiJSUzI1NiIsImtpZCI6IjBmNzM4YTUyYTJjZTlmMzE3MjBhNjdhYjFjY2E4ZTM3OGVkMTBkMTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc21hcnRob21lLTNjNmI5IiwiYXVkIjoic21hcnRob21lLTNjNmI5IiwiYXV0aF90aW1lIjoxNTQ2NjA5MTEwLCJ1c2VyX2lkIjoib1YzUWtocTJacVZmNWp0MlRra3lWdm1UUlN3MSIsInN1YiI6Im9WM1FraHEyWnFWZjVqdDJUa2t5VnZtVFJTdzEiLCJpYXQiOjE1NDY2MDkxMTAsImV4cCI6MTU0NjYxMjcxMCwiZW1haWwiOiJmYXRpaEBmYXRpaC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZmF0aWhAZmF0aWguY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GQ-9FzS0bGLqmfo3hGVTerX30oDLIU7OwMEUagTI_rPJy624BEuPC7DfIJdxxZP-hxihsUVsR5qYxYnGuRKkzO82_fupz6Xt2qa7MsheMHPDwvtnWTx89HJ456dgut2z9jzdD2sBlLB30w1f5iTjcRjN8z5xAurkyoqQlEx7Ijlf8CRD9yDB09geIRNdx5T1htCQ4w0_i3nUmomQ-gB83oSulhZGoZodPpTOFCtbt9KpakiaC0j-b7x2SNoMQonzWsX7OcrDKavz4E4nWu0AuIGtb4UH36RE5PrEoP6CZdxnUoB3Iy1qU4Z4dLKKwWPqvy_UnzKTs60k5cNhrckn7A