import { Injectable } from '@nestjs/common';
import { Line } from 'src/types/Line';
import { Track } from 'src/types/Track';

@Injectable()
export class SpotifyRepository {
  getSong(id: Track['id']): Line[] {
    // API
    return [];
  }
}
