//1 initlise the context
//2 inilise the context with a default value
//3 create a reducer function
//4 create a context provider

import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';

export const UserContext = createContext();


  export const UserContextProvider = ({ children }) => {

 
  
    return(
        <UserContext.Provider value={user} >
            {children}
        </UserContext.Provider>
    );
    };

