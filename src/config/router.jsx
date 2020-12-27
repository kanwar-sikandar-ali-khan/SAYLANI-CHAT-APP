import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from "../container/Home"
import Chat from '../container/Chat'
// import NewChats from '../container/newChats'


class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component = {Home} />
                <Route exact path='/chat' component = {Chat} />
                 {/* <Route exact path='/chat' component = {NewChats} />  */}
            </Router>

        )
    }
}

export default AppRouter;