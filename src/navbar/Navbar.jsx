import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuSvg from "../assets/MenuSvg";
import { userObserver } from "../helpers/firebase";
import { logOut } from "../helpers/firebase";
import "../styles/navbar.css";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);
  //  useeffect kullanıyoruz ki currentuser ilk geldiği anda tutabilelim.
  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white">
          <h6 className="h3 text-info text-uppercase">Acsight-cloud 4 feed</h6>
        </Link>
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1rem",
              marginTop: "0.5rem",
            }}
          >
            <MenuSvg />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem className="menu" onClick={() => navigate("/")}>
              Data List
            </MenuItem>
            {currentUser ? (
              <div>
                <MenuItem className="menu" onClick={() => navigate("/update")}>
                  Update Provider
                </MenuItem>
                <MenuItem className="menu" onClick={() => navigate("/add")}>
                  Add Provider
                </MenuItem>
                <MenuItem className="menu" onClick={() => logOut()}>
                  Log Out
                </MenuItem>
              </div>
            ) : (
              <div>
                <MenuItem className="menu" onClick={() => navigate("/login")}>
                  Login
                </MenuItem>
                <MenuItem
                  className="menu"
                  onClick={() => navigate("/register")}
                >
                  Register
                </MenuItem>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
