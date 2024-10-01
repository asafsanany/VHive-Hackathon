import { SpotifyModule } from './../spotify/spotify.module';
import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { SongsRepository } from './songs.repository';
import { ChordsModule } from 'src/chords/chords.module';
import { SpotifyService } from 'src/spotify/spotify.service';

@Module({
  imports: [ChordsModule],
  controllers: [SongsController],
  providers: [SongsService, SongsRepository],
})
export class SongsModule {}
