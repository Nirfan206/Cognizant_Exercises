import React from "react";

function App() {

  const office = {
    name: "Smart Office",
    rent: 55000,
    address: "Hyderabad"
  };

  const officeList = [
    {
      id: 1,
      name: "Smart Office",
      rent: 55000,
      address: "Hyderabad"
    },
    {
      id: 2,
      name: "Tech Park",
      rent: 75000,
      address: "Bangalore"
    },
    {
      id: 3,
      name: "Business Hub",
      rent: 62000,
      address: "Chennai"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src="/office.jpg"
        alt="Office Space"
        width="400"
        height="250"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.name}</p>

      <p>
        <b>Rent:</b>

        <span
          style={{
            color: office.rent < 60000 ? "red" : "green"
          }}
        >
          {" "}₹{office.rent}
        </span>

      </p>

      <p><b>Address:</b> {office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {
        officeList.map((item) => (

          <div key={item.id}>

            <h3>{item.name}</h3>

            <p>
              <b>Rent:</b>

              <span
                style={{
                  color: item.rent < 60000 ? "red" : "green"
                }}
              >
                {" "}₹{item.rent}
              </span>

            </p>

            <p><b>Address:</b> {item.address}</p>

            <hr />

          </div>

        ))
      }

    </div>
  );

}

export default App;