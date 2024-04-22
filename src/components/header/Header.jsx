import React from 'react'
import './style.css'


export default function Header() {
  return (
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Aibek</em></strong><br/>
                I'm frontend developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="https://github.com/gridxprime" className="btn"> <button> Visit my GitHub</button></a>
        </div>
    </header>
  )
}
