import React from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from '../auth/login';
import DashboardMain from '../components/dashboard/dashboardMain';
import Homepage from '../pages/homePage/homepage';

function RoutingPage() {

    const PrivateRoute = ({ children }) => {
        if (localStorage.getItem("access")) {
            return children
        }
        return <Navigate to="/" />
    }

    const LogoutRoute = ({ children }) => {
        if(!localStorage.getItem("access")){
            return children
        }
        return <Navigate to="/dashboard" />
    }
   
    return (
        <div>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/admin-login" element={<LogoutRoute><Login /></LogoutRoute> } />
          <Route path= "/dashboard" element={<PrivateRoute><DashboardMain /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default RoutingPage;