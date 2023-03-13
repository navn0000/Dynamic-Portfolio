import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../auth/login';
import DashboardMain from '../components/dashboard/dashboardMain';
import Homepage from '../pages/homePage/homepage';

function RoutingPage() {
   
   
    return (
        <div>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/admin-login" element={<Login />} />
          
          <Route path= "/dashboard" element={<DashboardMain />} />
      </Routes>
    </BrowserRouter>
        </div>
    );
}

export default RoutingPage;