import { Module } from '@nestjs/common';
import { ChordsRepository } from './chords.repository';
import { ChordsService } from './chords.service';

@Module({
  providers: [ChordsService, ChordsRepository],
  exports: [ChordsService],
})
export class ChordsModule {}
