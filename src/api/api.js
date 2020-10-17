import axios from "axios";

const apiKey = "14706813-7c058fab53d6fa7c4bf5f75a9";
const url = "https://pixabay.com/api/?";

const fetchImg = (searchQuery = "popular", page = 1) => {
  return axios
    .get(
      `${url}q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default { fetchImg };
