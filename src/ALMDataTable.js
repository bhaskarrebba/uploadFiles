import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './ALMDataStyles.css';

const ALMDataTable = (props) => {
    const [data, setData] = useState(null);

    useEffect(async () => {
        const ALMData = await Axios.get('https://jsonplaceholder.typicode.com/todos/');
        if (ALMData && ALMData.data) {
            console.log("Final Data to display in Table--", ALMData.data);
            setData(ALMData.data);
        }
    }, []);
    return (
        <div>
            <h1>ALM Defects List</h1>
            <div>
                <table>
                    <thead>
                        <th>SNo</th>
                        <th>Defect ID</th>
                        <th>Defect Description</th>
                    </thead>
                    <tbody>
                        {
                            data && data.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.title}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export { ALMDataTable };