import React from 'react'
import { Link } from 'react-router-dom';

export const PageNotFound= () => {
  return (
    <div className="inner_page error_404">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="error_page">
              <div className="center">
                <div className="error_icon">
                  <img className="img-responsive" src={require('../images/layout_img/error.png')} alt="#" />
                </div>
              </div>
              <br />
              <h3>PAGE NOT FOUND !</h3>
              <p>YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
              <div className="center">
                <Link className="main_bt" to="/">
                  Go To Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


