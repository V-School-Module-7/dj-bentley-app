import React from "react";
import ReactModal from "react-modal";

const FormModal = (props) => {
    const { show, handleClose } = props;

    return (
        <ReactModal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Form Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
        >
            <div>
                <h2 className="modal-h2">Request Sent</h2>
                <br></br>
                <p className="modal-p">
                    Your request was sent, and I'll get back to you as soon as
                    possible. Thanks!
                </p>
                <div className="modal-div">
                    <button className="modal-btn" onClick={handleClose}>
                        OK
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default FormModal;
