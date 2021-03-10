import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor:color }} className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button
