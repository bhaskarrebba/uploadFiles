import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { withRouter } from "react-router-dom";



function LoginPage(props) {
    const { history } = props;
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState(null);
    const { username, password } = inputs;
    function inputChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            getAuth();
            history.push('/almdata');

        }
    }
    const getAuth = async () => {
        const data = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
        if (data && data.data) {
            const sessionData = await Axios.get('https://jsonplaceholder.typicode.com/todos/3');
            if (sessionData && sessionData.data) {
                console.log('Now get ALM Data');
                const ALMData = await Axios.get('https://jsonplaceholder.typicode.com/todos/5');
                if (ALMData && ALMData.data) {
                    console.log("Final Data to display in Table--", ALMData.data);
                    setData(ALMData.data);
                }

            }

        }
    }


    return (
        <div className="col-lg-5 offset-lg-4">
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text"
                        name="username"
                        value={username}
                        onChange={inputChange}
                        className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
                    {submitted && !username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        value={password}
                        onChange={inputChange}
                        className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
                    {submitted && !password &&
                        <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        Login
                    </button>

                </div>
            </form>
        </div>
    );
}
export { LoginPage };
