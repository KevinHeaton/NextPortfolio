import react from 'react';
import Image from 'next/image';

function Modal({onClose, currentProject}) {
  const { name, description, github, deployed, pic } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <Image src={`/${pic}.png`} alt={name} width={300} height={300} />
        <p>{description}</p>
        <a href={deployed} target="_blank" rel="noreferrer"><button>Deployed Site</button></a>
        <a href={github} target="_blank" rel="noreferrer"><button>GitHub Repo</button></a>
        <button className="closebtn" onClick={onClose} type="button">
          Close
        </button>
      </div>
    </div>
  );

}

export default Modal;