import './App.css';
import Card from './Cards/Card'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin:50
    }
  }));
function App() {
  let start=['ht','fd','ds','fd','ds','fd','ds','fd','ds','fd','ds','fd','ds'];
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
      {
       start.map(()=>{
    return <Card 
    name='Itachi Uchiya'
    age='21'
    height='5.10'
    motherTongue='Tamil'
    nakshathram='star'
    gothram='ggg'
    education='B.E Computer Science'
    work='Trimble inc'
    income='1000000 PA'
    />
       })
      }
      </Grid>
      </Grid>
    </div>
  );
  
}

export default App;
