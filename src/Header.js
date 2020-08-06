import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
const Header = () => {
      //Search Catalog
      const searchCatalog = () =>{ 
        let searchInput = document.getElementById('article-searcher').value 
        searchInput=searchInput.toLowerCase(); 
        let allTitle = document.getElementsByClassName('list-group-item'); 
        
        for (let i = 0; i < allTitle.length; i++) { 
          if (!allTitle[i].innerHTML.toLowerCase().includes(searchInput)) { 
                  allTitle[i].parentElement.style.display="none";
          } 
          else {
            allTitle[i].parentElement.style.display="block";				 
          } 
        } 
      } 
    const  setDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const copyright = document.querySelector('.copyright');
      copyright.innerHTML = year;
    }

    const useStyles = makeStyles((theme) => ({
      home: {

      },
        button: {
          margin: theme.spacing(1),
          borderRadius: 20,
        },
    }));

    const classes = useStyles();
    return(
      <div>
        <AppBar  class="navbar" position="static" padding-right="-1px" >
          <span class="menu"><a href="/" id="home">&lt;/&gt; DEV CATALOG</a></span>
          <span class="menu"><a href="#">CONTACT</a></span>
          <span class="menu"><a href="#">BLOG</a></span>
              <div className="article-search">
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                  >
                       <SearchOutlinedIcon />
                      Search
                  </Button>
                  <input
                      type="text"
                      id="article-searcher"
                      className="searchbox"
                      placeholder="Search Catalog"
                      onKeyUp={searchCatalog}
                  />
                  {/**/}
              </div>
        </AppBar>
      </div>
      );
    }

export default Header
