import './AppStyle.css';
import { Container,
  Navbar,
  Nav, 
  Row,
  Col,
 } from "react-bootstrap";
 
 import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { title } from 'framer-motion/client';


 const images = [
  { src: "./img/1.jpg", alt: "Image 1", delay: 600 },
  { src: "./img/CVtag.jpg", alt: "Image 2", delay: 800 },
  { src: "./img/3.jpg", alt: "Image 3", delay: 1000 },
  { src: "./img/4.jpg", alt: "Image 4", delay: 1200 },
];

const newsData = [
  { 
    id: 1,
    title: "29.10.2024",
    description: "I am starting a paper within HCI", 
  },
  { 
    id: 2, 
    title: "25.10.2024",
    description: "3 more citation on my papers",
  },
  { 
    id: 3, 
    title: "15.10.2024",
    description: "Accept to be the coach of Ali for doing his paper",

  },
  { 
    id: 4, 
    title: "7.10.2024",
    description: "Our paper of CD7 analysis has been published in Anti-Cancer Agents in Medicinal Chemistry",
  },
  { 
    id: 5, 
    title: "22.9.2024",
    description: "I am offered two PhD Positions at UCF & GMU",
  },
  { 
    id: 6, 
    title: "23.9.2024",
    description: "Revised Ms. Mehrkian paper for Expert System Journal",
  },
  { 
    id: 7, 
    title: "5.9.2024",
    description: "Applied for two high ranked Universities. very unlikely to get!",
  },
  { 
    id: 8, 
    title: "21.8.2024",
    description: "Retaking my TOEFL, got 97 :( power outage during the test",
  },
  { 
    id: 9, 
    title: "2.9.2024",
    description: "Compeleted Ms. Pahlevan thesis",
  },
  { 
    id: 10, 
    title: "1.9.2024",
    description: "Mobile Edge Computing with PPO",
  },
  { 
    id: 11, 
    title: "29.8.2024",
    description: "Revised Ms. Mehrkian paper for Expert System Journal",
  },
  { 
    id: 12, 
    title: "2.7.2024",
    description: "Accept to collaborate on Ms. Pahlevan's thesis",
  },
  { 
    id: 13, 
    title: "22.6.2024",
    description: "Deployed first version of ApplyGroup websit",
  },
  { 
    id: 14, 
    title: "19.6.2024",
    description: "Accept to collaborate on Ms. Mehrkian's thesis",
  },
]


function App() {
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
              <Nav.Link href="CV_AmirHMalekijoo.pdf" download>
                CV
              </Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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

    <div className='sectionTwo'>
      <Container>
      </Container>
    </div>

    {/* <div className="sectionOne">
        <Container>
            <Row>
              {images.map((img, index) => (
                <Col
                  key={index}
                  xs={12} 
                  sm={6}  
                  md={4}  
                  lg={3}  
                  className="imagecolumn"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                  />
                </Col>
              ))}
            </Row>
            
          </Container>

    </div> */}
    
    <div className="sectionThree">
      <Box sx={{ maxHeight: "80vh", overflowY: "auto", padding: 2 }}>
        {newsData.map((news) => (
          <Card sx={{ maxWidth: "600px", marginBottom: 2 }} key={news.id}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                // image={news.image}
                alt={news.title}
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {news.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {news.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

          
              {/* <h1>Latest News</h1> */}

              {/* <h1>Accept to collaborate on Ms. Mehrkian's thesis 19.6.2024</h1> */}


         
    
    </div>
              
    
    <div className="contactSection">
      <Container>
        <h1>Contact Me</h1>
        <p>Email: <a href="mailto:amirhossein.maleki1990@gmail.com">amirhossein.maleki1990@gmail.com</a></p>
        <p>Phone: <a href="tel:+989383211689">+98 9383211689</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/amirhmalekijoo1990/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </Container>
    </div>



    </div>
  );
}

export default App;
