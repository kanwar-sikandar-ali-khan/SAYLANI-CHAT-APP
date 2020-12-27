import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'
import {facebook_login_func} from '../../store/action/index' 

export class Home extends Component {
    render() {

        

        
        return (
            <div className="home">
                <h1>HOME</h1>
                
                <button  onClick={()=>this.props.facebook_login(this.props.history)}>facebook login</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    
    
})


const mapDispatchToprops = (dispatch) => ({ 

    

    facebook_login : (history) => dispatch(facebook_login_func(history))  
    
})
export default connect(mapStateToProps,mapDispatchToprops) (Home);
