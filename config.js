// Backend Base URL (Toggle between local and production)
const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://crowd-funding-backend.vercel.app/"
    : "http://localhost:4000/";

// Common API path for better structure
const API_PATH = "api";

// Campaign Routes
export const getAllCampaignsUrl = () => `${BASE_URL}${API_PATH}/campaign/all`;
export const getCampaignDataByIdUrl = (id) =>
  `${BASE_URL}${API_PATH}/campaign/${id}`;
export const createNewCampaignUrl = () => `${BASE_URL}${API_PATH}/user/create`;
export const updateCampaignUrl = (id) =>
  `${BASE_URL}${API_PATH}/user/${id}/update`;
export const deleteCampaignUrl = (id) =>
  `${BASE_URL}${API_PATH}/user/${id}/delete`;

// Admin Routes
export const registerAdminUrl = () => `${BASE_URL}${API_PATH}/user/addAdmin`;
export const loginAdminUrl = () => `${BASE_URL}${API_PATH}/user/login`;

// Donation Routes
export const donateTo = (id) => `${BASE_URL}${API_PATH}/donate/${id}/payment`;
export const donationData = (id) =>
  `${BASE_URL}${API_PATH}/donation/success/${id}`;

// Query Routes
export const getAllQueriesUrl = () => `${BASE_URL}${API_PATH}/query/all`;
export const getCreateQueryUrl = () => `${BASE_URL}${API_PATH}/query/create`;
export const queryDeleteUrl = (id) =>
  `${BASE_URL}${API_PATH}/query/${id}/delete`;

// Export All URLs as Default
export default {
  getAllCampaignsUrl,
  getCampaignDataByIdUrl,
  createNewCampaignUrl,
  updateCampaignUrl,
  deleteCampaignUrl,
  registerAdminUrl,
  loginAdminUrl,
  donateTo,
  donationData,
  getAllQueriesUrl,
  getCreateQueryUrl,
  queryDeleteUrl,
};
