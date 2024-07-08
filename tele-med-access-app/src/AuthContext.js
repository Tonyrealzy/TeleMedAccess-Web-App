import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [agreed, setAgreed] = useState(localStorage.getItem('agreedToTerms') === 'true');

    React.useEffect(() => {
        localStorage.setItem('agreedToTerms', agreed);
    });

    return (
        <AuthContext.Provider value={{ sessionID, startSession, endSession, agreed, setAgreed }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);