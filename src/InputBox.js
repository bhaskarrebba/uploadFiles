import React from 'react';
import './InputBox.css';
const data = require('./inputData.json');
const InputBox = () => {


    return <div className="input-main row">
        <div className="col-lg-6">
            <input list="browsers" name="browser" id="browser" />
            <datalist id="browsers">
                {
                    data.map(item => {
                        return <option value={item.value} key={item.id}>{item.value}</option>
                    })
                }
            </datalist>
        </div>
        <div className="col-lg-6">
            <div className="spinners">
                <div className="spinner-border text-muted"></div>
                <div className="spinner-border text-primary"></div>
                <div className="spinner-border text-success"></div>
                <div className="spinner-border text-info"></div>
                <div className="spinner-border text-warning"></div>
                <div className="spinner-border text-danger"></div>
                <div className="spinner-border text-secondary"></div>


            </div>
           
        </div>
    </div>
}
export { InputBox };