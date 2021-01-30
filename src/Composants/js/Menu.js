import React, { Component } from "react";
import Contenu from "./Contenu";
import Navig from "./Nav";


class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <div>
                <Navig></Navig>
                <Contenu></Contenu>
            </div>
        )
    }
}

export default Menu;