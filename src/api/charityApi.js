import httpClient from './httpClient';

function fetchCharity(charityId) {
  return httpClient.get(`charity/${charityId}`);
}

async function fetchCharityDonations(charityId) {
  const response = await httpClient.get(`charity/${charityId}/donations`);
  response.donations.forEach(donation => {
    donation.donationDate = new Date(parseInt(donation.donationDate.substr(6)));
  });
  return response.donations;
}

export default {
  fetchCharity,
  fetchCharityDonations
};
