import Campuses from '../components/campuses';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/campus-reducer';

const mapStateToProps = (state) => {
  return {
    campuses: state.campus.list
  };
};

const mapDispatchToProps = { removeCampus };

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses);

export default CampusesContainer;