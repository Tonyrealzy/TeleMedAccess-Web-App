import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [sessionID, setSessionID] = useState(null);

    useEffect(() => {
        const storedSessionID = sessionStorage.getItem('sessionID');
        if (storedSessionID) {
            setSessionID(storedSessionID);
        }
    }, []);

    const startSession = (id) => {
        setSessionID(id);
        sessionStorage.setItem('sessionID', id);
    };

    const endSession = () => {
        setSessionID(null);
        sessionStorage.removeItem('sessionID');
    };

    return (
        <AuthContext.Provider value={{ sessionID, startSession, endSession }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);