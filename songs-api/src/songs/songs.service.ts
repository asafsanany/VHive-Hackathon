import { Injectable } from '@nestjs/common';
import { ChordsService } from 'src/chords/chords.service';
import { Track } from 'src/types/Track';
import { TrackWithChords } from 'src/types/TrackWithChords';
import { SongsRepository } from './songs.repository';

@Injectable()
export class SongsService {
  constructor(
    private readonly songsRepository: SongsRepository,
    private readonly chordsService: ChordsService,
  ) {}
  async getSongWithChordsById(id: Track['id']): Promise<TrackWithChords> {
    const lines = await this.chordsService.getLinesBySongId(id);
    const songMetadata = await this.songsRepository.getSongById(id);

    const trackWithChords: TrackWithChords = {
      lines,
      ...songMetadata,
    };

    return trackWithChords;
  }

  async getSongs(): Promise<Track> {
    return this.songsRepository.getSongs() as any as Track;
  }
}
