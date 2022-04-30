import React, { Fragment, useRef } from "react";
import Nav from "../Nav/Nav";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import MobileNav from "../Nav/MobileNav";
// import { LCDClient, Coin } from "@terra-money/terra.js"; Error on import
//Please create a simplified version of terra finder, with the following functionality
// 1. A search page similar to https://finder.terra.money/
// 2. A simplified "view" page. it should show the Address section, Coins section, Tokens section, and Transactions.
// 3. For the Transactions section, each row only needs to include Tx hash , Type , Block, Timestamp, and Fee. The Tx hash doesn't need to be a link (so you do NOT need to create a page to show the details of the transaction)
// 4. Connect to the Terra mainnet APIs

// Let us know if you have any questions

function Home() {
  // Attempting to connect to terra api but I get an error
  //const terra = new LCDClient({
  //   URL: "http://lcd.terra.dev",
  //   chainID: "columbus-4",
  // });
  //

  const searchInput = useRef();
  const navigate = useNavigate();
  const submitHandler = () => {
    navigate("/view", { state: { input: searchInput.current.value } });
  };
  return (
    <Fragment>
      <div className="search-container">
        <MobileNav />
        <Nav />
        <div className="row search-container-row" style={{ height: "80%" }}>
          <div className="col-md-12 align-self-center">
            <div className="title-contianer" >
              <h1>AquaTerra</h1>
              <p>Find your block, transaction or account in the blockchain ocean.</p>
            </div>
            <form onSubmit={submitHandler}>
              <input
                ref={searchInput}
                type="search"
                className="address-search"
                placeholder="Search Block/ Tx / Account"
              />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
