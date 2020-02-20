import React, { Component } from "react"
import Header from "./header"
import ToggleMenu from "./toggleMenu"

class Menu extends Component {
    state = {
        menuToggler: false
    }

    togglerClickHandler = () => {
        this.setState((prevState) => {
            return { menuToggler: !prevState.menuToggler }
        })
    }
    render() {
        return (
            <>
                <Header clickHandler={this.togglerClickHandler}/>
                <ToggleMenu show={this.state.menuToggler}/>
            </>
        )
    }
}

export default Menu;