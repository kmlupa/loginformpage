import React from "react";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { FaAtlassian } from "react-icons/fa";

function NavScrollExample(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <AiFillDingtalkCircle size="30px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <span className="input-group-text bg-primary" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="primary"
                  className="bi bi-search "
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </form>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Production
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dying
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Recipes
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Cow
                </a>
              </li>
            </ul>
            <div
              style={{
                display: "flex",
        
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
             
                <FaAtlassian size="30px" onClick={()=>props.handleclick()} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavScrollExample;
