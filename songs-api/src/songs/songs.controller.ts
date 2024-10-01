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

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get(':id')
  getSongById(@Param('id') id: Track['id']): Promise<Track> {
    return this.songsService.getSongById(id);
  }
}
