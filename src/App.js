import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./components/Logo";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import Slider from "./components/Slider";
import TopBrands from "./components/TopBrands";
import Mobile from './Mobile';
import Best from './Best'
import Electronics from './Electronics'
import Baby from './Baby'
import Footer from './Footer'
import Project1 from './Project1'
import Tabs from './Tabs'




function App() {
  return (
    <div>
      <Logo />

      {/* <*****************************************Navbar************************************> */}
      <div className="container-fluid">
        <div className="nav-main">
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="lg"
            className="bg-navbar"
            variant="dark"
          >
            <Navbar.Brand href="#categories">
              <DehazeIcon />
            </Navbar.Brand>

            {/* <*****************************************Input Search************************************> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Form inline className="input-group input-group-md">
                <FormControl
                  type="text"
                  id="input-search"
                  placeholder="Search for Products, Brands and more.."
                  className="mr-sm-6"
                />
                <Button variant="outline-success">
                  <SearchIcon className="" />
                </Button>
              </Form>

              {/* <*****************************************B2B************************************> */}

              <Nav className="mr-auto">
                <Nav.Link className="nav-b2b" href="#businessTobusiness">
                  B2B
                </Nav.Link>

                {/* <*****************************************Sign-In************************************> */}

                <NavDropdown
                  title="Sign In"
                  id="collasible-nav-dropdown"
                  className="nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    New Customer ?
                    <ul className="nav-divider">
                      <li class="divider"></li>
                    </ul>
                    <button class="btn-signIn">Sign In</button>
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <*****************************************Cart************************************> */}

                <Nav.Link className="nav-cart" href="#goTocart">
                  <ShoppingCartIcon />
                </Nav.Link>

                {/* <*****************************************More Options************************************> */}

                <NavDropdown
                  title="More"
                  id="collasible-nav-dropdown"
                  className="more-dropdown"
                >
                  <NavDropdown.Item href="#orderDetails">
                    Order
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#notifications">
                    Notifications
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#information">
                    Contact Us
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Slider/>
        <Tabs/>
        <TopBrands/>
        <Mobile/>
        <Best/>
        <Baby/>
        <Electronics/>
        <Project1/>
        <Footer/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
