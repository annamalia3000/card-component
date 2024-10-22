import { Card } from "./components/Card/Card";
import { CardImage } from "./components/CardImage/CardImage";
import { CardBody } from "./components/CardBody/CardBody";
import { CardTitle } from "./components/CardTitle/CardTitle";
import { CardText } from "./components/CardText/CardText";
import { CardLink } from "./components/CardLink/CardLink";
import "./App.css";

function App() {
  return (
    <>
      <Card>
        <CardImage
          src="https://cybersport.metaratings.ru/storage/images/f7/31/f73143a99eb804cbb6a1871b8770b9bf.png"
          alt="Card Image"
        />
        <CardBody>
          <CardTitle title="Card Title" />
          <CardText text="Some quick example text to build on the card title." />
          <CardLink href="https://www.youtube.com/watch?v=S1kMJ1pfCzo">
            Go somewhere
          </CardLink>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle title="Another Card Title" />
          <CardText text="Here is another card without an image." />
          <CardLink href="https://www.youtube.com/watch?v=S1kMJ1pfCzo">
            Learn more
          </CardLink>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
