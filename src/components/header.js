import logo from '../res/svg/titre.svg';// eslint-disable-next-line
import connexion from '../res/svg/account_circle-black-18dp.svg';// eslint-disable-next-line
import React from 'react';// eslint-disable-next-line
import '../header.css';// eslint-disable-next-line
import '../res/css/bootstrap.min.css'// eslint-disable-next-line
import '../res/css/materialIcons.css'// eslint-disable-next-line
const bleu = "#1a4175"

function Header(props){
return (
    <nav id="header" class="site-header sticky py-2 navbar navbar-expand-sm" >
        <img src={logo} alt="logo educa'world" id="logo" height="90px" />
        <div class="container d-flex flex-column flex-md-row justify-content-between" style={{marginRight: "50px"}} id="nav">
            <a id="el1" href="www.youtube.com" >Notre mission</a>
            <a id="el2" href="www.youtube.com" class="d-none d-md-inline-block py-4" >Tests</a>
            <a id="el3" href="www.youtube.com" class="d-none d-md-inline-block py-4" >Accompagnement</a>
            <a id="el4" href="www.youtube.com" class="d-none d-md-inline-block py-4" >Nous soutenir</a>
            <a id="el5" href="www.youtube.com" class="d-none d-md-inline-block py-4" >FAQ</a>
            <a id="el6" href="www.youtube.com" class="d-none d-md-inline-block py-4" >Partenaires</a>
            <a id="el7" href="www.youtube.com" class="d-none d-md-inline-block py-4" >Nous contacter</a>
        </div>
        <div class="input-group" style={{width: "250px",marginRight: "15px"}}>
            <div class="input-group-prepend">
                <button class="btn outlineC2 material-icons" type="button" id="button-addon1" style={{border: "1px solid " + bleu}} >search</button>
            </div>
            <input type="text" class="form-control" id="searchField" placeholder="recherche..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
        
    </nav>// eslint-disable-next-line
  );// eslint-disable-next-line
}// eslint-disable-next-line
// eslint-disable-next-line
export default Header;
