import "./Topic.css";

const Topic = (props) => {
  return (
    <div className="topic-container" visibility={props.visibility}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default Topic;
