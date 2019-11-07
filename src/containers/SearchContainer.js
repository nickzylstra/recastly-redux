import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearchDebounced from '../actions/searchDebounced.js';


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearchDebounced(q))
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
