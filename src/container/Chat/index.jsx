import React, { Component } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { connect } from 'react-redux'
import { get_user } from '../../store/action/index'
import Firebase from '../../config/firebase'
import firebase from 'firebase'



export class Chat extends Component {

    constructor() {
        super()

        this.state = {


            users: {},

            oneMessage: "",

            manyMessages: []
            // { title: "salam" }


        }
    }

    uidMerge(uid1, uid2) {
        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }

    }



    OnChat = (v) => {






        this.setState({


            users: v

        })

        let current_users = this.props.current_users;
        let users = this.state.users;
        // console.log("on userrs id",users)
        let merge_uid = this.uidMerge(users.uid, current_users.uid)
        // console.log("on mergeuid",merge_uid)
        this.get_messages(merge_uid)




    }



    oneMessage = (e) => {

        var oneMessage = e.target.value;
        // console.log(oneMessage)

        this.setState({

            oneMessage: oneMessage



        })



    }





    sendMessage = () => {

        let current_users = this.props.current_users;
        let users = this.state.users;
        // console.log("send userrs id",users)
        let merge_uid = this.uidMerge(users.uid, current_users.uid)
        // console.log("send mergeuid",merge_uid)


        // console.log('uiddddd merge',this.uidMerge(users.uid,current_users.uid))

        // console.log('ccccccc',current_users.uid)
        // console.log('ccccccccccccc',users.uid)


        firebase.database().ref('/').child(`chats/${merge_uid}`).push({
            title: this.state.oneMessage,
            name: users.name,
            uid: users.uid
        })

      







        // let obj = { title: this.state.oneMessage }

        // this.setState({
        //     manyMessages: [...this.state.manyMessages, obj],
        //     oneMessage: " "
        // })

    }

    get_messages = (mergeuid) => {
        firebase.database().ref('/').child(`chats/${mergeuid}`).on('child_added', (oneMessage) => {

            console.log("get messages", oneMessage.val())
            // let obj = { title: oneMessage }

            this.setState({
                manyMessages: [...this.state.manyMessages, oneMessage.val()],
                oneMessage: ""
            })


        })
    }


    componentDidMount() {
        // console.log("components did mount")
        this.props.get_user()

    }



    render() {

        // console.log('chat props' , this.props)
        // console.log('current user',this.props.current_users);
        // console.log('users', this.props.users)

        // var users = this.props.users

        // console.log(' users',users)











        return (

            <div className="bg=light">
                <h1 className="text-center">CHAT PAGE</h1>

                <div className="container">

                    <div className="row">



                        <div className="bg-dark col-md-3">
                            <h1>WELCOME ! {this.props.current_users.name}</h1>
                            <img src={this.props.current_users.profile} alt="" />
                            {/* <h2>Email:{user.email}</h2>  */}
                        </div>


                        <div className="bg-success col-md-3">

                            <h1>CHAT USERS:</h1>
                            <ul>
                                {this.props.users.map((v, i) => {
                                    return v.uid !== this.props.current_users.uid && (
                                        <div key={i}>
                                            <li>

                                                {/* condition  */}



                                                <img src={v.profile} width="20" />


                                                {v.name}

                                                <button onClick={() => this.OnChat(v)}>chat</button>














                                            </li>

                                        </div>

                                    )
                                })}
                            </ul>



                        </div>







 

                        <div className="bg-warning col-md-3">



                            <h1>MESSEGES</h1>


                            {Object.keys(this.state.users).length ?

                                <div>
                                    <h1><img src={this.state.users.profile} alt="" /></h1>
                                    <h1>{this.state.users.name}</h1>

                                    {this.state.manyMessages.map((v, i) => {
                                        return (
                                            <div key={i}>

                                                <ul>
                                                    <li style={{ color: v.uid === this.props.current_users.uid ? "red" : "green" }}>
                                                        <h1>{v.title}</h1>
                                                    </li>
                                                </ul>

                                            </div>




                                        )
                                    })}

                                    <input value={this.state.oneMessage} onChange={this.oneMessage} type="text" placeholder="write your messages" />
                                    <button onClick={this.sendMessage}>SEND</button>

                                </div>


                                :
                                <h4>NO USERS</h4>

                            }
                        </div>




                    </div>

                </div>


            </div>

        )

    }
}


const mapStateToProps = (state) => ({

    current_users: state.current_users,
    users: state.users


})


const mapDispatchToprops = (dispatch) => ({

    get_user: () => dispatch(get_user())

})
export default connect(mapStateToProps, mapDispatchToprops)(Chat);


