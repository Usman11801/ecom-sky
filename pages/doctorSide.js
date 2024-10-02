// pages/doctorSide.js
import React, { useState } from 'react';
import Table from '../components/Table';
import DocNav from '../components/_App/DocNav';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    id: 'name', // Unique ID for this column
  },
  {
    Header: 'Age',
    accessor: 'age',
    id: 'age', // Unique ID for this column
  },
  {
    Header: 'Email',
    accessor: 'email',
    id: 'email', // Unique ID for this column
  },
];

const data = [
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Smith',
      age: 25,
      email: 'jane@example.com',
    },
    {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
    },
    {
      name: 'Jane Akels',
      age: 25,
      email: 'jane@example.com',
    },
    // More data...
  ];

const DoctorSide = () => {
  const [selectedOption, setSelectedOption] = useState('upcoming');

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const renderActionButtons = (row) => {
    if (selectedOption === 'upcoming') {
      return (
        <button className='common-btn3' onClick={() => handleCancelAppointment(row.original)}>Cancel Appointment</button>
      );
    } else if (selectedOption === 'pending') {
      return (
        <>
          <button className='common-btn3' onClick={() => handleApproveAppointment(row.original)}>Approve</button>
          <button className='common-btn3' onClick={() => handleCancelAppointment(row.original)}>Cancel Appointment</button>
        </>
      );
    } else {
      return (
        <button className='common-btn3' onClick={() => handleDelete(row.original)}>Delete</button>
      );
    }
  };

  return (
    <div>

        <DocNav/>

        <PageBanner
        pageTitle="Doctor Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Docotr"
        bgImage="page-title-one"
      />

      <h2 style={{textAlign:'center',marginTop:'10%'}}>Appoitments Record</h2>
      <div style={{ display: 'flex', justifyContent: 'center',marginBottom:'10%' }}>
        <div style={{ width: '90%' }}>

     <div style={{ display: 'flex', justifyContent: 'start', marginBottom:'10px' }}>
        <div style={{ width: '25%' }}>
        <div className="form-group">
                          <label style={{marginBottom:'6px',fontSize:'1.1rem',fontWeight:'500'}}>Appointments Type:</label>
                          <select
                          
                           value={selectedOption} 
                           onChange={handleDropdownChange}
                            className="form-control"
                            id="exampleFormControlSelect1"
                          >
                            <option value="upcoming">Upcoming Appointments</option>
            <option value="pending">Pending Appointments</option>
            <option value="cancelled">Cancelled Appointments</option>
            <option value="past">Past Appointments</option>

                          </select>
                        </div>
        </div>
     </div>







          <Table columns={columns} data={data} renderActionButtons={renderActionButtons} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DoctorSide;
