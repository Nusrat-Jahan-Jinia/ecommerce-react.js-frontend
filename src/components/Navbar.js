import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import logo from "../logo.jpg";

export default class Navbar extends Component {
  render() {
    return (
      <div className="flex bg-blue-500 h-32 items-center">
        <div className="flex pl-20 w-2/4">
          <Link to="/">
            <img className="w-30 h-24 rounded-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex w-2/4">
          <nav>
            <ul className="flex ">
              <li className="text-2xl font-semibold px-7">
                <Link to="/">Home</Link>
              </li>
              <li className="text-2xl font-semibold px-7">
                <Link to="/articles">Articles</Link>
              </li>
              <li className="text-2xl font-semibold px-7">
                <Link to="/users">Users</Link>
              </li>
              <li className="text-2xl font-semibold px-7">
                <Link to="/carts">Carts</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
