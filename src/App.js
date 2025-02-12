import './AppStyle.css';
import { Container,
  Navbar,
  Nav
 } from "react-bootstrap";

import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import Footer from './footer'
import React, { useRef } from 'react';




function App() {
  const footerRef = useRef(null); 

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="body">
      {/* Navbar Section */}
      <div className="custNav">
        <Navbar>
          <Container> 
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://github.com/malekijoo/">GitHub</Nav.Link>
              <Nav.Link href="https://scholar.google.com/citations?user=XnMNTD0AAAAJ&hl=en">GoogleScholar</Nav.Link>
              {/* <Nav.Link href="CV_AmirHMalekijoo_.pdf" download> */}
                {/* CV */}
              {/* </Nav.Link> */}
              <Nav.Link onClick={scrollToFooter}>Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* Content Section */}
      {/* <dev className="sectionZero">
        <Container>Amir Malekijoo</Container>
      </dev> */}
    <div className="sectionZero">
      <Container>
        <div className="neonText">
          Amir Malekijoo
          <div className="slopedLine"></div>
        </div>
      </Container>
    </div>



    <div ref={footerRef} className='sectionFour'>

      <Footer />

    </div>
    

    <div className='sectionTwo'>
      <Container>
      </Container>
    </div>

    </div>
  );
}

export default App;





