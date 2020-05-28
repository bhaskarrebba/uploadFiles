import React, { useState } from 'react';
import axios from 'axios';
import './UploadFiles.css';
import PoupUp  from './PopUp';
function UploadFiles() {
  const [fileNames, setFileNameFor] = useState([]);
  const onChangeHandler = (event) => {
    let FilesList = [];
    FilesList = [...fileNames];
    Object.entries(event.target.files).forEach(([key, value]) => {
      FilesList.push(value.name);
    });
    setFileNameFor(FilesList);
    setTimeout(UploadFilesToServer(),1000);
    
  }
  const deleteFile = (index) => {
    let fileList=[...fileNames];
    let deletedItem=fileList.splice(index,1);
    setFileNameFor(fileList);
  }
  const UploadFilesToServer=()=>{
      console.log(fileNames);
    const data = new FormData() 
    data.append('file', fileNames);
    axios.post('http://localhost:8080/uploadFiles',data);
  }
  const renderTableData = () => {
    return fileNames.map((filename, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><a href={filename} download>{filename}</a></td>
          <td><span
            title="Delete"
            className="glyphicon glyphicon-trash file-del"
            data-toggle="modal" 
            data-target="#myModal"
            onClick={()=>deleteFile(index)}></span></td>
        </tr>
      )
    })
  }

  return (
    <div className="App">
      <input type="file" className="upload-btn" name="file" multiple onChange={onChangeHandler} /><br />
      <table id="filename">
        <thead>
          <tr><th>SNo</th>
            <th>File Name</th>
            <th></th></tr>
        </thead>
        <tbody>
          {fileNames.length >0 ?renderTableData() : <tr><td colspan='3'>No Files Uploaded</td></tr>}
        </tbody>
      </table>
      <PoupUp/>
    </div>
  );
}

export default UploadFiles;
