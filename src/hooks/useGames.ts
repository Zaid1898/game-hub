import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  console.log("Fetching games for genre ID:", selectedGenre?.id);
  return useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
};

export default useGames;
