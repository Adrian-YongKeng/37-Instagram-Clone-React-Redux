import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";


export default function CommentModal({show, handleClose, post, addComment}){
    const [comment, setComment] = useState("");
    const { description} = post;

    const clickAddComment = () => {
        addComment(post.id, comment);
        setComment("");
        handleClose();
    };

    return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add a Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
          <Col md={6}>
                <img src={post.image} alt="Post" className="img-fluid mb-3" />
            </Col>
            <Col md={6}>
            <div>
              <h4>{description}</h4>
            </div>
        <Form.Control
          type="text"
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
         </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={clickAddComment}>
          Add Comment
        </Button>
      </Modal.Footer>
    </Modal>
    )
}