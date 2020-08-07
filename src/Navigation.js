
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      borderRadius: 20,
    },
    home: {
    }
  }));

const ArchiveNav = () =>{
    const classes = useStyles();

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
        return(
            <div>
                <div className="navbar">
                  <a href="#" className={classes.home}>HOME</a>
                        <div className="dropdown">
                            <button className="dropbtn">CATEGORIES </button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        <a href="#news">ABOUT US</a>
                        <a href="#news">CONTACT US</a>
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
                </div>
        
                <div>
                    <p></p>
                </div>
            </div>

            

        )
}

export default ArchiveNav