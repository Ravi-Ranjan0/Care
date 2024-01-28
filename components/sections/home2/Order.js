import React from 'react';

export default function order() {
  return (
    <section className="order-service">
      <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-17.png)' }}></div>
      <div className="auto-container">
        <div className="text-box">
          <h2>Order service online</h2>
          <p>
            <span className="shape"></span> Enter your information to check availability
          </p>
        </div>
        <div className="form-inner">
          <form method="post" action="index-2">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="address" placeholder="Enter Address" required />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 form-group">
                <div className="select-box">
                  <select className="selectmenu" id="ui-id-1">
                    <option value={1}>Service type</option>
                      <option value={2}>Garbage pickup</option>
                      <option value={3}>Dumpster rental</option>
                      <option value={4}>Waste collection</option>
                      <option value={5}>Recycling service</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 form-group message-btn">
                <button type="submit" className="theme-btn btn-one">
                  <span>Search Now</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
