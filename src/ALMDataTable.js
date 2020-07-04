import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./ALMDataStyles.css";
import { Table } from "./Table";

const ALMDataTable = (props) => {
  const [data, setData] = useState(null);
  const columns = [
    {
      Header: "SNo",
      accessor: "id",
    },
    {
      Header: "Defect ID",
      accessor: "userId",
    },
    {
      Header: "Defect Description",
      accessor: "title",
    },
  ];

  useEffect(async () => {
    const ALMData = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    if (ALMData && ALMData.data) {
      console.log("Final Data to display in Table--", ALMData.data);
      setData(ALMData.data);
    }
  }, []);

  return (
    <div>
      <h1>ALM Defects List</h1>
      <div>{data && <Table data={data} columns={columns} />}</div>
    </div>
  );
};
export { ALMDataTable };
