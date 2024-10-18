import { Card } from "./components/index.ts";
import "./App.css";

function App() {
  return (
    <>
      <Card
        title="Card"
        text="Some text"
        link="https://www.youtube.com/watch?v=S1kMJ1pfCzo"
        imageSrc="https://cybersport.metaratings.ru/storage/images/f7/31/f73143a99eb804cbb6a1871b8770b9bf.png"
      />
      ;
      <Card
        title="Card"
        text="Some text"
        link="https://www.youtube.com/watch?v=S1kMJ1pfCzo"
      />;
    </>
  );
}

export default App;
