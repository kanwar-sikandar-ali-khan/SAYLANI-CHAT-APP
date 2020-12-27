import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { set_data_func} from './store/action';
import AppRouter from './config/router'



class App extends Component {

  render() {

    // console.log('prosp=>', this.props);
    return (
      <div>

        {/* <h1>APP COMPONENT</h1>
        <button onClick={() => this.props.set_data("data pass kr raha")}>SET DATA</button> */}

        <AppRouter/>
        

      </div>
    )
  }
} 

// const mapStateToProps = (state) => ({

//   name:state.name,
//   age:12

// })

// const mapDispatchToProp = (dispatch) =>({

//   set_data: (data) => dispatch(set_data_func(data)) 

// })

export default App;
