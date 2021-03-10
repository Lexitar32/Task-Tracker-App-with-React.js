import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
    return   <button 
    style={{ backgroundColor:color }} 
    className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button
