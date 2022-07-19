import { Image, Modal } from "react-bootstrap";

const ImageViewer = (props) => {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={props.hide}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image src={props.img} fluid />
      </Modal.Body>
    </Modal>
  );
};
export default ImageViewer;
