import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log("Click! Click!");
    }
    return (
        <header className='header'>
            <h1 style={headingStyle}> {title} </h1>
            <Button color='#34A853' text='Add'
                onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// css in js
const headingStyle = {
    // color: '#EA4335', 
    color: '#FBBC05', 
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 6,
}

export default Header
