import PropTypes from "prop-types";

export default function Conditional(props) {
  return props.when ? props.children : props.else;
}

Conditional.propTypes = {
  when: PropTypes.bool,
  else: PropTypes.element
};
