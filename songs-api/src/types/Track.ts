import { Artist } from './Artist';

export type Track = {
  name: string;
  id: string;
  thumbnailUrl: string;
  artist: Artist;
};
