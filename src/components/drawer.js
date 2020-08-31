import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import menuItems from './data/menu-items'
import Divider from '@material-ui/core/Divider';
import styles from './drawer.module.css'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: 'rgba(0,0,0,0.8)',
    textAlign: 'right',
    width: '100%',
    color: 'white',
    padding: '5px 20px'
  },
  
}));

export default ({page, onClose, open, history}) => {
  
  const classes = useStyles()
  console.log(open)

  return(
    <div>
      <Drawer classes={{paper: classes.drawer}} anchor="right" open={open}>
        <div>
          <IconButton 
            edge="start"
            color="inherit" aria-label="menu"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <nav>
          {menuItems.map(link => 
            <Typography key={link.id} variant="h5" component="h2">
              {/*<Link href={link.link}>*/}
                <a 
                  name={link.name}
                  alt={link.alt}
                  className={styles.link}
                  onClick={() => history.push((link.link).toString() ) }
                >
                  {link.name}
                </a>
              {/*</Link>*/}
            </Typography>
          )}
        </nav>
      </Drawer>
    </div>
  )
}
