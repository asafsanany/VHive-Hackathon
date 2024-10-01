import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Track} from "../../types/track.ts";

export const TrackCard = ({track}: { track: Track }) => {
    return (
        <Card sx={{display: 'flex', width: 300, marginBottom: 4}}>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image='' // require image
                alt="Artists Image"
            />
            <Box sx={{display: 'flex', flexDirection: 'column', width: 150}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {track.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{color: 'text.secondary'}}
                    >
                        {track.artist.name}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1}}>
                    <IconButton aria-label="previous">
                        loadChoords()
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}
