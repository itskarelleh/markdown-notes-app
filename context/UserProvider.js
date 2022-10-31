import React, { useEffect, useState } from 'react';

const UserContext = React.createContext({});

function UserProvider({ children }) {
    const [ userProfile, setUserProfile ] = useState({});
    const [ userAccount, setUserAccount ] = useState({});

    //TODO: check cookies for user
    useEffect(() => {
        setUserAccount({
            id: "1jdkb",
            email: "karellehofler@gmail.com",
            password: "password",
            joinedAt: 1666985864663,
            hasProfile: "234abe3"
    });
        setUserProfile({
            id: "234abe3",
            displayName: "Karelle Hofler",
            joinedAt: 1666985864663,
            belongsTo: "1jdkb"
           });
    }, [])

    return (
        <UserContext.Provider value={{ userProfile, userAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }