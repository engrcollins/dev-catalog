import React, { useState, useEffect } from "react";
import './CustomersList.css'
import CustomerDataService from "../services/CustomerService";
import { Link } from "react-router-dom";

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

  //search website
  const search_journal = () =>{ 
    let searchInput = document.getElementById('article-searcher').value 
    searchInput=searchInput.toLowerCase(); 
    let allTitle = document.getElementsByClassName('list-group-item'); 
    
    for (let i = 0; i < allTitle.length; i++) { 
      if (!allTitle[i].innerHTML.toLowerCase().includes(searchInput)) { 
              allTitle[i].parentElement.style.display="none";
      } 
      else {
        console.log(allTitle[i])
        allTitle[i].parentElement.style.display="block";				 
      } 
    } 
  } 
  return (
    <div className="">
      <div className="leftSide col-5 col-s-5">
        <div className="article-search">
          <input
            type="text"
            id="article-searcher"
            className="searchbox"
            placeholder="Search by title"
            value={searchTitle}
            onKeyUp={search_journal}
            onChange={onChangeSearchTitle}
          />
          <div id="" className="article-button">
            <button
              className="btn btn-info"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
        <br/>
        <div className="article-list">
          <h3><strong>Topic List</strong></h3>

          <ul className="list-group">
            {customers &&
              customers.map((customer, index) => (
                <li><p
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveCustomer(customer, index)}
                  key={index}
                >
                  {customer.title}
                </p></li>
              ))}
          </ul>

          <button
            className="btn btn-danger"
            onClick={removeAllCustomers}
          >
            Remove All
          </button>
        </div>
      </div>
      <div className="rightSide col-6 col-s-6">
        <div className="customer-details">
        {currentCustomer ? (
          <div>
            <h4 className=""><u>Customer &nbsp;
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
            <p>Please click on a Customer...</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default CustomersList;
