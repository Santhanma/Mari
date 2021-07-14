import React from 'react';
import Api from '../Api';
import './static/Login.css';

export default () => {
    const handleFacebookLogin = async() => {
        let result = await Api.fbPopup();
        if(result){

        }else{
            alerty("Error!");
        }

    }
    return(
        <div className = 'login'>
            <button onClick={handleFacebookLogin} >Login from FB</button>
        </div>
    )
}