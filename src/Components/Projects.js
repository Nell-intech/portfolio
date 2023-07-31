import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
// Assests 
import Footer from "../Components/Footer";
import recipeSite from "../assests/recipesite.png"
import studentList from "../assests/studentList.png"
import homeCafe from "../assests/homeCafe.png"
import flights from "../assests/flights.png"


export default function CurrentProject() {
  return (
    <div>

      <div className="contains">
        <div className="spacer"></div>
        <span>Portfolio</span>
        <h1>My Portfolio projects</h1>
      </div>


      <CardGroup>
        <Card>
          <Card.Img variant="top" src={recipeSite} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Front-end Recipe Site</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>

            <small className="text-muted">VIEW ON GITHUB</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={studentList} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Student List Front-end React</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">VIEW ON GITHUB</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src={flights} />
        </Card>

        <Card className="cardContainer">
          <Card.Body className="cardBody">
            <Card.Title>Augustus Airlines React</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus corporis fugiat natus minima dolores earum,
              dignissimos cumque eaque, nobis ipsam doloremque sit inventore praesentium ad, voluptates in pariatur mollitia nam?
            </Card.Text>
            <Card.Text>
              React Bootstrap
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            
            <a href="https://github.com/Nell-intech/Mongoose-Flights"> <small className="text-muted">VIEW ON GITHUB</small> </a>
          </Card.Footer>
        </Card>
      </CardGroup>

      <div>
        <div>
          <div className="">
            <div className="spacer"></div>
            {/* <span>Current</span> */}
            <h1>Home Cafe'</h1>
          </div>
          <Card border="dark" className="yellow card text-center">
            <Card.Body>
              <Card.Title>Trelo Board</Card.Title>
              <Card.Text>
                <Link rel="stylesheet" href="https://trello.com/invite/b/tP5Va2g1/ATTIfee2fc0e61caef0854ede8de548ad13bD3776D37/fullstack-cafe-app" > My Trello Board </Link>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src={homeCafe} /> */}
            {/* <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer> */}
          </Card>

          <Card border="dark" className="yellow card text-center">
            <Card.Body>
              <Card.Title>Wireframe</Card.Title>
              <Card.Text>
                <Link rel="stylesheet" href="https://trello.com/invite/b/tP5Va2g1/ATTIfee2fc0e61caef0854ede8de548ad13bD3776D37/fullstack-cafe-app" > My Figma Wireframe </Link>
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src={homeCafe} /> */}
            {/* <Card.Footer>
                        <small className="text-muted">GitHub Link</small>
                    </Card.Footer> */}
          </Card>

          <Card border="dark" className="yellow card text-center">
            <Card.Body>
              <Card.Title>Home Cafe site</Card.Title>
              <Card.Text>
                I am currently working on a site called Home Cafe. This is a full-stack app that encourages lux cafe drinks in the comfort of your own home.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={homeCafe} />
            <Card.Footer>
              <small className="text-muted">GitHub Link</small>
            </Card.Footer>
          </Card>

        </div>
      </div>
{/* 
      <div className="">
        <div className="spacer"></div>
      </div> */}

    </div>
  );
}


