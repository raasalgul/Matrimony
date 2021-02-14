import React from "react";
import logo from '../Itachi.png'
import { Paper,Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
    //   width: 200,
      margin: 25,
      fontFamily: "'Roboto",
      backgroundColor: "#CCCCCC",
      color: "#1C80B5",
    //   color: "rgba(0, 0, 0, 0.54)",
    //   textAlign: "center",
      fontSize: 9
    },
    image:{
        width:250,
        height:300
    },
    heading:{
        //  color: "#1C80B5",
         color: "rgba(0, 0, 0, 0.54)",
    },
    right:{
        margin:'10px',
        minWidth:'200px',
        maxWidth:'200px'
    },
    button:{
        textAlign:"-webkit-right"
    }
  }));
  export default function Card(props)  {
    const classes = useStyles();
    return (
      <div>
        <Paper className={classes.paper}
        >
       <Grid
      justify="space-between"
      container 
      spacing={24}
      >
        <Grid item>
        <img src={logo} className={classes.image} alt="logo" />
        <h1><span className={classes.heading}>{props.name}</span></h1>
        </Grid>
        <Grid item>
            <div className={classes.right}>
          <h1><span className={classes.heading}>Age: </span>{props.age}</h1>
          <h1><span className={classes.heading}>Height: </span>{props.height}</h1>
          <h1><span className={classes.heading}>Mother Tongue: </span>{props.motherTongue}</h1>
          <h1><span className={classes.heading}>Nakshathram: </span>{props.nakshathram}</h1>
          <h1><span className={classes.heading}>Gothram: </span>{props.gothram}</h1>
          <h1><span className={classes.heading}>Education: </span>{props.education}</h1>
          <h1><span className={classes.heading}>Work: </span>{props.work}</h1>
          <h1><span className={classes.heading}>Income: </span>{props.income}</h1>
          <Grid
          className={classes.button}
          >
          <Button variant="contained"
          color="primary"
        //   onClick={this.clear}
          >
              Intrested
        </Button>
        </Grid>
          </div>
          </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }