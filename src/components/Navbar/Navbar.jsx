import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav>
      <h1>GLRY</h1>
      <div className={styles.buttonsContainer}>{props.children}</div>
    </nav>
  );
};

export default Navbar;
