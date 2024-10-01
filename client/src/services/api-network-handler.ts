import axios from "axios";
import {Track} from "../types/track.ts";
import {mockedTracks} from "./mocked-data.ts";

const apiPort = 8000;
const apiUrl = `http://localhost:${apiPort}`;

export const getTracks = (): Track[] => {
    // return axios.post<{ songs: unknown[] }>(`${apiUrl}/songs`, {
    //     title
    // });

    return mockedTracks;
}
