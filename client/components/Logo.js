import React from 'react'
import path from 'path'

const Logo = () => {
    return (
        <div id='logoDiv'>
            <img id='logo' src={path.join(__dirname + 'client/assets/logo.jpg')}></img>
        </div>
    )
}

export default Logo
