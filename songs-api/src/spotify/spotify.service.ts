import { Injectable, OnModuleInit } from '@nestjs/common';
import { Line } from 'src/types/Line';
import { Track } from 'src/types/Track';
import { SpotifyRepository } from './spotify.repository';

@Injectable()
export class SpotifyService implements OnModuleInit {
  constructor(private readonly spotifyRepository: SpotifyRepository) {}

  onModuleInit() {
    throw new Error('Method not implemented.');
  }

  async getLinesBySongId(id: Track['id']): Promise<Line[]> {
    return this.spotifyRepository.getSong(id);
  }
}
