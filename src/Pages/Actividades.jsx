import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Footer from "../components/footer/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#05595b',
  },
  avatar: {
    marginLeft: '60rem',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function Actividades() {
  const classes = useStyles();

    return (
      <main style={{ display: 'block'}}>
        <div >
              <AppBar position="static" className={classes.root} >
              <Tabs aria-label="wrapped label tabs example">
                <Tab
                  value="one"
                  label="logo"
                />
                <Tab value="two" label="TRAINER" />
                <Tab value="three" label="SALIR" />

                <div className={classes.avatar}>
                <Avatar>H</Avatar>
                </div>
              </Tabs>
            </AppBar>
        </div>
        
     
        <Container>
        <Row>
          <Col xs={{ order: 'last' }}>
            <div>
                <h1 style={{textAlign: "center"}}>Power</h1>
                <img src="https://medac.es/sites/default/files/blog/destacadas/Power%20lifting.jpg" alt="" />
                <h3 style={{textAlign: "center"}}>$2500</h3>
                <Button variant="contained" color="primary" href="/deporte" style={{marginLeft: '18em'}}>INSCRIBIRME</Button>
            </div>
          </Col>
          <Col xs>
          <div>
                <h1 style={{textAlign: "center"}}>X55</h1>
                <img src="https://www.revistahigh.com.ar/files/image/2/2222/5e70631153836.jpg" alt="" />
                <h3 style={{textAlign: "center"}}>$1500</h3>
                <Button variant="contained" color="primary" href="/deporte" style={{marginLeft: '18em'}}>INSCRIBIRME</Button>
            </div>
          </Col>
          <Col xs={{ order: 'first' }}>
          <div>
                <h1 style={{textAlign: "center"}}>X55</h1>
                <img src="https://i.ytimg.com/vi/DyONoQ0VWCY/maxresdefault.jpg" alt="" />
                <h3 style={{textAlign: "center"}}>$3500</h3>
               <Button variant="contained" color="primary" href="/deporte" style={{marginLeft: '18em'}}>INSCRIBIRME</Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
      </main>
      
    );
  }
  
  export default Actividades;