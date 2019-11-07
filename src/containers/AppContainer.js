import { connect } from 'react-redux';
import App from './../components/App.js';
import handleVideoSearch from '../actions/search.js';


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => dispatch(handleVideoSearch(q))
  };
};

var AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
