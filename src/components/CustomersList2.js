import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './CustomersList.css'
import CustomerDataService from "../services/CustomerService";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography, Divider, Input } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minWidth: 410,
    border: 1,
  },
  table: {
    minWidth: 360,
  },
  active: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
  },
});

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [genList, setGenList] = useState(null);

  useEffect(() => {
    retrieveCustomers();
  }, []);

  const retrieveCustomers = () => {
    CustomerDataService.getAll()
      .then(response => {
        setIsLoading(false);
        setCustomers(response.data);
        setGenList(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

    //Generate topic list
    let topicList =[]
    topicList = customers.map(customer => {
        return customer.title
    })
    
   const setActiveCustomer = (indexTitle) => {
       let d = customers.find(d => d.title === indexTitle);
       let item = JSON.stringify(d);
        setCurrentCustomer(d);
     //setCurrentIndex(index);
   };
  const refreshList = () => {
    retrieveCustomers();
    setCurrentCustomer(null);
    setCurrentIndex(-1);
  };

  const Row = ({ index, style }) => (
    <div>
    <ListItem style={style} button key={index}
        selected={currentIndex === index}
        onClick={() => setActiveCustomer(topicList[index])}
        >
         <AnchorLink href='#section1' >
          <ListItemText primary=
            {<p class="list-group-item">{topicList[index]}</p>}
            />
            <Divider />
          </AnchorLink>
    </ListItem>
    </div>
  );
    //Search Catalog
        const searchCatalog = (e) =>{ 
          setCustomers(customers)
          let searchInput = e.target.value;
          searchInput=searchInput.toLowerCase();
          let allTitle = document.getElementsByClassName('list-group-item'); 
          for (let i = 0; i < allTitle.length; i++) { 
            //alert(allTitle[i].parentNode.parentNode.parentNode.parentElement)
            if (allTitle[i].innerHTML.toLowerCase().includes(searchInput)) { 
              console.log(searchInput);
              allTitle[i].parentNode.parentNode.parentNode.parentElement.style.display="block";
            } 
            else {
              console.log("yes");
              allTitle[i].parentNode.parentNode.parentNode.parentElement.style.display="none";				 
            } 
          }
        } 

  const newLocation = (external) => {
    window.open(external)
  }

  const classes = useStyles();

  return (
    <div className="">
      <Grid container spacing={3} >
      <Grid item xs={11} sm={7} className="appContent">
        <div className="customer-details" id="section1">
        {currentCustomer ? (
          <div>
          {alert(currentCustomer.category)}
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2} align="center"><strong>ARTICLE &nbsp;
                          {currentCustomer.id}</strong>
                        </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
            <TableRow>
              <TableCell align="left"><strong>Title:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.title}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Category:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.category}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Description:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.description}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Source:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.source}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Author:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.author}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>URL:</strong></TableCell>
              <TableCell align="left"><a  href={currentCustomer.URL} target="_blank">{" "} {currentCustomer.URL}</a>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Tags:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.tags}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell align="left"><strong>Status:</strong></TableCell>
              <TableCell align="left">{" "}
              {currentCustomer.published ? "Published" : "Pending"}</TableCell>
            </TableRow>
            </TableBody>
            </Table>
              <Link to={"/customers/" + currentCustomer.id}
                >
                  Edit
              </Link>
          </TableContainer>
        </div>
            ) : (
              <div>
                <br/>
                <br/>
                <p>No article selected</p>
              </div>
        )}
      </div>
      </Grid>
      <Grid item xs={11} sm={5} className="appContent">
      {isLoading ? (<p>Data loading, please wait.. 
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
       </p>) : (
        <div className="article-list" className={classes.root}>
          <h3><strong>ARTICLE TOPICS</strong></h3>
          <p>Click on any article below to view details...</p>
          <div className="article-search">
            <Button
                variant="contained"
                onClick={searchCatalog}
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
          <div >
            <FixedSizeList
              component="nav"
              height={500}
              width={500}
              itemSize={60}
              itemCount={topicList.length}
              >
              {Row}
            </FixedSizeList>
          </div>
        </div>
       )}
      </Grid>
      </Grid>
      </div>
  );
}

export default CustomersList;
