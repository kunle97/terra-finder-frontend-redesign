import React from "react";
import "./Home.css";
//Please create a simplified version of terra finder, with the following functionality
// 1. A search page similar to https://finder.terra.money/
// 2. A simplified "view" page. it should show the Address section, Coins section, Tokens section, and Transactions.
// 3. For the Transactions section, each row only needs to include Tx hash , Type , Block, Timestamp, and Fee. The Tx hash doesn't need to be a link (so you do NOT need to create a page to show the details of the transaction)
// 4. Connect to the Terra mainnet APIs

// Let us know if you have any questions

function Home() {
  return (
    <div className="search-container" >
      <input type="search" className="address-search"  placeholder="Search Block/ Tx / Account"/>
    </div>
  );
}

export default Home;
