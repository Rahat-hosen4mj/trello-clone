import React from 'react';
import Icon from "@material-ui/core/Icon";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextareaAutosize from 'react-textarea-autosize';
import {connect } from 'react-redux';
import {addList, addCard} from '../action'


class TrelloActionButton extends React.Component {
    state = {
        formOpen: false
    }
    openForm = () =>{
        this.setState({
            formOpen: true
        })
    }
    closeFrom = (e) =>{
        this.setState({
            formOpen: false
        })
    }

handleInputChange = e =>{
        this.setState({
          text: e.target.value  
        })
    }

    handleAddList = () =>{
        const {dispatch} = this.props;
        // console.log('handle add list props = ',this.props)
        const { text } = this.state;
        // console.log('handle add list state = ',this.state)

        if(text) {
            dispatch(addList(text))
            this.setState({
                text: ''
            })
        }

        return;
    }

    handleAddCard = () =>{
        const {dispatch, listId} = this.props;
        const {text } = this.state;
        // console.log(text, listId)
        if(text){
            dispatch(addCard(listId, text));
            
        }
    }

    renderAddButton = () =>{
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOppacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "green" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"
        
       
        return(
            <div
             onClick={this.openForm}
            style={{
              
                ...styles.oppenForButtonGroup,
                oppacity: buttonTextOppacity, color: buttonTextColor, backgroundColor: buttonTextBackground}}
                >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

   

    renderForm = () =>{
        const {list} = this.props;
        const buttonTitle = list ? 'Add list' : "Add Card"
        const placeholder = list ? 'Enter List title...' : "Enter a title for this card"
        return <div>
            <Card style={{
                overflow: 'visible',
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
            <TextareaAutosize
             placeholder={placeholder}
            autoFocus
            onBlur={this.closeFrom} 
            onChange= {this.handleInputChange} 
            style={{
                resize: 'none',
                width: '100%',
                outline: "none",
                border: 'none'
            }} 
               />
            </Card>
            <div style={styles.formButtonGroup}>
            <Button variant='contained'
             onMouseDown={list ? this.handleAddList : this.handleAddCard}
            style={{color: "white", backgroundColor: '#5aae44'}}>{buttonTitle}</Button>
            <Icon style={{cursor: 'pointer', marginLeft: 8}}>close</Icon>
            </div>
        </div>
    }
    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
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
    },
    formButtonGroup:{
        display: 'flex',
        marginTop: 8,
        alignItems: 'center'
    }
}

export default connect() (TrelloActionButton);