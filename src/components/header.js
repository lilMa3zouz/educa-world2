import logo from '../res/svg/titre.svg';// eslint-disable-next-line
import connexion from '../res/svg/account_circle-black-18dp.svg';
import React from 'react';
import '../header.css';
import '../res/css/bootstrap.min.css'
import '../res/css/materialIcons.css'
const bleu = "#1a4175"

function needButton(state){
    if (!state){
        return(
            <p id="connectDiv"><img src={connexion} width="45px" id="connect" alt="connexion" /><br />Connexion</p>
        )
    }


}
function Header(props){
return (
    <nav id="header" className={["site-header sticky py-2 navbar navbar-expand-sm"]} >
        <img src={logo} alt="logo educa'world" id="logo" height="90px" />
        <div className={["container d-flex flex-column flex-md-row justify-content-between"]} style={{marginRight: "50px"}} id="nav">
            <a id="el1" href="www.youtube.com" >Notre mission</a>
            <a id="el2" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >Tests</a>
            <a id="el3" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >Accompagnement</a>
            <a id="el4" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >Nous soutenir</a>
            <a id="el5" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >FAQ</a>
            <a id="el6" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >Partenaires</a>
            <a id="el7" href="www.youtube.com" className={["d-none","d-md-inline-block py-4"]} >Nous contacter</a>
        </div>
        <div className={["input-group"]} style={{width: "250px",marginRight: "15px"}}>
            <div className={["input-group-prepend"]}>
                <button className={["btn outlineC2 material-icons"]} type="button" id="button-addon1" style={{border: "1px solid " + bleu}} >search</button>
            </div>
            <input type="text" className={["form-control"]} id="searchField" placeholder="recherche..." aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
        {needButton(props.isAlreadyLoged)}
    </nav>
  );
}

export default Header;
