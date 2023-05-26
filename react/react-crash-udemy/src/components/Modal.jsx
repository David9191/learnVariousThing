import { styled } from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;
const ModalContent = styled.dialog`
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;
  z-index: 1;
`;

const Modal = ({ children, onClose }) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContent open>{children}</ModalContent>
    </>
  );
};

export default Modal;
