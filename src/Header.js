import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';

const Header = () => {

      /*Search Catalog
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
      }*/

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
          <span className="menu"><a href="/" id="home">&lt;/&gt; DEV CATALOG</a></span>
          <span className="menu"><a href="#">CONTACT</a></span>
          <span className="menu"><a href="#">BLOG</a></span>
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
                      //onKeyUp={searchCatalog}
                  />
                  {/**/}
              </div>
        </AppBar>
      </div>
      );
    }

export default Header
