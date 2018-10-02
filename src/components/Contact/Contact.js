import React, { Component } from 'react';
// import '../App.css';
import './contact.css'
import axios from 'axios'
export default class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            fullname: "",
            emailAddress: "",
            subject: "",
            personalMessage: ""
        }
        this.sendMessage = this.sendMessage.bind(this)
    }
    handleState(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    sendMessage(){
        console.log('git')
        const {fullname, emailAddress, subject, personalMessage } = this.state
        axios.post('http://localhost:3535/api/send-email', {from: emailAddress, subject: subject, message: personalMessage, name: fullname})
        .then((resp) => {
            // this.setState({
            //     name: null,
            //     subject: null,
            //     email: null,
            //     messsage: null,
            // })

        })
        .catch((err) => {
            console.log('err', err)
        })
    }
    render() {
        console.log('this.state', this.state)
        return (
            <div className="contactParent">

                <form className="contactForm">
                    <input className="inputField" type="text" onChange={(e) => this.handleState(e)} name="fullName" value={this.state.fullName} placeholder="Name"/>
                    <input className="inputField" type="text" onChange={(e) => this.handleState(e)} name="emailAddress" value={this.state.emailAddress} placeholder="Email"/>
                    <input className="inputField" type="text" onChange={(e) => this.handleState(e)} name="subject" value={this.state.subject} placeholder="subject"/>
                    <textarea className="inputField messageBox" type="text" onChange={(e) => this.handleState(e)} name="personalMessage" value={this.state.personalMessage} placeholder="comments, questions and concerns"/>
                    <input className="sendButton" onClick={this.sendMessage}type="submit" value="send"/>
                </form>
            </div>
        );
    }
}