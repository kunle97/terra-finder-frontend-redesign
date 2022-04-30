import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./View.css";
import terra_logo from "../img/coins/terra-luna-logo.png";
//import coins
import UST from "../img/coins/UST.png";
import EUT from "../img/coins/EUT.png";
import JPT from "../img/coins/JPT.png";
import KRT from "../img/coins/KRT.png";
import MNT from "../img/coins/MNT.png";

//import token icons
import APOLLO from "../img/tokens/APOLLO.png";
import aUST from "../img/tokens/aUST.png";
import bLUNA from "../img/tokens/bLUNA.png";
import ETH from "../img/tokens/ETH.png";
import KUJI from "../img/tokens/KUJI.png";
import LUNI from "../img/tokens/LUNI.png";
import mAAPL from "../img/tokens/mAAPL.png";
import mBTC from "../img/tokens/mBTC.png";
import mGME from "../img/tokens/mGME.png";
import mTWTR from "../img/tokens/mTWTR.png";
import ORION from "../img/tokens/ORION.png";
import STT from "../img/tokens/STT.png";
import USDCbs from "../img/tokens/USDCbs.png";
import VKR from "../img/tokens/VKR.png";
import WBTC from "../img/tokens/WBTC.png";
import MINE from "../img/tokens/MINE.png";
import MobileNav from "../Nav/MobileNav";
import ViewNav from "../Nav/ViewNav";

