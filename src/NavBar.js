import React from 'react'
import Button from './Button'

class NavBar extends React.Component {
    render() {
        return(
            <div>
                <Button linkTo="Home"/>
                <Button linkTo="Posts"/>
                <Button linkTo="About"/>
                <Button linkTo="Contact"/>
            </div>
        )
    }
}

export default NavBar