import React from "react";
// import "../colors/color1.css";
// import "../colors/color1.scss";

const ScoreMaster = () => {
  function show1(str) {
    document.getElementById("add-industry-btn").style.display = "block";
    document.getElementById("view-list-btn").style.display = "none";
    document.getElementById("view-list").style.display = "block";
    document.getElementById("add-form").style.display = "none";
  }
  function show(str) {
    document.getElementById("add-industry-btn").style.display = "none";
    document.getElementById("view-list-btn").style.display = "block";
    document.getElementById("add-form").style.display = "block";
    document.getElementById("view-list").style.display = "none";
  }
  return (
    <>
      <div className="app sidebar-mini ltr light-mode">
        {/* <!-- GLOBAL-LOADER --> */}
        {/* <div id="global-loader">
          <img src="assets/images/loader.svg" className="loader-img" alt="Loader" />
        </div> */}
        {/* <!-- /GLOBAL-LOADER --> */}

        {/* <!-- PAGE --> */}
        <div className="page">
          <div className="page-main">
            {/* <!-- app-Header --> */}

            {/* <!-- /app-Header --> */}

            {/* <!--APP-SIDEBAR--> */}

            {/* <!--/APP-SIDEBAR--> */}

            {/* <!--app-content open--> */}
            <div class="main-content app-content mt-0">
              <div class="side-app">
                {/* <!-- CONTAINER --> */}
                <div class="main-container container-fluid">
                  {/* <!-- PAGE-HEADER --> */}
                  <div class="page-header">
                    <div>
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="index.html">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                          <a href="index.html">Master</a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          {" "}
                          Score
                        </li>
                      </ol>
                    </div>
                    <div class="ms-auto pageheader-btn">
                      <button
                        class="btn btn-primary pull-right"
                        id="add-industry-btn"
                        onClick={show}
                      >
                        <i class="fa fa-plus-circle me-1"></i>Create New
                      </button>
                      <button
                        class="btn btn-primary  pull-right"
                        id="view-list-btn"
                        onClick={show1}
                        style={{ display: "none" }}
                      >
                        <i class="fa fa-angle-double-left  me-1"></i> Back to
                        List
                      </button>
                    </div>
                  </div>
                  {/* <!-- PAGE-HEADER END --> */}
                  <div class="card" id="view-list">
                    <div class="card-header bg-primary text-white">
                      <h3 class="card-title col-md-10">
                        <i class="fa fa-list me-2"></i> Score List
                      </h3>
                    </div>

                    <div class="card mb-0">
                      <div class="card-header bg-success-transparent">
                        <h4 class="card-title col-md-9">
                          <i class="fa fa-filter me-2"></i> Search Filters
                        </h4>
                        <div class="input-group col-md-3 p-0">
                          <input
                            type="text"
                            class="form-control "
                            placeholder="Search for..."
                          />
                          <span class="input-group-text btn btn-primary">
                            Go!
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="table-responsive">
                      <table class="table table-bordered border-bottom text-nowrap">
                        <thead class="bg-gray">
                          <tr>
                            <th class="w-5 border-bottom-0 text-white">SNo.</th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Score Abbr.
                            </th>
                            <th class="wd-15p border-bottom-0 text-white">
                              Score Name{" "}
                            </th>
                            <th class="w-10 border-bottom-0 text-white text-center">
                              Status
                            </th>
                            <th class="w-10 border-bottom-0 text-white text-center">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-center">1</td>
                            <td></td>
                            <td>Score</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">2</td>
                            <td></td>
                            <td>Score</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">3</td>
                            <td></td>
                            <td>Score</td>
                            <td class="text-center">
                              <span class="badge bg-success">Active</span>
                            </td>
                            <td class="text-center">
                              <a class="btn btn-info action_btn" href="#">
                                <i class="fa fa-unlock fa-sm"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <!--------------START add Industry Type Form-----------------> */}
                  <div id="add-form" style={{ display: "none" }}>
                    <div class="card">
                      <div class="card-header bg-primary text-white">
                        <h3 class="card-title col-md-10">
                          <i class="fa fa-plus-circle me-2"></i>Create Score
                        </h3>
                      </div>
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-4">
                            <label class="form-label">
                              Score Code<span class="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Score Code"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="form-label">
                              Score Name<span class="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Score Name"
                            />
                          </div>

                          <div class="col-md-2">
                            <label class="form-label">
                              Is-Active<span class="text-red">*</span>
                            </label>
                            <input type="checkbox" class="cc-checkbox" />
                          </div>
                        </div>
                      </div>
                      <div class="card-footer bg-default m-0">
                        <button class="btn btn-default pull-right">
                          <i class="fa fa-times me-1 text-dark"></i>Close
                        </button>
                        <button class="btn btn-primary pull-right me-2">
                          {" "}
                          <i class="fa fa-floppy-o me-1"></i> Save
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!--------------END add Industry Type Form-----------------> */}
                </div>

                {/* <!-- End Row --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!--app-content end--> */}

        {/* <!-- FOOTER --> */}

        {/* <!-- FOOTER END --> */}

        {/* <!-- BACK-TO-TOP --> */}
        <a href="#top" id="back-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
        {/*<!-- JQUERY JS -->
    <script src="assets/js/jquery.min.js"></script>

    <!-- BOOTSTRAP JS -->
    <script src="assets/plugins/bootstrap/js/popper.min.js"></script>
    <script src="assets/plugins/bootstrap/js/bootstrap.min.js"></script>

    <!-- SPARKLINE JS-->
    <script src="assets/js/jquery.sparkline.min.js"></script>

    <!-- CHART-CIRCLE JS-->
    <script src="assets/js/circle-progress.min.js"></script>

    <!-- CHARTJS CHART JS-->
    <script src="assets/plugins/chart/Chart.bundle.js"></script>
    <script src="assets/plugins/chart/utils.js"></script>

    <!-- PIETY CHART JS-->
    <script src="assets/plugins/peitychart/jquery.peity.min.js"></script>
    <script src="assets/plugins/peitychart/peitychart.init.js"></script>

    <!-- INTERNAL SELECT2 JS -->
    <script src="assets/plugins/select2/select2.full.min.js"></script>

    <!-- INTERNAL Data tables js-->
    <script src="assets/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="assets/plugins/datatable/js/dataTables.bootstrap5.js"></script>
    <script src="assets/plugins/datatable/dataTables.responsive.min.js"></script>

    <!-- ECHART JS-->
    <script src="assets/plugins/echarts/echarts.js"></script>

    <!-- SIDE-MENU JS-->
    <script src="assets/plugins/sidemenu/sidemenu.js"></script>

    <!-- Sticky js -->
    <script src="assets/js/sticky.js"></script>

    <!-- SIDEBAR JS -->
    <script src="assets/plugins/sidebar/sidebar.js"></script>

    <!-- Perfect SCROLLBAR JS-->
    <script src="assets/plugins/p-scroll/perfect-scrollbar.js"></script>
    <script src="assets/plugins/p-scroll/pscroll.js"></script>
    <script src="assets/plugins/p-scroll/pscroll-1.js"></script>

    <!-- APEXCHART JS -->
    <script src="assets/js/apexcharts.js"></script>

    <!-- INDEX JS -->
    <script src="assets/js/index1.js"></script>

    <!-- Color Theme js -->
    <script src="assets/js/themeColors.js"></script>

    <!-- CUSTOM JS -->
    <script src="assets/js/custom.js"></script> */}
      </div>
    </>
  );
};

export default ScoreMaster;
