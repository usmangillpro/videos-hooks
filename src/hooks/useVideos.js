import { useState, useEffect } from 'react';
import youtube from "../apis/youtube";


const useVideos = (searchQuery) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(searchQuery)
      }, [searchQuery])

      const search = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
          },
        });
        setVideos(response.data.items);
        
        
      };
      return [videos, search]
}

export default useVideos;