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
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBGQ0Y0N0E5NzVDQzJCNTdEQTdFRkFGQUM2MTkxOUUyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTY0NjkzMTEsImV4cCI6MTY1NjQ3MjkxMSwiaXNzIjoiaHR0cDovL2M0ZjIuYWNzaWdodC5jb206NzcxMCIsImF1ZCI6InNjb3BlLmZ1bGxhY2Nlc3MiLCJjbGllbnRfaWQiOiJDbGllbnRJZFdpdGhGdWxsQWNjZXNzIiwic3ViIjoiUGFydG5lciM4IiwiYXV0aF90aW1lIjoxNjU2NDY5MzExLCJpZHAiOiJsb2NhbCIsIlVzZXJJRCI6IjgiLCJVc2VyVHlwZSI6IlBhcnRuZXIiLCJQYXJ0bmVySUQiOiI1IiwiQ2xpZW50SUQiOiIwIiwiREJUeXBlIjoiMCIsIlNlcnZlciI6IiIsIkRhdGFiYXNlIjoiIiwiVXNlcm5hbWUiOiIiLCJQYXNzd29yZCI6IiIsImp0aSI6IkY0QzFCMjIyQURDOTk0NzEzODg2N0ZFMkVDN0Q1QjI3IiwiaWF0IjoxNjU2NDY5MzExLCJzY29wZSI6WyJzY29wZS5mdWxsYWNjZXNzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.D8XI_tN48CZhOBoPm5hl1xlnvsd7yTAfX1wmoXKMHQnksYPjWrBhLLJkzma8u18OQj6fDU2zmWFCsq992pEb_t1ox8wGlnWYIW7TZv2SBSSLNokcyEFbTOuj2ADcaD4hVSFwvadInXg4qAAoS2_6GNWqHLv8dQqBN4lSHm6vALndhTZoHk_GhOQh_7rzdYDIz4nCALDWOViyfB13DYlNW6f7YiMH1Q9qnS3SJ5-1-XgCi4e3s0QFnqmxKFOggbYIMDn0wj3pvN7f9X4sjdd5Q63prnGMIG9XuPW3__6Ssrry5javzXnPAjFjicmRftzSV0Ep18RF2vIuSOA2HEQ_wQ",
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
                <TableCell className="bg-warning">partnerID</TableCell>
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
                    <TableCell>{item.providerID}</TableCell>
                    <TableCell>{item.partnerID}</TableCell>
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
