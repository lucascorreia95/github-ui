<div className={classes.search}>
    <div className={classes.searchIcon}>
        <SearchIcon />
    </div>
    <InputBase
        placeholder="Busca..."
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'Busca...' }}
    />
</div>
<Button variant="contained" color="primary" className={classes.button}>
    Buscar
</Button>