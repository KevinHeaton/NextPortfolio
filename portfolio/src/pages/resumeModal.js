import react from 'react';


function ResumeModalButton({ isOpen, onClose, children}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        

        {children}
      </div>
    </div>
  );

}

export default ResumeModalButton;