import { Module } from '@nestjs/common';
import { SpotifyRepository } from './spotify.repository';
import { SpotifyService } from './spotify.service';

@Module({
  providers: [SpotifyService, SpotifyRepository],
  exports: [SpotifyService],
})
export class SpotifyModule {}
