import { useContext, useState } from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { ProfileContext } from '../App';

export default function Highlights() {
    const { imagesWithSubtitles } = useContext(ProfileContext);

  const itemsPerPage = 5;
  const [startIndex, setStartIndex] = useState(0); 

  const handleNext = () => {
    setStartIndex(startIndex + itemsPerPage);
  };
  const handlePrevious = () => {
    setStartIndex(startIndex - itemsPerPage);// 5-5=)
  };

  // Calculate whether to show the left and right arrows
  const showLeftArrow = startIndex > 0;
  const showRightArrow = startIndex + itemsPerPage < imagesWithSubtitles.length;
  // Slice the visible images based on the startIndex NextClick5, 5+5(images 6 to 10)
  const visibleImages = imagesWithSubtitles.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div>
      <Row className='mb-2'>
        <Col xs={1} className="text-center">
          {showLeftArrow && (
            <Button onClick={handlePrevious} style={{ border: 'none', padding: 0, background: 'none' }}>
                <i className="bi bi-arrow-left-circle" style={{ fontSize: '24px', color: 'darkgrey' }}></i>
            </Button>
          )}
        </Col>

        {/* Map and display visible images */}
        {visibleImages.map((item, index) => (
          <Col md={2} key={index} className="text-center">
            <Image src={item.image} style={{ height: "60px" }} roundedCircle />
            <p className="mt-1">{item.subtitle}</p>
          </Col>
        ))}
        
        <Col xs={1} className="text-center">
          {showRightArrow && (
            <Button onClick={handleNext} style={{ border: 'none', padding: 0, background: 'none' }}>
                <i className="bi bi-arrow-right-circle" style={{ fontSize: '24px', color: 'blue' }}></i>
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
