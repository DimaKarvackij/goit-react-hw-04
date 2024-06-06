import axios from "axios";

const YOUR_ACCESS_KEY = "8VaoYG3RVAwLIpXgyyDkSq1JDgRIQg2IQH_G6-95gbc";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getPhotos = async (searchValue, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: YOUR_ACCESS_KEY,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
      query: searchValue
    }
  });

  return response.data;
};
