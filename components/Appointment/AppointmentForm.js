import React, {useState} from "react"; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";



const AppointmentForm = () => {
  
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center appointment-wrap-two">
            <div className="col-lg-7">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <img src="/images/hart-img1.png" alt="Shape" />
                </div>

                <h2>Book your appointment</h2>
                <span>We will confirm your appointment within 2 hours</span>

                <div className="appointment-form">
                  <form>
                    <div className="row">
                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div> */}

                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-message"></i>
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                          />
                        </div>
                      </div> */}

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Services</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option>Issue 1</option>
                            <option>Issue 2</option>
                            <option> Issue 3</option>
                            <option>Issue 4</option>
                            <option>Issue 5</option>

                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-location-pin"></i>
                          <label>Location</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>Choose Your Location</option>
                            <option>Location A</option>
                            <option>Location B</option>
                            <option>Location C</option>
                            <option>Location D</option>
                            <option>Location E</option>


                          </select>
                        </div>
                      </div>

                      {/* <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man"></i>
                          <label>Age</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Age"
                          />
                        </div>
                      </div> */}

                      <div className="col-lg-6">
                      <div className="form-group">
                        <i className="icofont-ui-calendar"></i>
                        <label>date</label>
                        <div
                          
                          >
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          minDate={today}
                          maxDate={nextMonth}
                          className="form-control"
                          placeholderText="Select Date"
                        />
                                                  </div>

                      </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-wall-clock"></i>
                          <label>Time</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                          >
                            <option>Select Time</option>
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>


                          </select>
                        </div>
                      </div>


                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        <Link style={{color:'white'}} href="/subscription">Submit</Link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="appointment-item-two-right">
                <div className="appointment-item-content">
                  <h2> Your Booked Appointments</h2>
                  <ul>
                    <li>
                      10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                    10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                    10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                    10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                    10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                    10/07/2024 <span>9:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
