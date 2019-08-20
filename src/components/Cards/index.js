import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
});

export default function Cards (props) {
    const classes = useStyles();

    return (
        <>
            {props.data.items.map( item => (
                <Card key={item.id} className={classes.card}>
                    <CardHeader
                        avatar = {
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title = {item.login}
                        subheader = {`Score: ${item.score}`}
                    />
                    <CardActions>
                        <Button size="small">Repositórios</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}