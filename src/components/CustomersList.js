import React, { useState, useEffect } from "react";
import './CustomersList.css'
import CustomerDataService from "../services/CustomerService";
import { Link } from "react-router-dom";
import { Grid, Paper, Typography } from "@material-ui/core";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveCustomers();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveCustomers = () => {
    CustomerDataService.getAll()
      .then(response => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveCustomers();
    setCurrentCustomer(null);
    setCurrentIndex(-1);
  };

  const setActiveCustomer = (customer, index) => {
    setCurrentCustomer(customer);
    setCurrentIndex(index);
  };

  const removeAllCustomers = () => {
    CustomerDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    CustomerDataService.findByTitle(searchTitle)
      .then(response => {
        setCustomers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <div className="">
      <Grid container spacing={3}>
      <Grid item xs={12} sm={5} className="appContent">
        <div className="article-list">
          <h3><strong>Topic List</strong></h3>
          <ul className="list-group">
            {customers &&
              customers.map((customer, index) => (
                <div key={index}><p
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveCustomer(customer, index)}
                  key={index}
                >
                  {customer.title}
                </p></div>
              ))}
          </ul>

          {/*<button
            className="btn btn-danger"
            onClick={removeAllCustomers}
          >
            Remove All
          </button>}*/}
        </div>
        </Grid>
        <Grid item xs={12} sm={7} className="appContent">
        <div className="customer-details">
        {currentCustomer ? (
          <div>
            <h4 className=""><u>Article &nbsp;
              {currentCustomer.id}</u></h4>
            <p className="customer-group ">
              <label className="output-labelling">
                <strong>Title:</strong>
              </label>{" "}
              {currentCustomer.title}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>Category:</strong>
              </label>{" "}
              {currentCustomer.category}
            </p>
            <p className="customer-group">
              <label className="output-labelling">
                <strong>Description:</strong>
              </label>{" "}
              {currentCustomer.description}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>Source:</strong>
              </label>{" "}
              {currentCustomer.source}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>Author:</strong>
              </label>{" "}
              {currentCustomer.author}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>URL:</strong>
              </label>{" "}
              {currentCustomer.url}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>Tags:</strong>
              </label>{" "}
              {currentCustomer.tags}
            </p>
             <p className="customer-group">
              <label className="output-labelling">
                <strong>Status:</strong>
              </label>{" "}
              {currentCustomer.published ? "Published" : "Pending"}
            </p>

            <Link
              to={"/customers/" + currentCustomer.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <p>Please click on an article to view details...</p>
          </div>
        )}
      </div>
      </Grid>
      </Grid>
      </div>
  );
}

export default CustomersList;
