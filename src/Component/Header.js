
// import '../Css/Bootstrap.min.css'; 
import '../Css/index.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function Header(){

const [sidebarVisible, setSidebarVisible] = useState(false);
  console.log(sidebarVisible)
    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    if(sidebarVisible){

    }

  return (
    // Top Bar or Header 
    <div className="dashboard dashboard_1">
    <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="full">
        <button type="button" id="sidebarCollapse" className="sidebar_toggle" onClick={toggleSidebar}>
        <i className="fa fa-bars"></i>
        </button>
          <div className="logo_section">
            <Link to="index.html"><img className="img-responsive" src={require('../images/logo/logo.png')} alt="#" /></Link>
          </div>
          <div className="right_topbar">
            <div className="icon_info">
              <ul>
                <li><Link to="/"><i className="fa fa-bell-o"></i><span className="badge">2</span></Link></li>
                <li><Link to="/"><i className="fa fa-question-circle"></i></Link></li>
                <li><Link to="/"><i className="fa fa-envelope-o"></i><span className="badge">3</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <div className={`full_container ${sidebarVisible ? 'sidebar-open' : ''}`}>
    <div className="inner_container">
          <nav id="sidebar">
            <div className="sidebar_blog_1">
              <div className="sidebar-header">
              </div>
              <div className="sidebar_user_info">
                <div className="icon_setting"></div>
                <div className="user_profle_side">
                  <div className="user_img"><img className="img-responsive" src={require("../images/layout_img/user_img.jpg")} alt="#" /></div>
                  <div className="user_info">
                    <h6>John David</h6>
                    <p><span className="online_animation"></span> Online</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar_blog_2">
              <h4>General</h4>
              <ul className="list-unstyled components">
                <li className="active">
                  <Link to="/dashboard" data-toggle="collapse" aria-expanded="false"><i className="fa fa-dashboard yellow_color"></i> <span>Dashboard</span></Link>
                </li>
                <li><Link to="/Login"><i className="fa-solid fa-arrow-right-to-bracket"></i> <span>Login</span></Link></li>
                <li>
                  <Link to="/singup" data-toggle="collapse" aria-expanded="false"><i className="fa-solid fa-user-plus"></i> <span>Singup</span></Link>
                  <ul className="collapse list-unstyled" id="element">
                    <li><Link to="general_elements.html"><span>General Elements</span></Link></li>
                    <li><Link to="media_gallery.html"><span>Media Gallery</span></Link></li>
                    <li><Link to="icons.html"><span>Icons</span></Link></li>
                    <li><Link to="invoice.html"><span>Invoice</span></Link></li>
                  </ul>
                </li>
                <li><Link to="/form"><i className="fa fa-table purple_color2"></i> <span>Form</span></Link></li>
                <li>
                  <Link to="#apps" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-object-group blue2_color"></i> <span>Apps</span></Link>
                  <ul className="collapse list-unstyled" id="apps">
                    <li><Link to="email.html"><span>Email</span></Link></li>
                    <li><Link to="calendar.html"><span>Calendar</span></Link></li>
                    <li><Link to="media_gallery.html"><span>Media Gallery</span></Link></li>
                  </ul>
                </li>
                <li><Link to="price.html"><i className="fa fa-briefcase blue1_color"></i> <span>Pricing Tables</span></Link></li>
                <li>
                  <Link to="contact.html">
                  <i className="fa fa-paper-plane red_color"></i> <span>Contact</span></Link>
                </li>
                <li className="active">
                  <Link to="#additional_page" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fa fa-clone yellow_color"></i> <span>Additional Pages</span></Link>
                  <ul className="collapse list-unstyled" id="additional_page">
                    <li>
                      <Link to="profile.html"><span>Profile</span></Link>
                    </li>
                    <li>
                      <Link to="project.html"><span>Projects</span></Link>
                    </li>
                    <li>
                      <Link to="login.html"><span>Login</span></Link>
                    </li>
                    <li>
                      <Link to="404_error.html"><span>404 Error</span></Link>
                    </li>
                  </ul>
                </li>
                <li><Link to="map.html"><i className="fa fa-map purple_color2"></i> <span>Map</span></Link></li>
                <li><Link to="charts.html"><i className="fa fa-bar-chart-o green_color"></i> <span>Charts</span></Link></li>
                <li><Link to="settings.html"><i className="fa fa-cog yellow_color"></i> <span>Settings</span></Link></li>
              </ul>
            </div>
          </nav>
      </div>
    </div>

      {/* this for all content */}
     </div>


  );
}

