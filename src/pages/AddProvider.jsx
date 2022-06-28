import { useState } from "react";

const AddProvider = () => {
  const [formValues, setFormValues] = useState({
    ID: "",
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
    const {
      ID,
      ProviderID,
      PartnerID,
      BaseURL,
      FromName,
      Username,
      Password,
      VendorCode,
      ApiKey,
      SecretKey,
      AccountSID,
      AuthToken,
      Status,
      CreatedBy,
      CreatedWhen,
      UpdatedBy,
    } = formValues;
  };
  console.log(formValues);

  return (
    <div className="container-fluid w-50 p-5 bg-secondary mt-5 rounded-2">
      <header>
        <h1 className="text-success text-center m-2 bg-warning ">
          Add Provider Page
        </h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
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
