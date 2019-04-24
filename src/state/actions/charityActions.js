export const CHARITY_FETCH = 'charity/fetch';
export const CHARITY_FETCH_SUCCESS = 'charity/fetch_success';

export const fetchCharity = charityId => ({
  type: CHARITY_FETCH,
  payload: { charityId }
});

export const fetchCharitySuccess = charity => ({
  type: CHARITY_FETCH_SUCCESS,
  payload: charity
});
