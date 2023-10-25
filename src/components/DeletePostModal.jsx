import { Button, Modal } from "react-bootstrap";

export default function DeleteTodoModal({ show, handleClose, deletePost}) {

    const handleDelete = () => {
        console.log("Delete button clicked");
        deletePost();//Call the deletePost function from the parent component to perform the actual deletion
        handleClose();
    };

    return (
            <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <p>Are you sure you want to delete this todo?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        
    );
}
