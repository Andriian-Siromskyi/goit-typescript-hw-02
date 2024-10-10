import axios from "axios";

const accessKey = "JNY2VKdEpZqEV1nEUzf3-3EZ3mCDxg9G00x1jVePDw0";
axios.defaults.baseURL = "https://api.unsplash.com/search";

export default async function searchPhotos(topic, page) {
  const response = await axios.get("/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: topic,
      page,
      per_page: 12,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}
