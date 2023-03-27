export const initialState = {
    userName: null,
    userFistName: null,
    userEmail: null,
    userPhone: null,
    userAge: null,
    userProvince: null,
    userCV: null,
    userCard: null,
    userDiplome: null,
    userMetier: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return {
                ...state,
                userName: action.userName
            }
        
        case 'SET_USERFISTNAME':
            return {
                ...state,
                userFistName: action.userFistName
            }

        case 'SET_USEREMAIL':
            return {
                ...state,
                userEmail: action.userEmail
            }

        case 'SET_USERPHONE':
            return {
                ...state,
                userPhone: action.userPhone
            }

        case 'SET_USERAGE':
            return {
                ...state,
                userAge: action.userAge
            }
        
        case 'SET_USERPROVINCE':
            return {
                ...state,
                userProvince: action.userProvince
            }

        case 'SET_USERCV':
            return {
                ...state,
                userCV: action.userCV
            }

        case 'SET_USERCARD':
            return {
                ...state,
                userCard: action.userCard
            }

        case 'SET_USERDIPLOME':
            return {
                ...state,
                userDiplome: action.userDiplome
            }

        case 'SET_USERMETIER':
            return {
                ...state,
                userMetier: action.userMetier
            }
    
        default:
            return state;
    }
}

export default reducer;