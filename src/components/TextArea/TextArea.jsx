import styles from "./TextArea.module.css";

const TextArea = ({ placeholder, label, id, error, changeValue }) => {
  const onInputChange = (event) => {
    changeValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <textarea
        placeholder={placeholder}
        label={label}
        onChange={onInputChange}
        id={id}
        rows="5" cols="40"
      ></textarea>
    </div>
  );
};

export default TextArea;
