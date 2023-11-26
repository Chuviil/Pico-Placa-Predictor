import PropTypes from 'prop-types';
import "./TextInput.css";

const TextInput = ({ label, onChange, type, placeholder }) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <input 
                type={type}
                onChange={(e) => onChange(e.target.value)} 
                placeholder={placeholder}
            />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
}

TextInput.defaultProps = {
    type: "text",
    placeholder: "",
}

export default TextInput;
