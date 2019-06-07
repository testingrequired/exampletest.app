import PropTypes from "prop-types";

export default function Conditional(props) {
  return props.when ? props.children : props.else;
}

Conditional.propTypes = {
  when: PropTypes.bool,
  children: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  else: PropTypes.element
};
