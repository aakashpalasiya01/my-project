import React from "react";

const Products = () => {
  return (
    <div className="App">
      <div className="topbar-wrapper">
        <div className="account-wrapper">
          <div className="account-logo-wrapper">
            <img src="assets/images/thumbnails/Logo.svg" alt="Logo" />
          </div>
        </div>
        <button className="toggle-sidebar">
          <img src="assets/images/icons/icon-menu.svg" alt="menu" />
        </button>
        <div className="user-wrapper">
          <div className="filter_wrapper d-none d-sm-block">
            <div className="filet_left_content">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                      alt="search"
                    />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control input_modify"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <ul className="head_right_cont">
            <li className="list-items ">
              <a href="#" className="top_links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAYAAABPwleqAAAABHNCSVQICAgIfAhkiAAAAalJREFUOE+dVEFOwkAU/b8NcYsnsCyExgApO9NiUm5Qb8AR6gnkBuINuAG9AU0E4g5CjSm4sN6ArZL2+1sYLGUwxknaxcy8/95/82YQJEMz7PJZvBnyks2f/6mWbqO5vy5uRRm42rAGvFBGNXYpVvuA4C8Xk/6fwLWG6SMqfrgY9/Rmu0eU2Mtgmqo4GEfMunGtMduId2m5nRGr6ITz5yiPPgBXGzcOQjIEokcExQtfxr5eb9sEiQOI3SQm++11OhcF9uAd4wyB7sJgOihKrDUtFwju2byKMG8PrtVNNga1ZTBxZCamc6kXvMcT5v2AU5MABjJWUWxrHhmCIAe21kjopH2eYs76x6QnnM+DicGdf4PZjHNZkvayM2YaseyMNPtdXpmGouJMTJ6SvTXNIkGSgfWG2SWArixFkiOLiBR3FTx5GZireafyWwSnuU/nVsGki1sHyeP4GcX4yeTvwvTOaWshJyfi5Fz81qd0DeHj+GKkShR64BS1BIjbWhdzvXc7Xzl7CJLNnAhGCigDgtjlQ6nwSRhFBdLHYNcXX34qE2D0pZZc2fl/A8rZ2D0jIxsVAAAAAElFTkSuQmCC"
                  alt="notify"
                />
                <span className="notify_num">5</span>
              </a>
            </li>
            <li className="list-items ">
              <a href="#" className="top_links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAndJREFUOE+dVE1y0zAUthQPLEl30DIT5wS4P6xrToDTlnWcE9ScIOYGvgHJmjbNDWrWtMGcIGaGhCVmS2OL79NIwQ2ZoYNm3tiSnj6973vvSThbxlM/9KSUfSVEIBzHh0sbVirHyfGdPq6qcZFPy82j8P0zPD9s37nuUCkVY/Un7AnsC+yFUOojwI/NunKUSpezybvm+TUYgX61WtfY3JFCRKquExwu8Z/WSl0/qqod7Oc4MAVQjr0Uvlwf2Cg1WAOIlHpCygJgn+uq6rqu6xFseXspdg9PQ+xfaWDXjQE6JG3s9YijwfYOT1PoQccM1jehF1jj7XRKaykDUdc+/80+ZZjCQsiSfJ9NUqHFbrXmoPPq281FZqKk0BSYwncaulA/nQxEF5Des4OTWAgxxLwrdo/OEoQbIlRS1AN0lAV/fnQWWJrcM4f78N9v+JdIUCz2Dk4yJWW2vLlINOWXb3zqRY043wTbnJvLR1oORgFtYgCSmmN1oUYPmdNH1nWEyEATYA1N/vuXdUgwCh2BFjPzT1pbaUJ3MAq0Zo4Q+eL2klW/1oy1xGw9UDMGUgqTnXNE1m1k569sWnBmn1EsZhOtqSmlOX4HwkwKphYOI5NNthXpe1tELHRipOwtPn3ITWlRJk+n3yyc81XAAm/8CmN0A5SJhz58j8P7uLDNmjP7Hfhnxr9HzdeNjkSQ92sW62q1KmxX8DJbtNA3YoODsoem56VXsDGAIh2tpWHojjA/xmKMW9m8HYC/bbwac+yN0Ys/kLSkCXQPzIKahNCRbxlHAfNgLGq2HLVkk8e2nOzZe49jM8o7KUP90ipFID0wJzCfHF2Tm+M3KNSXX4AA+9gAAAAASUVORK5CYII="
                  alt="globe"
                />
              </a>
            </li>
            <li className="list-items ">
              <a href="#" className="top_links">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABHNCSVQICAgIfAhkiAAAAq1JREFUOE+dVE1SGkEUpgdCtpNdIqmSnCADmLV4Av7MWnKC4AlCTuBwAmEt6OQEjGtByQmEqqDuwG1guvN9k26qFYNWuqprft5733vvez8i8czZKtTKUDnCdYUQ7emge/icjdik8NYrZ51k8go6E9wR7oFQ6sv08rS9ye4BqI6qpADwOoo6y1TKk0r1HSH2fg26IeRjgIU3w179Xb7aSAhRgpMwLWVrPArmxtEKVAOe6ai28SQAzxuAuHzJFGo+HH7VsiwAz5UQu/ju0NEaaCZfDaHgQuhlPn32ElHk43suHKc5vThh6vHZ2tlvCimLkPnQDYwjvK8CtCMlTyUZRbm7UWCi3ETdXyeFGh0ymOxapLooVAjsVIxi1iu7Nm8xHflqHREfG87XQN/v7BdRlDOE3pkOe43YCDQoKY/x6mmDOXg8NNXXNn3w3FBR9MNkKLRhnyng3iN9zwh1ah/hqAWHY/QpnW1D54PR0bVgsXiYZUXoNmE7NEm8TSJkioCPIr9SiPb28tQ3ujF1qVQ9odQ3OjSgce/ZgOTwdzI5swGe+mdsTEuSX4K2ITjAHSG90B5DyJjBDG1VebVYjOGE41rHd860GcHYu8ioCNkkDfoEvS8cp4wqcsZLmJLvN4Nu066unYE9prpjriH/CbsgvVz67JDHYzqC0RzVpdf40BCR0WECeyC0B8FUH6KKXY+1MX3JwjAONcfs7RlAc+a/DcrKZzmmFDKKpRDq7uLk3E6fLSil3DV9ybFl1Z8cU24dFOoI10fFswCKU0YRwtthb4/v1tLh55z7FbqkikuHNvFZRapTaeNfCfceyk1w6TIKU22zdNCL5aTjtPWGmpBzm+uXLOlrRh+huo6UAarcMt1h02K/bwSlorVD+flgjP8bNAZGcdAVLrf/v4Ds/38AyROXcTtJZLUAAAAASUVORK5CYII="
                  alt="setting"
                />
              </a>
            </li>
            <li className="list-items user_peofile">
              <div
                className="media align-items-center dropdown-toggle "
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="avtar_blc">
                  <img
                    src="data:image/png;base64,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"
                    alt="UserImage"
                  />
                </div>
                <div className="media-body">
                  <span className="user_name">
                    <h6>Charlie Howard</h6>
                    <p className="">Frontend Developer</p>
                  </span>
                  <div
                    className="dropdown-menu dropdown-menu-right animate slideIn account_info"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      {" "}
                      <i className="flaticon-logout"></i> Logout
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-wrapper">
        <aside className="sidebar-wrapper open custom-scrollbar wow fadeInLeft">
          <div className="sidebar-content-wrapper">
            <ul className="sidebar-list">
              <li className="sidebar-list-item has-subnav active" id="listTem">
                <button className="sidebar-link" id="pro_toggle">
                  <img src="assets/images/icons/Path.svg" alt="Product List" />
                  <span className="item-text">Ecommerce</span>
                </button>
                <ul>
                  <li>
                    <a href="products.html" className="sidebar-link active">
                      Product List
                    </a>
                  </li>
                  <li>
                    <a href="addproduct.html" className="sidebar-link">
                      Add Product
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="content-area-wrapper">
          <div className="content-area-wrapper">
            <div className="content-wrapper">
              <div className="filter_wrapper  d-block d-sm-none">
                <div className="filet_left_content">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        <img
                          src="images/icons/magnifying-glass.png"
                          alt="search"
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control input_modify"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="heading_wrapper d-flex flex-wrap">
                <h1 className="head_title">Product List</h1>
                <nav aria-label="breadcrumb" className="breadcrumb_wrapper">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">E-Commerce</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Product List
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="card products_blc">
                <div className="card-body">
                  <div className="filter_wrapper">
                    <div className="filet_left_content">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <img
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAXtJREFUOE+tVEFOwkAU7e8Q1yyNmFhv0Ih7yg1acW89AXADj1BOYN2D9gaUPZjeABZiXLI2DOObZmiGwSKGTjJpZ/6819f/3x+yjHHu+g6r1bpCCA8hV4UzIkr5ej34ypKFidmuSQ80mp1IWFYXey+YiU20kvGNEHU8fMwHkEbL6bD/G2FBdtHsZDmQc7/s61K1zViCY/PP2SgwCXMypcg749xbZEmupmw4rl//ZiwFMF3ORj39HKmvzaHo+lA+dFAZhpSqOmSHhxSZMaQlhrqVro5Urp5AJnNx9ADOJyF6y/dXr6gmNgWq1v6YDtOjmXDw8vbeQ5XHEFEUUSqrlExaoprfrLQAlVpDM20Lpm0fadoxsj7ZM+22giiEtMYVzBv80U5vOOfCFo+wRbzTAfpCa/TYIko2qtFt2ehCyEYPoWiA90wQPZuEO7eGJM6vIMZ6ALgAtOQeQBOQZ5zzaKu6cXMXmoR7ZP8xrkl4EllePKUQr8HJZAWhbTs/jATsJjmQpCoAAAAASUVORK5CYII="
                              alt="search"
                            />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control input_modify"
                          placeholder="Search"
                        />
                      </div>
                      <select className="custom-select input_modify">
                        <option selected>All</option>
                        <option value="">Clothe</option>
                        <option value="">Bags</option>
                        <option value="">Shoes</option>
                        <option value="">Watches</option>
                        <option value="">Devices</option>
                      </select>
                    </div>
                    <div className="filter_btn_wrapper">
                      <a
                        className="btn theme-btn-primary theme-btn"
                        href="addproduct.html"
                      >
                        Add Product
                      </a>
                    </div>
                  </div>
                  <div className="app_table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">
                            <label className="checkbox_container text-uppercase">
                              {" "}
                              ID
                            </label>
                          </th>
                          <th scope="col" className="th_didivder">
                            Products
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                          <th scope="col" className="th_didivder">
                            Category
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                          <th scope="col" className="th_didivder">
                            Price
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                          <th scope="col" className="th_didivder">
                            Stock
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                          <th scope="col" className="th_didivder">
                            Status
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                          <th scope="col" className="th_didivder">
                            Action
                            <span className="filter-order-link">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="13"
                                viewBox="0 0 11 13"
                              >
                                <g
                                  id="Group_22146"
                                  data-name="Group 22146"
                                  transform="translate(-501 -126.5)"
                                >
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,13.5,14.5,19,20,13.5Z"
                                    transform="translate(492 120.5)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                  <path
                                    id="Icon_ionic-md-arrow-dropdown-2"
                                    data-name="Icon ionic-md-arrow-dropdown"
                                    d="M9,19l5.5-5.5L20,19Z"
                                    transform="translate(492 113)"
                                    fill="rgba(69,85,96,0.2)"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              1
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Dress_Shirt_Fitting_on_dummy_Front.JPG"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Blue Jacket</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              2
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdBPrJxVGq8BksyP6u1j67mO1LxMzjUwxQFw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Blue Sneaker</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">shoes</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              3
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUfA2o1Y0fQWyw8tyHnfPwZf3PzLyEicNBA&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Gray Hoodies</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              4
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrAKoRWG1HJLoGn8TzoAkvIP_HkCJTAs_TA&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">
                                  Analog strip Watch
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">accessories</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              5
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://img.faballey.com/images/Product/TOP04947Z/1.jpg"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Women Shirt</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>Limited stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              6
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcGgPyiWVBPw1RaD7TptDPJVcMq15eBNnYg&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">fan</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>0</td>
                          <td>out of stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              7
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRk5MlQAG8njzCbgTRnHpzCchiRibUDnoNbw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Denim Jeans</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              8
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0qzZFMH6aO52mvAUkv0Fl7ikrQGUYx8S7w&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Headphone</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>10</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              9
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2n5BgGptM3vYVRoTuY-6NE1Bvx_YEyX7hdg&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">laptop</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>Limited stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              10
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQewaKjSKvBOYvy8e3BcK1E1o0sZAaHeX8Gw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Raybon Google</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">accessories</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              11
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd3yse2dmLNzT1WXm3peJQY-Bgx88oyWJYw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">iphone 14</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              12
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZZni4MlsPOQYoWogI6L1uc7G6rp1ldxm-g&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Refrigerator</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              13
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPQu5YWxH-lS-qoXN5DAHWk11yLrvMtcSEw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Cammera</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              14
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOE8CF8ZK0rN-yAfBtwjBKrpYsQcHVtpO_g&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Cycle</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">accessories</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              15
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOwNou5C7xK-QTgFU571nfxaIN-fZUufFRJo3xVC2HgldN2_ddJ3pD11y_IHMAsrQ--M&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">
                                  Mens Track Pants
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              16
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEf8hy_B_09PewaRMGWXG5ET8W8ijCveJE2FF93X0xst9YzvVm_hxH-92UJL0YBJZL2TI&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Cricket Bat</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">accessories</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              17
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1kwoFQQCESpUyn0FytqnKWCzYAU1xom88VXh61n0DPK3kPqzKTZQXNf5ljd8N-0NMe8&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Ear Buds</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              18
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-M1rQLo-NRXL3uMi2SDnT-ZGdYkJmUiAgXw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Guitar</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">instrument</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              19
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaeWjDQZtXazlO8NCJtyBCfqOe4IwFjeAZw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Balzer</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              20
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRR44VG9m9Y8mxwkOdDqNOZWce6hLQtW-TQ&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Computer</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              21
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://rukminim1.flixcart.com/image/416/416/ki3gknk0/noodle/z/l/u/840-maggie-masala-noodles-12-instant-noodles-nestle-original-imafxym3qfnvhksa.jpeg?q=70"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Maggiee</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">Grocery</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              22
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lGbgf3_sWfUBZCjITSGAfCzdcPzEeKbKqg&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Mens shots</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              23
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQteLnvish69U_avVaG8ak8Pb4DoxXdfbX278sEsik-Eu553BX_po42ULDRTtj5iTuvSlk&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">samsung AC</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>50</td>
                          <td>out of stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              24
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMg33iLtdKKMDfgleaz_4moJi3mN1Akyy02i6_tC2y9teTP4DPyzdEuUAiH9xMfDA5Rw&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">pen</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">stationary</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>Limited stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              25
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKUQ5tlbIneiudCuZKHbRWSA9f5rNW4fhlQ&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Coffee</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">food product</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              26
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPG2xShjUnLH59LjjykylM0rvUY2qBfKzEWQ&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Water Heater</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              27
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsu0QNjSs7ZUVU9yX9d74--GBZQpvwrjoKN_9rgaCWXmKWx_t0SonkY6vq5EfhuxHCCk&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Office chair</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">furniture</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              28
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUowKMcXiXgfkndm3REnRkJ-NQbfZZ-ohzJg&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">One plus 7</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              29
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrwvfWMVmss0mglRIV39LVu3VbpSRs9vN-w&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Samsung Tab</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">electronics</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              30
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJuuKlR_mM2jbsTciQ9qx4c19IV7b9HUPkQ&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">Dairy milk</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">chocalates</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>In stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label className="checkbox_container text-uppercase">
                              31
                            </label>
                          </td>
                          <td>
                            <div className="media align-items-center">
                              <div className="product_thumb">
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQDrxzAIOJUQorkS_zn__QA50Zi6jlKc1HQ&amp;usqp=CAU"
                                  alt="Images"
                                />
                              </div>
                              <div className="media-body product_des">
                                <h6 className="product_name">saree</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text_primary">cloths</td>
                          <td>$30</td>
                          <td>5</td>
                          <td>Limited stock</td>
                          <td className="actions">
                            <div className="dropdown dropdown_wrapper ">
                              <button
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <img
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACFSURBVEiJ7ZSxCYAwEEUfWmrhEilTuZMTGTdwB+dwB0FXsNHCiAFBIl4KSR78JnD//nHhICY00FtpafMSWIDNarZvYtSO+alaskHJkdqdoPApzD0brMAAVMAINMD0OmYUKKsgdFxLNtLmivs39Zokk07yBcOVvg3VJOiS/08614+kcx2OHQgqLpVdcUDeAAAAAElFTkSuQmCC"
                                  alt="Donts"
                                />
                              </button>
                              <div className="dropdown-menu dropdown-menu-right  ">
                                <a
                                  className="dropdown-item"
                                  href="editproduct.html"
                                >
                                  Edit Product
                                </a>
                                <button className="dropdown-item">
                                  Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="site_footer">
            <div className="copy-text-wrapper">
              Copyright 2023 bitcot All rights reserved.
            </div>
            <div className="footer-links-wrapper">
              <a>Terms &amp; Conditions </a> <span className="mx-2">|</span>
              <a>Privacy Policy </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Products;
