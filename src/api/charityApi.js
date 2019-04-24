import httpClient from './httpClient';

function fetchCharity(charityId) {
  return httpClient.get(`charity/${charityId}`);
}

function fetchCharityDonations(charityId) {
  return httpClient.get(`charity/${charityId}/donations`);
}

export default {
  fetchCharity,
  fetchCharityDonations
};
