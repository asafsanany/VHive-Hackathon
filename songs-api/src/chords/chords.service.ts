import { Injectable } from '@nestjs/common';
import { Line } from 'src/types/Line';
import { Track } from 'src/types/Track';
import { ChordsRepository } from './chords.repository';

@Injectable()
export class ChordsService {
  constructor(private readonly chordsRepository: ChordsRepository) {}
  async getLinesBySongId(id: Track['id']): Promise<Line[]> {
    return this.chordsRepository.getLinesBySongId(id);
  }
}
