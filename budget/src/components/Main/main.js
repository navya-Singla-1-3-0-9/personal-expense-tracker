import React, {useContext} from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import Form from './Form/form'
import useStyles from './styles'
import List from './List/list'

import { ExpenseTrackerContext } from '../../context/context'
const Main = () => {
    const classes= useStyles();
    const {balance}= useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered By Speechly"/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:"1.5em",marginTop:'20px'}}>
                    Try Saying.. Add income $100 in Category Salary for Monday...
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List/>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}

export default Main
