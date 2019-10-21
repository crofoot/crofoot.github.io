import React from 'react'
import Typist from 'react-typist';
import logo from '../assets/images/icon.png';

const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 500,
}

const Header = (props) => (



    < header id="header" className="alt" >
        <span className="logo"><img src={logo} alt="" width='10%' height='10%' /></span>
        <h1>Dominic Crofoot</h1>
        <Typist startDelay={1075} cursor={cursor}>
            I am a fullstack developer based in Annapolis, Maryland.
        </Typist>
    </header >
)

export default Header
