import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../CommonPage/Preloader";
import TopBar from "../CommonPage/TopBar";
import SideBar from "../CommonPage/SideBar";
import ToggleNavBar from "../CommonPage/ToggleNavBar";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// React Quill
var toolbarOptions = [
  ["bold", "italic", "underline"],
  [{ list: "ordered" }],
  [{ align: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  ["table"], // Corrected to use "table" as a string
  [{ script: "sub" }, { script: "super" }],
  [{ color: [] }, { background: [] }],
];
const UserProfile = () => {
  const baseUrl = window.location.origin;
  const [imgs, setImgs] = useState("");
  const [data, setData] = useState(true);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}admin?stage=byId&id=8`);

        if (response.data && response.data.message) {
          const { FirstName, LastName, img } = response.data.message;

          if (img === undefined) {
            const fname = FirstName || '';
            const lname = LastName || '';
            const firstInitials = (fname.charAt(0).toUpperCase()) + (lname.charAt(0).toUpperCase());
            setImgs(firstInitials);
            console.log(firstInitials);
          }

          setData(response.data.message);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div id="layout" className="">
        <Preloader />
        <div id="wrapper">
          <TopBar />
          <SideBar />
          <div id="main-content">
            <div className="container-fluid">
              <div className="block-header py-lg-4 py-3">
                <div className="row g-3">
                  <div className="col-md-6 col-sm-12">
                    <h2 className="m-0 fs-5">
                      <ToggleNavBar />
                      Profile
                    </h2>
                    <ul className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to="/dashboard">sLEAP</Link>
                      </li>
                      <li className="breadcrumb-item active">My Profile</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-12 text-md-end">
                    <div className="d-inline-flex text-start">
                      <div className="me-2">
                        <h6 className="mb-0">
                          <i className="fa fa-user"></i> 405
                        </h6>
                        <small>Users</small>
                      </div>
                      <span id="bh_visitors"></span>
                    </div>
                    <div className="d-inline-flex text-start ms-lg-3 me-lg-3 ms-1 me-1">
                      <div className="me-2">
                        <h6 className="mb-0">
                          <i className="fa fa-globe"></i> 83
                        </h6>
                        <small>Providers</small>
                      </div>
                      <span id="bh_visits"></span>
                    </div>
                    <div className="d-inline-flex text-start">
                      <div className="me-2">
                        <h6 className="mb-0">
                          <i className="fa fa-comments"></i> 7
                        </h6>
                        <small>New Request</small>
                      </div>
                      <span id="bh_chats"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-lg-4 col-md-12">
                  <div className="card mb-3 profile-header">
                    <div className="card-body text-center">
                      <div className="profile-image mb-3">
                        {(imgs === "") ? (
                          <img src={baseUrl + "/nav.jpg"} className="rounded-circle" alt="" />
                        ) : (
                          <div className="noimg">{imgs}</div>
                        )}
                      </div>
                      <div>
                        <h4 className=""><strong>Jessica</strong> Doe</h4>
                        <span>Washington, d.c.</span>
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-primary">Follow</button>
                        <button className="btn btn-outline-secondary">Message</button>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-3">
                    <div className="card-header">
                      <h6 className="card-title">Info</h6>
                      <ul className="header-dropdown">
                        <li className="dropdown">
                          <a href="" className="dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);">Another Action</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);">Something else</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <small className="text-muted">Address: </small>
                      <p>{data.Add}</p>
                      <hr />
                      <small className="text-muted">Email address: </small>
                      <p>{data.E_mail}</p>
                      <hr />
                      <small className="text-muted">Mobile: </small>
                      <p>{data.PhoneNumber}</p>
                      <hr />
                      <small className="text-muted">Birth Date: </small>
                      <p className="">{data.DOB}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation"><a className="nav-link active" id="Overview-tab" data-bs-toggle="tab" href="#Overview" role="tab">Overview</a></li>
                        <li className="nav-item" role="presentation"><a className="nav-link" id="Settings-tab" data-bs-toggle="tab" href="#Settings" role="tab">Settings</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-content p-0" id="myTabContent">
                    <div className="tab-pane fade show active" id="Overview">
                      <div className="card mb-3">
                        <div className="card-header custom-headerType2"><h3 className="p-0 m-0">Add Todo</h3></div>
                        <div className="card-body">
                          <div className="mb-3">
                            <ReactQuill
                              theme="snow"
                              name="pagetitlec"
                              // onChange={handleTemplateData}
                              id="pageTitle"
                              modules={{ toolbar: toolbarOptions }}
                            ></ReactQuill>
                          </div>
                          <div className="post-toolbar-b">
                            <button className="btn btn-primary">Post</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Settings">
                      <form className="tw-w-full">
                        <div className="card mb-3">
                          <div className="card-body">
                            <h6 className="card-title">Basic Information</h6>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="mb-3">
                                  <input type="text" className="form-control" value={data?.FirstName} placeholder="First Name" />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control" value={data?.MiddleName} placeholder="Middle Name" />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control" value={data?.LastName} placeholder="Last Name" />
                                </div>
                                <div className="mb-3">
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Active"
                                      value={data?.Active}
                                      
                                  
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="primary"
                                    >
                                      Male
                                    </label>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Active"
                                      value={data?.Active}
                                      
                                  
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="primary"
                                    >
                                      Female
                                    </label>
                                  </div>
                                  <div className="form-check form-switch">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="Active"
                                      value={data?.Active}
                                      
                                  
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="primary"
                                    >
                                      Other
                                    </label>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text"><i
                                        className="fa fa-calendar"></i></span>
                                    </div>
                                    <input data-provide="datepicker" data-date-autoclose="true" value={data?.FirstName}
                                      className="form-control" placeholder="Birthdate" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="mb-3">
                                  <input type="text" className="form-control"
                                    placeholder="Address Line 1" value={data?.AddressLine1} />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control"
                                    placeholder="Address Line 2" value={data?.AddressLine2} />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control" placeholder="City" value={data?.City}  />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control"
                                    placeholder="State/Province" value={data?.County} />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control"
                                    placeholder="State/Province" value={data?.Country} />
                                </div>
                              </div>
                            </div>
                            <button type="button" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                            <button type="button" className="btn btn-secondary">Cancel</button>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <h6 className="card-title">Account Data</h6>
                                <div className="mb-3">
                                  <input type="text" className="form-control" value={data?.SystemLogin} disabled placeholder="Username" />
                                </div>
                                <div className="mb-3">
                                  <input type="email" className="form-control" value={data?.E_mail} placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                  <input type="text" className="form-control" value={data?.PhoneNumber}  placeholder="Phone Number" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <h6 className="card-title">Change Password</h6>
                                <div className="mb-3">
                                  <input type="password" className="form-control" placeholder="Current Password" />
                                </div>
                                <div className="mb-3">
                                  <input type="password" className="form-control" placeholder="New Password" />
                                </div>
                                <div className="mb-3">
                                  <input type="password" className="form-control" placeholder="Confirm New Password" />
                                </div>
                              </div>
                            </div>
                            <button type="button" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                            <button className="btn btn-secondary">Cancel</button>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-body">
                            <h6 className="card-title">General Information</h6>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="mb-3">
                                  As Per Requirement.
                                </div>
                              </div>
                            </div>
                            <button type="button" className="btn btn-primary">Update</button> &nbsp;&nbsp;
                            <button className="btn btn-secondary">Cancel</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <div className="card mb-3">
                    <ul className="row text-center list-unstyled mb-0">
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-camera fa-2x"></i>
                          <h5 className="mb-0">2365</h5>
                          <small>Shots View</small>
                        </div>
                      </li>
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-thumbs-o-up fa-2x"></i>
                          <h5 className="mb-0">1203</h5>
                          <small>Likes</small>
                        </div>
                      </li>
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-comments-o fa-2x"></i>
                          <h5 className="mb-0">324</h5>
                          <small>Comments</small>
                        </div>
                      </li>
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-user fa-2x"></i>
                          <h5 className="mb-0">1980</h5>
                          <small>Profile Views</small>
                        </div>
                      </li>
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-desktop fa-2x"></i>
                          <h5 className="mb-0">251</h5>
                          <small>Website View</small>
                        </div>
                      </li>
                      <li className="col-lg-6 col-6">
                        <div className="card-body">
                          <i className="fa fa-file-text text-warning fa-2x"></i>
                          <h5 className="mb-0">52</h5>
                          <small>Attachment</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row g-3 text-center">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-center" id="Events"></div>
                          <h6>Events</h6>
                          <span>12 of this month</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-center" id="Birthday"></div>
                          <h6>Birthday</h6>
                          <span>4 of this month</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-center" id="Conferences"></div>
                          <h6>Conferences</h6>
                          <span>8 of this month</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex justify-content-center" id="Seminars"></div>
                          <h6>Seminars</h6>
                          <span>2 of this month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
