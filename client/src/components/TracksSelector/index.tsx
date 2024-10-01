import {useEffect, useState} from "react";
import './index.css';
import {getTracks} from "../../services/api-network-handler.ts";
import {Track} from "../../types/track.ts";
import CircularProgress from '@mui/material/CircularProgress';
import {TrackCard} from "../TrackCard";

export const TracksSelector = () => {
    const [tracks, setTracks] = useState<Track[]>([])

    useEffect(() => {
        setTracks(getTracks())
    }, [])

    return <div>
        <div>Spotify app</div>
        {tracks.length ?
            tracks.map(track => <TrackCard track={track}/>) :
            <CircularProgress/>
        }
    </div>;
}
