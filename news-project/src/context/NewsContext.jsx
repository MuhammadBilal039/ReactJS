import { createContext, useContext, useState } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=pakistan") => {
    setIsLoading(true);
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    isLoading,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
