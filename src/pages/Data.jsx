// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Data = () => {

//   const [veri, setVeri] = useState([]);

//   useEffect(() => {
//     var config = {
//       method: 'get',
//       url: 'http://c4f2.acsight.com:7770/api/system/sms-provider-list',
//       headers: { 
//         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBGQ0Y0N0E5NzVDQzJCNTdEQTdFRkFGQUM2MTkxOUUyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTY0Mjg4NjcsImV4cCI6MTY1NjQzMjQ2NywiaXNzIjoiaHR0cDovL2M0ZjIuYWNzaWdodC5jb206NzcxMCIsImF1ZCI6InNjb3BlLmZ1bGxhY2Nlc3MiLCJjbGllbnRfaWQiOiJDbGllbnRJZFdpdGhGdWxsQWNjZXNzIiwic3ViIjoiUGFydG5lciM4IiwiYXV0aF90aW1lIjoxNjU2NDI4ODY3LCJpZHAiOiJsb2NhbCIsIlVzZXJJRCI6IjgiLCJVc2VyVHlwZSI6IlBhcnRuZXIiLCJQYXJ0bmVySUQiOiI1IiwiQ2xpZW50SUQiOiIwIiwiREJUeXBlIjoiMCIsIlNlcnZlciI6IiIsIkRhdGFiYXNlIjoiIiwiVXNlcm5hbWUiOiIiLCJQYXNzd29yZCI6IiIsImp0aSI6IjhERjZEODA0RDgyRTM0QkYwQjBCQTNCNjcyNDU4N0QxIiwiaWF0IjoxNjU2NDI4ODY3LCJzY29wZSI6WyJzY29wZS5mdWxsYWNjZXNzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.c9LOZz9eq0Jd2xQtDgc6sYtsl_XXTGGHYTdmiN5JE7xtidDlOnP38TPpuJBIcKb64IiOH5pO0tFnC36zww_1DjL-1htRj_fH375zQx_W8Wub51nzAY5YO4J8d7-S-SMoS3omAnVZ3hfmXm37GmJEod0pquwp8KiRtFu8BUPLU--ebOwn13O9IS2iXQBXer6zOMXhk0RlrSJnMUPd9KX1dVvJS-HLSDGJv_2VsSrXusZHsea6UppAtUrOZOyrxI7XYTJVZZYQhH7Sx372AvStOOfiNYzlQfCqaN0gzmF0KRSMVYvGrRMJo8mTcgnrh8CwQHN8AWZa3p7rFao7zZ0aMw', 
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }      
//     };

//     axios(config)
//       .then((response) => {
//         console.log(response.data.data.partnerProviders);
//         let res = response.data.data.partnerProviders;
//         setVeri(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   //   console.log(veri);
//   return (
//     <div className="container">
//       <p>Data List</p>
//       {veri?.map((item) => {
//         return (
          
//           <ul key={item.id}>
//             <li>{item.providerID}</li>     
//             <li>{item.partnerID}</li>
//             <li>{item.baseURL}</li>     
//             <li>{item.fromName}</li>
//             <li>{item.username}</li>
//             <li>{item.password}</li>
//             <li>{item.vendorCode}</li>            
//             <li>{item.apiKey}</li>
//             <li>{item.secretKey}</li>
//             <li>{item.accountSID}</li>
//             <li>{item.authToken}</li>
//             <li>{item.status}</li>            
//             <li>{item.createdbY}</li>
//             <li>{item.createdWhen}</li>
//             <li>{item.updatedBy}</li>
//             <li>{item.updatedWhen}</li>
//           </ul>
//         );
//       })}
//     </div>
//   );
// };

// export default Data;
