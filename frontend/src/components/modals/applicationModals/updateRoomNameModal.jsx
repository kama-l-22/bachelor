import React from "react";
import Modals from "../modals";

export default function UpdateRoomNameModal(showModal, setShowModal) {

  const handleClose = () => {
    setShowModal(false);
  };
  
  return <div>
    {showModal && (
      <Modals
        header={<div>Update Room Name</div>}
        body={
          <div>
            <input type="text" placeholder="Enter new room name" />
          </div>
        }
        footer={
          <div>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleClose}>Save</button>
          </div>
        }
      />
    )}
  </div>;
}
