import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField' ;
import Button from '@material-ui/core/Button';
import {withRouter} from "react-router-dom";
//import './login.css';


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            errorTest:'',
        }
    }
    handleClick=(event)=>{
        var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var passwordformat=/^[A-Za-z]\w{7,14}$/;
        if(this.state.username=="" || this.state.password =="")
        {this.setState({errorText:"cannot be empty!"})}
        else{this.setState({errorText:""})}
        // if(this.state.username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        //     this.setState({errorText:""}) 
        // }
        // else{this.setState({errorText:"Enter valid email id"})}
        // if(this.state.password.match(/^[A-Za-z]\w{7,14}$/)){
        //     this.setState({errorText:""}) 
        // }
        // else{this.setState({errorText:"Enter valid Password"})}
        
        if(this.state.username=="rupika@gmail.com" && this.state.password=="Rupika@17"){
           
            this.props.history.push("/home");
        }
        else{
            this.setState({errorText:"Invalid User"})
        }
    }
    render(){   
        return(
            <div>
                <MuiThemeProvider>
                    <div className="main-div">
                        <AppBar
                        title="Login"
                        ShowMenuIconButton={false} />
                        <TextField 
                        hintText="Enter Email"
                        floatingLAbelText="User Name"
                        errorText={this.state.errorText}
                        onChange={(event)=>this.setState({username:event.target.value})}
                        /> 
                        <br />
                        <TextField 
                        type="password"
                        hintText="Enter Password"
                        floatingLAbelText="Password"
                        errorText={this.state.errorText}
                        onChange={(event)=>this.setState({password:event.target.value})}
                        /> 
                        <br />
                        <Button variant="contained" color="primary" onClick={(event)=> this.handleClick(event)} style={style}>Submit</Button>

                    </div>
                </MuiThemeProvider>
            </div>
        )
    
    }
}
const style={margin:15}
export default withRouter(Login);