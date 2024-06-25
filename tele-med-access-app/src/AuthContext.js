import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionID, setSessionID] = useState(localStorage.getItem('sessionID'));

    const startSession = (sessionID) => {
        localStorage.setItem('sessionID', sessionID);
        setSessionID(sessionID);
    };

    const endSession = () => {
        localStorage.removeItem('sessionID');
        setSessionID(null);
    };

    return (
        <AuthContext.Provider value={{ sessionID, startSession, endSession }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);