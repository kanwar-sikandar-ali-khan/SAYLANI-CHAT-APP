

const INITIAL_STATE = {

    
    current_users: {},
    users:[],
    
}


 
export default (state = INITIAL_STATE, action) => {

   

    switch (action.type) {

        case "setuser":
            return ({
                ...state,
                current_users: action.payload
                

            })

            
        case "setFirebaseUsers":
            return ({
                ...state,
                users: [...state.users,action.payload],

            })


        default: return state;




    }








}