// 2. A simplified "view" page. it should show the Address section, Coins section (EUT, KRT, JPT, UST, MNT) , Tokens section (LUNA), and Transactions.
//3. For the Transactions section, each row only needs to include Tx hash , Type , Block, Timestamp, and Fee. The Tx hash doesn't need to be a link (so you do NOT need to create a page to show the details of the transaction)
function View() {
  const { state } = useLocation();
  const { input } = state;
  return (
    <div>
      <MobileNav />
      <ViewNav />
      <div className="container">
        <div className="address">
          {/* <h2>terra1r3z46gdgtzzjjjweldwsuvdtv8hf2859t5vl0</h2> */}
          <h2>{input}</h2>
          <p>Account Details</p>
        </div>
        <div className="row coin-token-row">
          <div className="col-md-6 coins">
            <div className="card">
              <div class="card-header">
                <h4>Coins</h4>
              </div>
              <div className="card-body top-card-body">
                <ul class="coin-list">
                  <li>
                    <img src={terra_logo} className="coin-img" />
                    <span className="coin-name">LUNA</span>
                    <span className="coin-amount">
                      {Math.random() * (2.3).toString()}{" "}
                    </span>
                  </li>
                  <li>
                    <img src={UST} className="coin-img" />
                    <span className="coin-name">UST</span>
                    <span className="coin-amount">
                      {Math.random() * (2.3).toString()}{" "}
                    </span>
                  </li>
                  <li>
                    <img src={EUT} className="coin-img" />
                    <span className="coin-name">EUT</span>
                    <span className="coin-amount">
                      {Math.random() * (6.3).toString()}{" "}
                    </span>
                  </li>
                  <li>
                    <img src={JPT} className="coin-img" />
                    <span className="coin-name">JPT</span>
                    <span className="coin-amount">
                      {Math.random() * (9.3).toString()}{" "}
                    </span>
                  </li>
                  <li>
                    <img src={KRT} className="coin-img" />
                    <span className="coin-name">KRT</span>
                    <span className="coin-amount">
                      {Math.random() * (7.4).toString()}{" "}
                    </span>
                  </li>
                  <li>
                    <img src={MNT} className="coin-img" />
                    <span className="coin-name">MNT</span>
                    <span className="coin-amount">
                      {Math.random() * (1.9).toString()}{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 tokens">
            <div className="card">
              <div class="card-header">
                <h4>Tokens</h4>
              </div>
              <div className="card-body top-card-body">
                <ul class="token-list">
                  <li>
                    <img src={APOLLO} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (2.3).toString()}{" "}
                    </span>
                    <span className="token-name">APOLLO</span>
                  </li>
                  <li>
                    <img src={STT} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (2.3).toString()}{" "}
                    </span>
                    <span className="token-name">STT</span>
                  </li>
                  <li>
                    <img src={ETH} className="token-img" />
                    <span className="coin-amount">
                      {Math.random() * (6.3).toString()}{" "}
                    </span>
                    <span className="coin-name">ETH</span>
                  </li>
                  <li>
                    <img src={WBTC} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (9.3).toString()}{" "}
                    </span>
                    <span className="token-name">WBTC</span>
                  </li>
                  <li>
                    <img src={mTWTR} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (7.4).toString()}{" "}
                    </span>
                    <span className="token-name">mTWTR</span>
                  </li>
                  <li>
                    <img src={VKR} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (1.9).toString()}{" "}
                    </span>
                    <span className="token-name">VKR</span>
                  </li>
                  <li>
                    <img src={aUST} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (47.9329578).toString()}{" "}
                    </span>
                    <span className="token-name">aUST</span>
                  </li>
                  <li>
                    <img src={bLUNA} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (3.6543276).toString()}{" "}
                    </span>
                    <span className="token-name">bLUNA</span>
                  </li>
                  <li>
                    <img src={MINE} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (4.5978456).toString()}{" "}
                    </span>
                    <span className="token-name">MINE</span>
                  </li>
                  <li>
                    <img src={LUNI} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (6.9).toString()}{" "}
                    </span>
                    <span className="token-name">LUNI</span>
                  </li>
                  <li>
                    <img src={mGME} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (1.4536).toString()}{" "}
                    </span>
                    <span className="token-name">mGME</span>
                  </li>
                  <li>
                    <img src={ORION} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (1.1543).toString()}{" "}
                    </span>
                    <span className="token-name">ORION</span>
                  </li>
                  <li>
                    <img src={mBTC} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (5.987).toString()}{" "}
                    </span>
                    <span className="token-name">mBTC</span>
                  </li>
                  <li>
                    <img src={mAAPL} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (1.94365).toString()}{" "}
                    </span>
                    <span className="token-name">mAAPL</span>
                  </li>
                  <li>
                    <img src={KUJI} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (3.97658756).toString()}{" "}
                    </span>
                    <span className="token-name">KUJI</span>
                  </li>
                  <li>
                    <img src={USDCbs} className="token-img" />
                    <span className="token-amount">
                      {Math.random() * (1.134).toString()}{" "}
                    </span>
                    <span className="token-name">USDCbs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row tx-row">
          <div className="card-header">
            <h4>Transactions</h4>
          </div>
          <div className="card table-card">
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Tx hash</th>
                    <th scope="col">Type</th>
                    <th scope="col">Block</th>
                    <th scope="col">Fee</th>
                    <th scope="col">Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">B37211AB…D6D1AB73</th>
                    <td>MsgSend</td>
                    <td>7446437(columbus-5)</td>
                    <td>0.250657 UST</td>
                    <td>2022.04.29 20:58:20-04:00</td>
                  </tr>
                  <tr>
                    <th scope="row">B37211AB…D6D1AB73</th>
                    <td>MsgSend</td>
                    <td>7446437(columbus-5)</td>
                    <td>0.250657 UST</td>
                    <td>2022.04.29 20:58:20-04:00</td>
                  </tr>
                  <tr>
                    <th scope="row">B37211AB…D6D1AB73</th>
                    <td>MsgSend</td>
                    <td>7446437(columbus-5)</td>
                    <td>0.250657 UST</td>
                    <td>2022.04.29 20:58:20-04:00</td>
                  </tr>
                  <tr>
                    <th scope="row">B37211AB…D6D1AB73</th>
                    <td>MsgSend</td>
                    <td>7446437(columbus-5)</td>
                    <td>0.250657 UST</td>
                    <td>2022.04.29 20:58:20-04:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
