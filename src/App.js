import React from 'react';
import './login.css';
import axios from 'axios';
import Header from './components/header.js'
import logo from './res/svg/titre.svg';// eslint-disable-next-line
var mysql = require('mysql');

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      error: '',
    }
    this.handlePassword = this.handlePassword.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.verifyId = this.verifyId.bind(this)

  }
  handlePassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  handleUsername(event) {
    this.setState({
      username: event.target.value
    })
  }
  
  addError(error){
    if(error==="badPassword"){
      return(<div className={["alert alert-danger"]} role="alert">Votre mot de passe contient une erreur! Merci de réessayer ou <a href="#">réinitialisez votre mot de passe</a></div>)
    }
    if(error==="undefinedAccount"){
      return(<div className={["alert alert-warning"]} role="alert">Cet utilisateur n'est pas répertorié dans nos bases de données. Réssayez avec la bonne addresse ou <a href="#">créez un compte</a></div>)
    }
  }
  
  
  verifyId(){
    var ceci = this
    axios.post('https://lilma3zouz.000webhostapp.com/', JSON.stringify({
      address: this.state.username,
      password: this.state.password,
    }))
    .then(function (response) {
      if(response.data.error){
        console.log(response.data.error)
        ceci.setState({
          error: ceci.addError(response.data.error)
        })
      }
      else{
        console.log("pute")
      }
    })
  }

  render(){
    return (
      <div className="Login">
        <Header isAlreadyLoged={true}></Header>
        <div id="form">
        <p style={{textAlign: "center",width: "100%"}}><img src={logo} alt="logo" height="90px" /></p>
        {this.state.error}
          <div className={["form-group"]}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className={["form-control"]} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleUsername} />
            <small id="emailHelp" className={["form-text text-muted"]} >We'll never share your email with anyone else.</small>
          </div>
          <div className={["form-group"]}>
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className={["form-control"]} id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
        </div>
        <div className={["form-check"]} >
          <input type="checkbox" className={["form-check-input"]} id="exampleCheck1" />
          <label className={["form-check-label"]} htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button  onClick={this.verifyId}  className={["btn btn-primary"]} >Submit</button>
    </div>
        </div>
    );
  }
}

export default Login;
