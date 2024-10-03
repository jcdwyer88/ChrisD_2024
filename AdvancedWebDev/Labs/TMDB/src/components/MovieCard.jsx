import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function MovieCard({newMovie}) {
    const baseURL = `https://image.tmdb.org/t/p/w500${newMovie.poster_path}`
    return (
        <Card sx={{ maxWidth: 345, height: "30vh", margin: "20px", overflow: "scroll", display: "inline-block" }}>
            <CardActionArea>
                <CardMedia
                component="img"
                sx={{
                    height: "360px", 
                    width: "100%", 
                    objectFit: "contain", 
                    backgroundColor: "black"
                }}             
                image={baseURL}
                alt= {newMovie.title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {newMovie.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {newMovie.overview}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
