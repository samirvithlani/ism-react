import React from "react";
import { Helmet } from "react-helmet";

export const Sidebar = () => {
  var style1 = {
    width: "250px; left: 0px; bottom: 0px",
  };
  var style2 = {
    left: "0px; width: 214px",
  };
  var style3 = {
    top: "0px; height: 362px; right: 0px",
  };
  var style4 = {
    top: "0px; height: 268px",
  };
  var style5 = {
    left: "0px; bottom: 0px;",
  };
  var style6 = {
    left: "0px; width: 0px",
  };
  var style7 = {
    top: "0px; right: 0px",
  };
  var style8 = {
    top: "0px; height: 0px",
  };

  return (
    <div>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="./assets/img/favicon.png" />

        <title>Material Dashboard 2 by Creative Tim</title>

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />

        <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />

        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="./assets/css/material-dashboard.css?v=3.0.4"
          rel="stylesheet"
        />
      </Helmet>

      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark ps bg-white"
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
            target="_blank"
          >
            <img
              src="./assets/img/logo-ct.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold text-white">
              Material Dashboard 2
            </span>
          </a>
        </div>

        <hr class="horizontal light mt-0 mb-2" />

        <div
          class="collapse navbar-collapse w-auto ps ps--active-x ps--active-y"
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="./dashboard.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">dashboard</i>
                </div>

                <span class="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./tables.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">table_view</i>
                </div>

                <span class="nav-link-text ms-1">Tables</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./billing.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">receipt_long</i>
                </div>

                <span class="nav-link-text ms-1">Billing</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./virtual-reality.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">view_in_ar</i>
                </div>

                <span class="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./rtl.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">
                    format_textdirection_r_to_l
                  </i>
                </div>

                <span class="nav-link-text ms-1">RTL</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./notifications.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">notifications</i>
                </div>

                <span class="nav-link-text ms-1">Notifications</span>
              </a>
            </li>

            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">
                Account pages
              </h6>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./profile.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">person</i>
                </div>

                <span class="nav-link-text ms-1">Profile</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./sign-in.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">login</i>
                </div>

                <span class="nav-link-text ms-1">Sign In</span>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="./sign-up.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">assignment</i>
                </div>

                <span class="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
          <div class="ps__rail-x" style={style1}>
            <div class="ps__thumb-x" tabindex="0" style={style2}></div>
          </div>
          <div class="ps__rail-y" style={style3}>
            <div class="ps__thumb-y" tabindex="0" style={style4}></div>
          </div>
        </div>

        <div class="sidenav-footer position-absolute w-100 bottom-0">
          <div class="mx-3">
            <a
              class="btn bg-gradient-primary mt-4 w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              Upgrade to pro
            </a>
          </div>
        </div>
        <div class="ps__rail-x" style={style5}>
          <div class="ps__thumb-x" tabindex="0" style={style6}></div>
        </div>
        <div class="ps__rail-y" style={style7}>
          <div class="ps__thumb-y" tabindex="0" style={style8}></div>
        </div>
      </aside>
    </div>
  );
};
