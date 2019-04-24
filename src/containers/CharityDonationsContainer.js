import { connect } from 'react-redux';
import * as charityActions from '../state/actions/charityActions';
import { CharityDonations } from '../components';

const mapStateToProps = state => ({
  charity: state.charity.data
});

const mapDispatchToProps = dispatch => ({
  getCharity: charityId => dispatch(charityActions.fetchCharity(charityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharityDonations);
