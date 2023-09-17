import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoaderSpninner from '../components/LoaderSpninner';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <LoaderSpninner />
    }
    
    if( user && user.uid ){
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;