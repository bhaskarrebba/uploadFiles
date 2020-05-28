
import React from 'react';

const PopUp = props => {
    return <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Delete</h4>
                </div>
                <div className="modal-body">
                    <p>Are you sure want to delete this item?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={props.deleteFile}>Delete</button>
                </div>
            </div>

        </div>
    </div>

}
export default PopUp;
