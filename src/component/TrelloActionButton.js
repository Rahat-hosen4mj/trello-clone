import React from 'react';
import Icon from "@material-ui/core/Icon"

class TrelloActionButton extends React.Component {
    renderAddButton = () =>{
        const {list} = this.props;

        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOppacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "White" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"

        return(
            <div style={{
                ...styles.oppenForButtonGroup,
                oppacity: buttonTextOppacity, color: buttonTextColor, backgroundColor: buttonTextBackground}}
                >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };
    render(){
        return this.renderAddButton();
    }
}

const styles ={
    oppenForButtonGroup:{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        height: 36,
        width: 272,
        paddingLeft: 10,
        borderRadius: 3,
    }
}

export default TrelloActionButton;