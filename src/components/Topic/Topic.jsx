import styles from "./Topic.module.css";

const Topic = (props) => {
  return (
    <div className={styles.topicContainer} visibility={props.visibility}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default Topic;
