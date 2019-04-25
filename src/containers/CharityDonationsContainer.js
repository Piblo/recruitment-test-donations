import { connect } from 'react-redux';
import { CharityDonations } from '../components';
import { fetchDonations } from '../state/actions/donationsActions';
import { fetchCharity } from '../state/actions/charityActions';

const mapStateToProps = state => ({
  charity: state.charity.data,
  donations: state.donations.data,
  loading: state.charity.loading || state.donations.loading
});

const mapDispatchToProps = dispatch => ({
  getCharity: charityId => dispatch(fetchCharity(charityId)),
  getDonations: charityId => dispatch(fetchDonations(charityId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharityDonations);
