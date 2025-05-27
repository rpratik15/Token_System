//1 initlise the context
//2 inilise the context with a default value
//3 create a reducer function
//4 create a context provider

import React, { createContext, useReducer } from 'react';


export const UserContext = createContext();

const initialValue={
logintype:null, // 'admin' or 'user'
isAuth:false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGIN_TYPE':
      return { ...state, 
        logintype: action.payload,
        isAuth: true};
    case 'RESET_LOGIN_TYPE':
      return { ...state, logintype: null,
        isAuth: false
       };
    default:
      return state;
  }
}
  export const UserContextProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, initialValue);
//const navigate = useNavigate();

// useEffect(() => {
//   if (state.logintype === 'admin') {  
//     navigate('/admin');
//   } else if (state.logintype === 'user') {
//     navigate('/user');
//   }
// }, [state.logintype, navigate]);
  
    return(
        <UserContext.Provider value={[state,dispatch]} >
            {children}
        </UserContext.Provider>
    );
    };

