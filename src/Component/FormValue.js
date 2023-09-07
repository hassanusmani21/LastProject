// import { Link } from 'react-router-dom';
import React, { useState} from 'react';
// import '../Css/multiselectionstyle'
import '../Css/pagination.css'
import MultiSelect from 'multiselect-react-dropdown'; // Make sure the import path is correct


export const Form=()=>{

  const [selectedOptions, setSelectedOptions] = useState([]);
  // console.log(selectedOptions.values)

  const onSelect = (selectedItem) => {
    setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, selectedItem]);
  };

  const onRemove = (removedItem) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((item) => item.key !== removedItem.key)
    );
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Options:', selectedOptions);
  };

  

  const options = [
    { key: '1', value: 'jsj' },
    { key: '2', value: 'slamn' },
    { key: '3', value: 'djsj' },
    { key: '4', value: 'zaid' },
    { key: '5', value: 'Option 5' }, 
    { key: '6', value: 'Option 6' },
    { key: '7', value: 'Option 7' },
    { key: '8', value: 'Option 8' },
    { key: '9', value: 'Option 9' },
    { key: '10', value: 'Option 10' },
    { key: '11', value: 'Option 11' },
    { key: '12', value: 'Option 12' },
    { key: '13', value: 'Hasssan' },
  ];



    return (
        <div className="full_container center full-form">
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
                        <label className="label_field">Name</label>
                        <input type="text" name="name" placeholder="Enter Name" />
                      </div>

                      <div className="field">
                        <label className="label_field">Phone</label>
                        <input type="number" name="phone" placeholder="Enter Phone" style={{ WebkitAppearance: 'none', MozAppearance: 'textfield' }}
/>
                      </div>

                      <div className="field">
                        <label className="label_field">Email Address</label>
                        <input type="email" name="Email" placeholder="Enter E-mail"/>
                      </div>
                      
                      <div className="field">
                        <label className="label_field">Address</label>
                        <input type="address" name="Address" placeholder="Enter Address" />
                      </div>
                       
                    

                      <div className="field">
                        <label className="label_field">Password</label>
                        <input type="password" name="password" placeholder="Password" />
                      </div>


                      <div className="field1">
                            <div className="multi-select-container">
                              <MultiSelect
                                options={options}
                                selectedValues={selectedOptions}
                                onSelect={onSelect}
                                onRemove={onRemove}
                                displayValue="value"
                                placeholder='Search'
                              />
                              <ul className="multi-select-list">
                                {selectedOptions.map((item) => (
                                  <li key={item.key}>{item.value}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        

                      <div className="field margin_0">
                        <label className="label_field hidden">hidden label</label>
                        <button className="main_bt" onClick={handleSubmit}>Submite</button>
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


