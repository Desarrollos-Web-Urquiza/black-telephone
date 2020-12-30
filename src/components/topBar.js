import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden';

import styles from './topBar.module.css';
import menuItems from './data/menu-items'

const ElevationScroll = ({children}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    className: trigger ? styles.barNotOnTop : styles.bar,
    style: {transition: 'all 200ms ease'}
  });
}

export default function TopBar({page, onOpenDrawer, history}) {

  return(
    <ElevationScroll>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <Container className={styles.container}>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={3}>
                  <a className={styles.logo} onClick={() => history.push("/") } >
                    <img className={styles.logoImg} src="/images/logoBT.png" alt=""   />
                  </a>
              </Grid>
              <Hidden smDown>
                <Grid item xs={9} className={styles.links}>
                  {menuItems.map(item => 
                      <a 
                        name={item.name}
                        className={styles.link}
                        active={true}
                        alt={item.alt}
                        onClick={() => history.push((item.link).toString() ) }
                      >
                        {item.name}
                        {console.log(item.link)}
                        {console.log(history)}
                        {console.log(onOpenDrawer)    }
                      </a>
                  )}
                </Grid>
              </Hidden>
              <Hidden mdUp>
                <IconButton 
                  edge="start"
                  color="inherit" aria-label="menu"
                  onClick={onOpenDrawer}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}