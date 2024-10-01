import { Line } from './Line';
import { Track } from './Track';

export type TrackWithChords = Track & {
  lines: Line[];
};
