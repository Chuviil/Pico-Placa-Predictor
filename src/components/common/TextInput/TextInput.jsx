import PropTypes from 'prop-types';
import "./TextInput.css";

const TextInput = ({ label, value, onChange, type }) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
}

TextInput.defaultProps = {
    type: "text",
}

export default TextInput;
