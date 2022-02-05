import * as React from 'react';
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Who1Cards = props => (
    <Grid container spacing={3}>
        {props.data.map((card) => (
            <Grid item xs={4} key={card.id}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={card.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.contents}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
);

Who1Cards.getInitialProps = async () => {
    const res = await axios.get('http://localhost:3000/example.json',
        { transformResponse: (res) => { return JSON.parse(res);}});
    return {
        data: res.data
    };
};

export default Who1Cards;