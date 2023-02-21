import React from "react";
import { CgArrowLongLeft, CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { FaBrain } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { TbFileReport } from "react-icons/tb";
import { GiTakeMyMoney, GiReceiveMoney, SiWebmoney } from "react-icons/gi";

const Sidebar = () => {
  const [toggle, setToggle] = React.useState(false);
  const [show, setShow] = React.useState("See all");
  const handleClick = () => {
    if (toggle === true) {
      setToggle(false);
      setShow("See all");
    } else {
      setToggle(true);
      setShow("See less");
    }
  };

  return (
    <>
      <div className="card border-2 border-primary ">
        <div className="card-body">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <CgProfile size="30px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                <b>Farzan Mirza</b>
              </h5>
            </div>
          </div>
          <div
            className="mt-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <IoMdNotificationsOutline size="30px" color="blue" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5
                className="offcanvas-title text-primary"
                id="offcanvasExampleLabel"
              >
                <b>Notifications</b>{" "}
              </h5>
            </div>
          </div>
          <hr />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginTop: "-15px" }}>
              <ImHome3 size="15px" />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <p style={{ fontSize: "10px" }}>
                Mirza Internation added a new documents of Buffcow T1 Color
                Brown Invoice
                <span className="text-primary"> 45 minutes ago</span>
              </p>
            </div>
          </div>
          <div
            className="mt-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <FaBrain size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ fontSize: "10px" }}>
                Mirza Internation added a new documents of Buffcow T1 Color{" "}
                <span className="text-primary"> 45 minutes ago</span>
              </p>
            </div>
          </div>
          <div
            className="mt-2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <IoMdSettings size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <p style={{ fontSize: "10px" }}>
                Mirza Internation added a new{" "}
                <span className="text-primary"> 45 minutes ago</span>
              </p>
            </div>
          </div>
          {toggle ? (
            <div
              className="mt-2"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ marginTop: "-15px" }}>
                <ImHome3 size="15px" />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <p style={{ fontSize: "10px" }}>
                  Mirza Internation added a new documents of Buffcow T1 Color
                  Brown Invoice{" "}
                  <span className="text-primary"> 45 minutes ago</span>
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
          <span>
            <p
              style={{ marginLeft: "122px", fontSize: "10px" }}
              onClick={handleClick}
            >
              {show}
            </p>
          </span>
          <div
            className="mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <GrUserSettings size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5
                className="offcanvas-title text-primary"
                id="offcanvasExampleLabel"
              >
                <b>Production</b>{" "}
              </h5>
            </div>
          </div>
          <hr />

          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <GiReceiveMoney size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5
                className="offcanvas-title text-Dark"
                id="offcanvasExampleLabel"
              >
                <b>Money</b>
              </h5>
            </div>
          </div>
          <div
            className="mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <GiTakeMyMoney size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5
                className="offcanvas-title text-Dark"
                id="offcanvasExampleLabel"
              >
                <b>Finance</b>
              </h5>
            </div>
          </div>
          <div
            className="mt-3"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <TbFileReport size="15px" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <h5
                className="offcanvas-title text-Dark"
                id="offcanvasExampleLabel"
              >
                <b>Reports</b>
              </h5>
            </div>
          </div>
          <div>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div
                    className="mt-3"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div>
                      <GiTakeMyMoney size="15px" />
                    </div>
                    <div style={{ marginLeft: "15px" }}>
                      <h5
                        className="offcanvas-title text-Dark"
                        id="offcanvasExampleLabel"
                      >
                        <b>Finance</b>
                      </h5>
                    </div>
                  </div>
                </div>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    style={{ width: "2px", height: "5px", borderStyle: "none" }}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span>
                      <b>See More</b>{" "}
                    </span>
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
