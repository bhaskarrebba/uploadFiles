import React from 'react';
import './Header.css';

const Header = () => {
    return <div className="header">
        <div className="header_brand">FedEx Services</div>
        <div className="header_title">S1 Dashboard</div>
        <div className="header_user">
            <div className="user_name">username</div>
            <div className="user_role">userrole</div>
            <div className="user_id">userid</div>
        </div>
    </div>
}

export { Header };