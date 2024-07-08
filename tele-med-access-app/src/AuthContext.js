import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [agreed, setAgreed] = useState(false);

    React.useEffect(() => {
        const agreedState = sessionStorage.getItem('agreedToTerms');
        if (agreedState === 'true') {
            setAgreed(true);
            sessionStorage.setItem('agreedToTerms', agreed);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ agreed, setAgreed }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);