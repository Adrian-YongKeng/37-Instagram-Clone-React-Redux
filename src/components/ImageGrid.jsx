import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";
import { useState } from "react";
import UpdatePostModal from "./UpdatePostModal"
import DeleteTodoModal from "./DeletePostModal";
import { deletePost } from "../features/posts/postsSlice";
import CommentModal from "./CommentModal";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const [show, setShow] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
//console.log(posts)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null); //Store the post to be deleted

  const dispatch = useDispatch();

  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comments, setComments] = useState({});

  const handleClose = () => {
    setCurrentPost(null);
    setShow(false);
  }
  const handleShow = (post) => {
    setCurrentPost(post);
    setShow(true);
  } 

  const handleDeleteClick = (post) => {
    setPostToDelete(post);
    setShowDeleteModal(true);
  }
  const confirmDelete = () => {
    if (postToDelete) {
        dispatch(deletePost(postToDelete.id)); // Dispatch the deletePost action
        setPostToDelete(null);
        setShowDeleteModal(false);
    }
  }

  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };
  const handleShowCommentModal = (post) => {
    setCurrentPost(post);
    setShowCommentModal(true);
  };
  const addComment = (postId, comment) => { // Update comments for the specified post
    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), comment],
    });
  };

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
            <Image 
                src={post.image} 
                fluid 
                onClick={() => handleShowCommentModal(post)}
            />
            <div className="d-flex justify-content-between my-2">
            <Button
                variant="link"
                className=" text-danger "
                style={{ textDecoration: 'none'}}
                >
                <i className="bi bi-heart-fill"></i> {post.likes}
            </Button>
            <div>
                <Button onClick={() => handleShow(post)} variant="outline-primary">
                <i className="bi bi-pencil-square"></i>
                </Button>
                <Button onClick={() => handleDeleteClick(post)} variant="outline-danger" className="ms-2">
                <i className="bi bi-trash"></i>
                </Button>
          </div>
        </div>
      </Col>
    ))
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && (
        <UpdatePostModal 
          show={show}
          handleClose={handleClose}
          postId={currentPost.id}
        />
      )}
      {currentPost && (
        <CommentModal
          show={showCommentModal}
          handleClose={handleCloseCommentModal}
          post={currentPost}
          addComment={addComment}
        />
      )}
      {postToDelete && (
        <DeleteTodoModal
            show={showDeleteModal}
            handleClose={() => setShowDeleteModal(false)}
            deletePost={confirmDelete}
        />
      )}
    </>
  )
}
