import firebase from 'firebase'
import Firebase from '../../config/firebase'




const facebook_login_func = (history) => {

    



    return (dispatch) => {


        var provider = new firebase.auth.FacebookAuthProvider();


        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.


            var user = result.user;
            // ...
           








            //  BY ME

            // Sending data to firebase

            let Enter_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid 
            }

           


            



            




            firebase.database().ref('/').child(`users/${user.uid}`).set(Enter_user)
                .then(() => {
                    
                    dispatch({ type: 'setuser', payload: Enter_user })
                    alert("user login successfully")
                    history.push('/chat')

                })










            //   CATCH SECTION

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            console.log("error message", errorMessage)
        });
    }   
}






const get_user = () => {

    return (dispatch) => {

        // let users = [];

        
 



        firebase.database().ref("/").child('users').on('child_added', (data) => { 

            // console.log('firebase data',data.val())
            

            // users.push(data.val())

            dispatch({type:"setFirebaseUsers",payload:data.val()})
            

            

            
        })

        

                    
        // console.log('action user',users)

        // dispatch({type:"setFirebaseUsers",payloa d:users})
       


    }


}


export {

    facebook_login_func,
    get_user
}