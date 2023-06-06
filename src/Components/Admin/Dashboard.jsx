import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

// import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import avatar from '../../asset/Avatar/homme-daffaire.png'



// Cards
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
//Icons 
import GridViewIcon from '@mui/icons-material/GridView';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import TaskIcon from '@mui/icons-material/Task';

import { ToastContainer, toast } from 'react-toastify';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  // const [session, setSession] = useState({})
  const theme = useTheme();
  const colors = ["#0068B9",'#3df449',"#FEB019"]
  const [open, setOpen] = React.useState(false);
  // const [dashboard, setDashboard] = React.useState('d-none bg-danger ')
  // const [paramettre, setParamettre] = React.useState('d-none')
  // const [compte, setCompte] = React.useState('d-none')
  // const [service, setService] = React.useState({ A: 'd-none bg-danger ', B: 'd-none bg-danger', C: 'd-none bg-danger' })
  // const [data, setData] = useState([]) 
  // const [serviceCount, setServiceCount] =React.useState([]) 

  const [nam,setNam] = useState('')
  const [type,setType] = useState('')
  const route = useNavigate('')

  useEffect(()=>{
      if ( JSON.parse(sessionStorage.getItem('user')) !==undefined ){
          setNam( JSON.parse(sessionStorage.getItem('user'))[0].fullNam)
          setType(JSON.parse(sessionStorage.getItem('user'))[0].Type)
      }else{
          route('/login')
      }
      },[route])
  

  const ListItems = [
    {
        "text" :"Tite1",
        "action" : "ok"
    },
    {
        "text" :"Tite2",
        "action" : "ok"
    },
    {
        "text" :"Tite3",
        "action" : "ok"
    }

  ]


  const ListAdmin = [
   
    {
        "label" :"Tite11",
        "action" : "ok"
    },
    {
        "label" :"Tite22",
        "action" : "ok"
    },
    {
        "label" :"Tite33",
        "action" : "ok"
    }

   
  ]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>

        <Toolbar className="position-relative">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />

          </IconButton>

          <span className=' ' >
            <span className="">  Ecommerce_Samir </span>
            <span className=' position-absolute top-0 end-0  pe-5  ' style={{ marginTop: '1.5vh' }}>
              <div className="btn-groupe">

                <Avatar alt=" Tape Here  " src={avatar} data-bs-toggle="dropdown" aria-expanded="false" />

             {/* <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Action
                </button>  */}
                <ul className="dropdown-menu">
                  {/* <li><a className="dropdown-item" href="#">  samir </a></li>
                  <li><a className="dropdown-item" href="#">  admin</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li ><a className="dropdown-item" href="#" > Deconnecté </a></li> */}
                </ul>
              </div>

            </span>
          </span>






        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className='bg-dark'>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>

          {ListItems.map((e, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}  >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,

                }}
                onClick={e.action}

              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index === 0 ? <GridViewIcon   sx={{ color: 'white'}} /> : index === 1 ? <AddTaskIcon  sx={{ color: 'white'}} /> : index === 2 ? <PlaylistAddCheckIcon  sx={{ color: 'white'}} /> : index === 3 ? <TaskIcon  sx={{ color: 'white'}} /> : ''}
                </ListItemIcon>
                <ListItemText primary={e.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {ListAdmin.map((e, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={e.action}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon  sx={{ color: 'white'}} /> : <MailIcon  sx={{ color: 'white'}} />}
                </ListItemIcon>
                <ListItemText primary={e.label} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>





      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography component="span" className={dashboard}>
          <div className='d-flex    '>
            {
             serviceCount.map((e, i) => {
                return (
                  <MDBCard style={ { backgroundColor : i === 0 ? colors[0] : i === 1 ? colors[1] : i === 2 ? colors[2] : "green"}} className='text-white mb-3  ms-2  ' key={i}>
                    <MDBCardHeader className='d-flex justify-content-between'> <span>{e.Service}</span>  <span> {e.Nbr} </span> </MDBCardHeader>
                    <MDBCardBody>
                      <MDBCardTitle>Nobre Des Rendez-vous pour Aujourdhuit</MDBCardTitle>
                      <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                )
              })
            }
          </div>
          <div className='d-flex'>
          to do
          </div>




        </Typography>
        <Typography component="span" className={service.A} style={{ backgroundColor:"red" }}>
          ici
        </Typography>

        <Typography component="span" className={service.B}  style={{ backgroundColor:"red" }} >
          ici
        </Typography>

        <Typography component="span" className={service.C} style={{ backgroundColor:"red" }} >
         
          ici
        </Typography>

        <Typography component="span" className={paramettre} style={{ backgroundColor:"red" }} >
          <div className='p-0 m-0'>
            ici
          </div>
        </Typography>

        <Typography component="span" className={compte} style={{ backgroundColor:"red" }} >
          Compte
          <div>
            ici
          </div>
        </Typography>
      </Box>
      {/* // Toas */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
}