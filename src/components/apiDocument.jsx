import React from "react";
import "../CSS/apiDocument.css";

const ApiDocument = () => {
  return (
    <div>
      <h1>1. Introduction </h1>
      <h5>
        The Web Service API interface is for accessing the SimplePlay Platform.
        Including user registration, user balance query, user betting records
        and charging to or withdraw from a user account. This document includes
        both Transfer Wallet and Seamless Wallet.
      </h5>
      <h1>2. Version</h1>
      <table>
        <tr>
          <th>Version</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>1.0.0</td>
          <td>Initial Version</td>
          <td>21.04.1998</td>
        </tr>
        <tr>
          <td>1.0.1</td>
          <td>
            Added support to launch game lobby function in LoginRequest and
            LoginRequestForFun
          </td>
          <td> 2019/08/30</td>
        </tr>
        <tr>
          <td>1.0.2</td>
          <td>
            Seamless wallet PlaceBet, PlayerWin, PlayerLost and PlaceBetCancel
            contains timestamp Seamless wallet PlaceBet contains IP
          </td>
          <td>2020/03/25</td>
        </tr>
        <tr>
          <td>1.0.3</td>
          <td>Added GameID as a query parameter in GetSlotDetailsURL</td>
          <td> 2020/08/27</td>
        </tr>
      </table>
      <h1>3. API Calling Restriction Information</h1>
      <h5>The following APIs have calling restriction.</h5>
      <table>
        <tr>
          <th>Name of API</th>
          <th>Frequency of Calls</th>
        </tr>
        <tr>
          <td>GetAllBetDetails</td>
          <td> Every 5 minutes no more than 5 calls </td>
        </tr>
        <tr>
          <td>GetAllBetDetailsForTimeInterval</td>
          <td>Every 5 minutes no more than 5 calls</td>
        </tr>
        <tr>
          <td>JackpotQuery</td>
          <td>Every 1 minute no more than 1 call</td>
        </tr>
      </table>
    </div>
  );
};

export default ApiDocument;
