import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalComponent({modal, setModal, title, message}) {
  const handleClose = () => setModal(false);
  
  return (
    <>
        <Modal
            show={modal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
              <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>{ message }</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>닫기</Button>
              <Button variant="primary">확인</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}
