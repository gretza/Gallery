import "./HomePage.css";
import Topic from "../../components/Topic/Topic";
import Button from "../../components/Button/Button";
import { useState } from "react";

const HomePage = () => {
  const [modeMore, setModeMore] = useState();

  const changeMode = () => {
    setModeMore(!modeMore);
  };

  return (
    <div className="home-page">
      <Topic
        title="Welcome to Modern Art Museum"
        description="An exceptional opportunity to experience – and meet! – the works of world-renowned artists, such as Guerrilla Girls, Andy Warhol, Yves Klein and the others!"
      />
      {!modeMore && (
        <Topic
          title="What is Modern Art Museum?"
          description="One of the largest private virtual art collections, the museum collection consists of artworks dating from the 1960s to this day. It includes around 6 000 works of modern and contemporary art. In 2011 the collection was officially recognized as being of “national significance.”"
          visibility="hidden"
        />
      )}
      <Button label={modeMore ? "Read more" : "Less"} onClick={changeMode} />
    </div>
  );
};
export default HomePage;
