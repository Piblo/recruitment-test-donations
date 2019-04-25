export const DONATIONS_FETCH = 'donations/fetch';
export const DONATIONS_FETCH_SUCCESS = 'donations/fetch_success';

export const fetchDonations = charityId => ({
  type: DONATIONS_FETCH,
  payload: { charityId }
});

export const fetchDonationsSuccess = donations => ({
  type: DONATIONS_FETCH_SUCCESS,
  payload: donations
});
