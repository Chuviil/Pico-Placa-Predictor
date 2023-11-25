import "./Button.css";
import PropTypes from "prop-types";

const Button = ({children, onClick}) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    onClick: () => {},
};

export default Button;
