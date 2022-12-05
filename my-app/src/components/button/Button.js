import './button.css';

const Button = ({link, className}) =>{
   
    return(
    <button className={className}>
        {link}</button>
    );
}

export default Button;