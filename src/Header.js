import React from 'react';

const Header = () => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a className="navbar-brand" href="javascript:void(0)">Logo</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navb">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:void(0)">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="javascript:void(0)">Disabled</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
            </form>
        </div>
    </nav>
}

export { Header }