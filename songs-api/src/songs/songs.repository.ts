import { Injectable } from '@nestjs/common';
import { Track } from 'src/types/Track';

@Injectable()
export class SongsRepository {
  async getSongById(id: Track['id']): Promise<Track> {
    // SPOTIFY API
    return;
  }
}
