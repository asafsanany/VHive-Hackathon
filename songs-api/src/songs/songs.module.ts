import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { SongsRepository } from './songs.repository';
import { ChordsModule } from 'src/chords/chords.module';

@Module({
  controllers: [SongsController, ChordsModule],
  providers: [SongsService, SongsRepository],
})
export class SongsModule {}
