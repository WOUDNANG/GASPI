import React from "react";
import ReactPortal from "./ReactPortal";

function ModalLayout({ children, isOpen, handleClose }) {
  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className="fixed inset-0 z-40 bg-black/80 w-screen h-screen flex flex-col justify-center 
                items-center"
        onClick={(e) => {
           handleClose()
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </ReactPortal>
  );
}

export default ModalLayout;
