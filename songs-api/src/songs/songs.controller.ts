import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { Track } from 'src/types/Track';
import { TrackWithChords } from 'src/types/TrackWithChords';
import getSongById from './mock/getSongById';
import getSongs from './mock/getSongs';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Get(':id')
  getSongById(@Param('id') id: Track['id']): Promise<TrackWithChords> {
    return getSongById as any as Promise<TrackWithChords>;
    return this.songsService.getSongWithChordsById(id);
  }

  @Get()
  getSongs(): Promise<Track> {
    return getSongs as any as Promise<TrackWithChords>;
    return this.songsService.getSongs();
  }
}
