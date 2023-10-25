import {  Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import IconButton from "./components/IconButton";
import ProfileHeader from "./components/ProfileHeader";
import { createContext, useState } from "react";
import { PROFILE_DATA } from "./data";
import ImageGrid from "./components/ImageGrid";
import JamesImage from "./assets/LeBron's James.jpeg"
import Highlights from "./components/Highlights";
import AddPostModal from "./components/AddPostModal";

export const ProfileContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const [activeTab, setActiveTab] = useState('posts');

  const handleTabSelect = (eventKey) => {
    setActiveTab(eventKey); // Update the active tab when a tab is clicked
  };

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col 
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{position: "sticky", top:0 }}
        >
            <IconButton className="bi bi-instagram" isTop/>
            <IconButton className="bi bi-house"/>
            <IconButton className="bi bi-search"/>
            <IconButton className="bi bi-compass"/>
            <IconButton className="bi bi-film"/>
            <IconButton className="bi bi-heart"/>
            <IconButton className="bi bi-plus-square" onClick={openModal}/>
            <IconButton imageUrl={JamesImage}/>
            <IconButton className="bi bi-list" isBottom/>
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader/>

            <Highlights/>
            <div className="d-flex flex-column align-items-center">
              <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="content-tabs" className="mb-3">
                <Tab eventKey="posts" title={<div><i className="bi bi-card-text" style={{ marginRight: "8px" }}></i>Posts</div>}>
                  <ImageGrid />
                </Tab>
                <Tab eventKey="reels" title={<div><i className="bi bi-play" style={{ marginRight: "8px" }}></i>Reels</div>}/>
                <Tab eventKey="tagged" title={<div><i className="bi bi-person" style={{ marginRight: "8px" }}></i> Tagged</div>}/>
              </Tabs>
            </div>

            <AddPostModal show={showModal} handleClose={closeModal}/>
          </Container>
        </Col>
      </Row>
    </ProfileContext.Provider>
  )
}

//<Highlights imagesWithSubtitles={PROFILE_DATA.imagesWithSubtitles} />