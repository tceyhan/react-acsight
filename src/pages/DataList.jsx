import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const DataList = () => {
  const [veri, setVeri] = useState([]);

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://c4f2.acsight.com:7770/api/system/sms-provider-list",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBGQ0Y0N0E5NzVDQzJCNTdEQTdFRkFGQUM2MTkxOUUyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTY0OTk4NDAsImV4cCI6MTY1NjUwMzQ0MCwiaXNzIjoiaHR0cDovL2M0ZjIuYWNzaWdodC5jb206NzcxMCIsImF1ZCI6InNjb3BlLmZ1bGxhY2Nlc3MiLCJjbGllbnRfaWQiOiJDbGllbnRJZFdpdGhGdWxsQWNjZXNzIiwic3ViIjoiUGFydG5lciM4IiwiYXV0aF90aW1lIjoxNjU2NDk5ODQwLCJpZHAiOiJsb2NhbCIsIlVzZXJJRCI6IjgiLCJVc2VyVHlwZSI6IlBhcnRuZXIiLCJQYXJ0bmVySUQiOiI1IiwiQ2xpZW50SUQiOiIwIiwiREJUeXBlIjoiMCIsIlNlcnZlciI6IiIsIkRhdGFiYXNlIjoiIiwiVXNlcm5hbWUiOiIiLCJQYXNzd29yZCI6IiIsImp0aSI6IkRBNTc4NjUyMTAwODIxRTNDMzU0QzU1RjEzMjQwOEJGIiwiaWF0IjoxNjU2NDk5ODQwLCJzY29wZSI6WyJzY29wZS5mdWxsYWNjZXNzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.FI76Ngom5c9Bi67yMZxvqJVTkIXCPJgGK9TKZhizOEy8TfDDoMkJuKPmeV6iSmQ0EL3mImAZy2EX-aQ-fBuYF254l1remNZ6xbf2gB2N0zJrF6qySLFiV2HcROWK3g-7goKsG_IbglSVnyY9efFiwVcX3PKNuqSOBqDw7DRcr53EDgTtrJH8VPOPiH0ukcqoTIQZnmpYavn1w0zi_Q_wRfA-W_369iJddYByorIr6ZqKsSniO6XgxTamlTwOlF1t7ex31ogDcVI_ZHgkWm5z8lsGgnFk0YEe-jzSdggTLcr6NHyttURQLUf6EFbWPwkT6fPgxy8wJXNt3BdnJGZuSg",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.data.partnerProviders);
        let res = response.data.data.partnerProviders;
        setVeri(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function renderSwitch(providerID) {
    switch (providerID) {
      case 1:
        return "PostaGuvercini";
        break;
      case 2:
        return "MobilDev";
        break;
      case 3:
        return "JetSMS";
        break;
      case 4:
        return "MailJet";
        break;
      case 5:
        return "Twilio";
        break;
      case 6:
        return "InfoBip";
        break;
      case 7:
        return "Vonage";
        break;
    }
  }
  console.log(veri);
  return (
    <div>
      <header>
        <h1 className="text-dark text-center m-2 bg-info rounded-2">
          Data List
        </h1>
      </header>
      <main className="m-5">
        <TableContainer>
          <Table className="table-bordered">
            <TableHead>
              <TableRow>
                <TableCell className="bg-warning">providerID</TableCell>
                {/* <TableCell className="bg-warning">partnerID</TableCell> */}
                <TableCell className="bg-warning">BaseURL</TableCell>
                <TableCell className="bg-warning">fromName</TableCell>
                <TableCell className="bg-warning">username</TableCell>
                <TableCell className="bg-warning">password</TableCell>
                <TableCell className="bg-warning">vendorCode</TableCell>
                <TableCell className="bg-warning">apiKey</TableCell>
                <TableCell className="bg-warning">secretKey</TableCell>
                <TableCell className="bg-warning">accountSID</TableCell>
                <TableCell className="bg-warning">authToken</TableCell>
                <TableCell className="bg-warning">status</TableCell>
                <TableCell className="bg-warning">updatedWhen</TableCell>
              </TableRow>
            </TableHead>
            {veri?.map((item) => {
              return (
                <TableBody key={item.id}>
                  <TableRow>
                    <TableCell>{renderSwitch(item.providerID)}</TableCell>
                    {/* <TableCell>{item.partnerID}</TableCell> */}
                    <TableCell>{item.baseURL}</TableCell>
                    <TableCell>{item.fromName}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.password}</TableCell>
                    <TableCell>{item.vendorCode}</TableCell>
                    <TableCell>{item.apiKey}</TableCell>
                    <TableCell>{item.secretKey}</TableCell>
                    <TableCell>{item.accountSID}</TableCell>
                    <TableCell>{item.authToken}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.updatedWhen}</TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </main>
    </div>
  );
};

export default DataList;
