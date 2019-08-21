import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import api from '../../Services/api'
import Cards from '../Cards'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '15px auto',
    },
}));

export default function Content() {

    const [user, setUser] = useState('');
    const [data, setData] = useState();
    const classes = useStyles();

    async function handleSubmit(event) {
        event.preventDefault();
    
        const response = await api.get(`search/users?q=${user}`)
        
        setData(response.data)
    }

    return (
        <Container maxWidth="sm" className={classes.container}>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="user"
                    label="Usuário"
                    name="user"
                    autoComplete="user"
                    autoFocus
                    onChange={event => setUser(event.target.value)}
                    value={user}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Buscar
                </Button>
            </form>

            {data &&
                <Cards data={data} />
            }

        </Container>
    )
}