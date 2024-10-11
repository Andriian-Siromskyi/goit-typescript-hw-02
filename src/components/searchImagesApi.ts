import axios from "axios";
import { Image } from "./App/type";

const accessKey = "JNY2VKdEpZqEV1nEUzf3-3EZ3mCDxg9G00x1jVePDw0";
axios.defaults.baseURL = "https://api.unsplash.com/search";

export interface SearchPhotosResponse {
  images: Image[];
  totalPages: number;
}

export default async function searchPhotos(
  topic: string,
  page: number
): Promise<SearchPhotosResponse> {
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
