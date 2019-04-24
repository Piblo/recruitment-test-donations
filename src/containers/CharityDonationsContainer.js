import { connect } from 'react-redux';
import { CharityDonations } from '../components';
import { fetchDonations } from '../state/actions/donationActions';
import { fetchCharity } from '../state/actions/charityActions';

const mapStateToProps = state => ({
  charity: state.charity.data,
  donations: state.donations.data
});

const mapDispatchToProps = dispatch => ({
  getCharity: charityId => dispatch(fetchCharity(charityId)),
  getDonations: charityId => dispatch(fetchDonations(charityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharityDonations);
