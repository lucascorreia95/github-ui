import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';

import api from '../../Services/api'
import Repos from './Repos'

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: '15px 0',
    },
});

export default function SingleCard (props) {
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);
    const [repos, setRepos] = useState([]);

    async function handleExpandClick() {
        setExpanded(!expanded);

        if (!repos.length) {
            const response = await api.get(`users/${props.item.login}/repos`)
            setRepos(response.data)
        }

    }

    return (
        <Card key={ props.item.id } className={ classes.card }>
            <CardHeader
                avatar = { <Avatar aria-label="recipe"  alt={props.item.login} src={props.item.avatar_url} /> }
                title = { props.item.login }
                subheader = { `Score: ${props.item.score}` }
            />
            <CardActions>
                <Button variant="contained" color="primary" size="small" onClick={handleExpandClick} >Repositórios</Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Repos repos={repos} />
                </CardContent>
            </Collapse>
        </Card>
    );
}