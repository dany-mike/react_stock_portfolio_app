import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const AuthContext = React.createContext({})

export default function IsAuth({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkAuth()
    }, [])
}

IsAuth.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.array
    ])
}