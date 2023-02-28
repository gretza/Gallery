import './Button.css';

const Button = (props) => {
 return <button key={props.label} onClick={props.onClick}>{props.label}</button>;
};

export default Button;