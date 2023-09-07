import React from 'react';

import { Link } from 'react-router-dom';

export const Login=()=>{
    return (
        <div className="full_container center">
          <div className="container">
            <div className="center verticle_center full_height">
              <div className="login_section">
                <div className="logo_login">
                  <div className="center">
                    <img width="210" src={require('../images/logo/logo.png')} alt="#" />
                  </div>
                </div>
                <div className="login_form">
                  <form>
                    <fieldset>
                      <div className="field">
                        <label className="label_field">Email Address</label>
                        <input type="email" name="email" placeholder="E-mail" />
                      </div>
                      <div className="field">
                        <label className="label_field">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                      </div>
                      <div className="field">
                        <label className="label_field hidden">hidden label</label>
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" /> Remember Me
                        </label>
                        <Link className="forgot" to="">
                          Forgotten Password?
                        </Link>
                      </div>
                      <div className="field margin_0">
                        <label className="label_field hidden">hidden label</label>
                        <button className="main_bt">Sign In</button>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

