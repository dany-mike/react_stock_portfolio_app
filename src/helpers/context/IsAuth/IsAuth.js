import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { isUser } from '../../../services/authenticationService'
export const AuthContext = React.createContext({})

export default function IsAuth({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function didMount() {
            checkUser()
        }    
        didMount();
    }, [])

    const checkUser = async () => {
        const isuser = await isUser()

        if(isuser.status === 200) {
            setIsAuthenticated(true)
            setIsLoading(false)
        }

        if(isuser.status !== 200) {
            setIsAuthenticated(false)
            setIsLoading(false)
        }
    }

    console.log(isAuthenticated)

    return (
        <AuthContext.Provider value={isAuthenticated}>
            {children}
        </AuthContext.Provider>
    )
}

IsAuth.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.array
    ])
}
