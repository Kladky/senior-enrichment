import Campus from '../components/Campus';
import { connect } from 'react-redux';
import { removeCampus } from '../reducers/campus-reducer';

const mapStateToProps = (state) => {
  return {
    campuses: state.campus.list,
    selected: state.campus.selected
  };
};

const mapDispatchToProps = { removeCampus };

const CampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campus);

export default CampusContainer;