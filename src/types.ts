import Swiper from 'swiper';

export interface Artist {
  id: number;
  genre: string;
  nickname: string;
  profileImage: string;
}

export interface ArtistDetail extends Artist {
  code?: string;
  type?: string;
  name?: string;
  linkTree?: string;
  email?: string;
  contact?: string;
  description?: string;
  bio?: string;
  assets?: Asset[];
}

interface Asset {
  genre: string;
  type: string;
  url: string;
  isMain: boolean;
}

export interface Artwork extends Asset {
  artist: { id: number };
}

export interface ArtworkListByGenre {
  artworkList: Artwork[] | undefined;
  isLoading: boolean;
}

export interface ArtworkDetailByArtist {
  id: number;
  title: string;
  description: string;
  artist: Artist;
  assets: Artwork[];
}

export type SwiperSlideChangeProps = Swiper & {
  slides: {
    dataset: DOMStringMap;
  };
};
