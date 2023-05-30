import {createContext,useState} from 'react';

// create actual context
export const UserContext = createContext({
    currentUser : null,
    setCurrentUser : () => {}
})

export const UserProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}