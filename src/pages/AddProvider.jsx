import { useState } from "react";
import axios from "axios";

const AddProvider = () => {

  const [formValues, setFormValues] = useState({
    ID: "0",
    ProviderID: "",
    PartnerID: "",
    BaseURL: "",
    FromName: "",
    Username: "",
    Password: "",
    VendorCode: "",
    ApiKey: "",
    SecretKey: "",
    AccountSID: "",
    AuthToken: "",
    Status: "true",
    CreatedBy: "",
    CreatedWhen: "",
    UpdatedBy: "",
  });

  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues); 
    var data = formValues
    let config = {
      method: "post",
      url: "http://c4f2.acsight.com:7770/api/system/add-partner-sms-provider",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjBGQ0Y0N0E5NzVDQzJCNTdEQTdFRkFGQUM2MTkxOUUyIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NTY0NjkzMTEsImV4cCI6MTY1NjQ3MjkxMSwiaXNzIjoiaHR0cDovL2M0ZjIuYWNzaWdodC5jb206NzcxMCIsImF1ZCI6InNjb3BlLmZ1bGxhY2Nlc3MiLCJjbGllbnRfaWQiOiJDbGllbnRJZFdpdGhGdWxsQWNjZXNzIiwic3ViIjoiUGFydG5lciM4IiwiYXV0aF90aW1lIjoxNjU2NDY5MzExLCJpZHAiOiJsb2NhbCIsIlVzZXJJRCI6IjgiLCJVc2VyVHlwZSI6IlBhcnRuZXIiLCJQYXJ0bmVySUQiOiI1IiwiQ2xpZW50SUQiOiIwIiwiREJUeXBlIjoiMCIsIlNlcnZlciI6IiIsIkRhdGFiYXNlIjoiIiwiVXNlcm5hbWUiOiIiLCJQYXNzd29yZCI6IiIsImp0aSI6IkY0QzFCMjIyQURDOTk0NzEzODg2N0ZFMkVDN0Q1QjI3IiwiaWF0IjoxNjU2NDY5MzExLCJzY29wZSI6WyJzY29wZS5mdWxsYWNjZXNzIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.D8XI_tN48CZhOBoPm5hl1xlnvsd7yTAfX1wmoXKMHQnksYPjWrBhLLJkzma8u18OQj6fDU2zmWFCsq992pEb_t1ox8wGlnWYIW7TZv2SBSSLNokcyEFbTOuj2ADcaD4hVSFwvadInXg4qAAoS2_6GNWqHLv8dQqBN4lSHm6vALndhTZoHk_GhOQh_7rzdYDIz4nCALDWOViyfB13DYlNW6f7YiMH1Q9qnS3SJ5-1-XgCi4e3s0QFnqmxKFOggbYIMDn0wj3pvN7f9X4sjdd5Q63prnGMIG9XuPW3__6Ssrry5javzXnPAjFjicmRftzSV0Ep18RF2vIuSOA2HEQ_wQ",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });

    // console.log(formValues);
  };

  return (
    <div className="container-fluid w-50 p-5 bg-secondary mt-5 rounded-2">
      <header>
        <h1 className="text-success text-center m-2 bg-warning ">
          Add Provider Page
        </h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="ID"
              placeholder="ID"
              value={formValues.ID}
              onChange={handleFormValues}
            />
          </div>
          <div className="mb-3">
            <select
              className="form-control"
              defaultValue="Seçiniz"
              onChange={(e) =>
                setFormValues({ ...formValues, ProviderID: e.target.value })
              }
            >
              <option disabled>Seçiniz</option>
              <option value="1">PostaGuvercini</option>
              <option value="2">MobilDev</option>
              <option value="3">JetSMS</option>
              <option value="4">MailJet</option>
              <option value="5">Twilio</option>
              <option value="6">InfoBip</option>
              <option value="7">Vonage</option>
            </select>
            <input
              type="text"
              className="form-control"
              id="ProviderID"
              placeholder="ProviderID"
              value={formValues.ProviderID}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="PartnerID"
              placeholder="PartnerID"
              value={formValues.PartnerID}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="BaseURL"
              placeholder="BaseURL"
              value={formValues.BaseURL}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="FromName"
              placeholder="FromName"
              value={formValues.FromName}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="Username"
              placeholder="Username"
              value={formValues.Username}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="Password"
              placeholder="Password"
              value={formValues.Password}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="VendorCode"
              placeholder="VendorCode"
              value={formValues.VendorCode}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="ApiKey"
              placeholder="ApiKey"
              value={formValues.ApiKey}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="SecretKey"
              placeholder="SecretKey"
              value={formValues.SecretKey}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="AccountSID"
              placeholder="AccountSID"
              value={formValues.AccountSID}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="AuthToken"
              placeholder="AuthToken"
              value={formValues.AuthToken}
              onChange={handleFormValues}
            />
          </div>
          <div className="">
            <input
              type="text"
              className="form-control"
              id="Status"
              placeholder="Status"
              value={formValues.Status}
              onChange={(e) =>
                setFormValues({ ...formValues, Status: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default AddProvider;
