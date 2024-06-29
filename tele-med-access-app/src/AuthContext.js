import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionID, setSessionID] = useState(localStorage.getItem('sessionID'));
    const [agreed, setAgreed] = useState(localStorage.getItem('agreedToTerms') === 'true');

    React.useEffect(() => {
        localStorage.setItem('agreedToTerms', agreed);
    });

    const startSession = (sessionID) => {
        localStorage.setItem('sessionID', sessionID);
        setSessionID(sessionID);
    };

    const endSession = () => {
        localStorage.removeItem('sessionID');
        localStorage.removeItem('agreedToTerms');
        setSessionID(null);
        setAgreed(false);
    };

    return (
        <AuthContext.Provider value={{ sessionID, startSession, endSession, agreed, setAgreed }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);