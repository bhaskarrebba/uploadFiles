import React, { useState } from 'react';
import axios from 'axios';
import './UploadFiles.css';
import PoupUp from './PopUp';
import { Progress } from 'reactstrap';
function UploadFiles() {
    const [fileNames, setFileNameFor] = useState([]);
    const [files, setFilesFor] = useState([]);
    const [fileIndex, setFileIndex] = useState(0);
    const [loaded, setLoaded] = useState(0);
    const [flag, setFlag] = useState(false);
    const [showProgressbar, setshowProgressbar] = useState(false);
    const onChangeHandler = (event) => {
        setLoaded(0);
        setFlag(false);
        setshowProgressbar(true);
        let FilesList = [];
        let FilesObj = [];
        FilesList = [...fileNames];

        Object.entries(event.target.files).forEach(([key, value]) => {
            FilesList.push(value.name);

            FilesObj.push(value)
        });
        setFileNameFor(FilesList);
        setFilesFor(FilesObj)
        setTimeout(UploadFilesToServer(FilesObj), 1000);

    }
    const deleteFile = () => {
        let fileList = [...fileNames];
        let deletedItem = fileList.splice(fileIndex, 1);
        setFileNameFor(fileList);
    }
    const UploadFilesToServer = (FilesObj) => {
        const data = new FormData();
        FilesObj.map(file => {
            data.append('file', file);
        })

        axios.post('http://localhost:8080/uploadFiles', data, {
            onUploadProgress: ProgressEvent => {
                setLoaded((ProgressEvent.loaded / ProgressEvent.total * 100))
            }
        }).then(res => {
            //setLoaded(0);
            setTimeout(setFlag(true), 2000);
            setTimeout(() => {
                setFlag(false);
                setshowProgressbar(false)
            },
                2000);
        });
    }
    const getFileIndexToDelete = (index) => {
        setFileIndex(index);
    }
    const downloadFile = (filename) => {
        console.log(filename);
        axios.get('http://localhost:8080/downloadFile', {
            params: {
                filename: filename
            }
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        })
    }
    const renderTableData = () => {
        return fileNames.map((filename, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><span className="file-name-dec" onClick={() => { downloadFile(filename) }}>{filename}</span></td>
                    <td><span
                        title="Delete"
                        className="glyphicon glyphicon-trash file-del"
                        data-toggle="modal"
                        data-target="#myModal"
                        onClick={() => getFileIndexToDelete(index)}
                    ><i class="fas fa-trash"></i></span></td>
                </tr>
            )
        })
    }

    return (
        <div className="App">
            <div className="custom-file mb-3">
                <input type="file" className="custom-file-input" id="customFile" name="filename" multiple onChange={onChangeHandler} />
                <label className="custom-file-label" for="customFile">Choose file</label>
            </div>
            <table id="filename">
                <thead>
                    <tr><th>SNo</th>
                        <th>File Name</th>
                        <th></th></tr>
                </thead>
                <tbody>
                    {fileNames.length > 0 ? renderTableData() : <tr><td colSpan='3'>No Files Uploaded</td></tr>}
                </tbody>
            </table>
            <PoupUp deleteFile={deleteFile} />
            {showProgressbar && <Progress max="100"
                color="success"
                value={loaded} >{Math.round(loaded, 2)}%</Progress>}
            {flag && <div className="upload-status">File(s) Uploaded Successfully</div>

            }
        </div>
    );
}

export default UploadFiles;
