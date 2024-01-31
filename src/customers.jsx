import React from "react";
import "./customers.css";
import pic1 from "./assets/Rectangle2.png";
import pic2 from "./assets/Rectangle3.png";
import pic3 from "./assets/Rectangle4.png";
import pic4 from "./assets/Rectangle5.png";
import CustomerData from "./components/customerData";

function customers() {
  
  const info = [
    {
      id: "1",
      name: "Chris Friedkly",
      work: "Supermaarket Villanova",
      image: pic1,
    },
    {
      id: "2",
      name: "Maggie Johnson",
      work: "Oasis organic Inc.",
      image: pic2,
    },
    {
      id: "3",
      name: "Gael Harry",
      work: "New York Finest Fruits",
      image: pic3,
    },
    {
      id: "4",
      name: "Jeena Sullivan",
      work: "Walmart",
      image: pic4,
    },
  ];

  return (
    <div className="customers">
      <div className="title">
        Customers
        <button>
          Sort by <span className="bold">Newest</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <path
              d="M3.5 5.86163L7 9.36163L10.5 5.86163"
              stroke="#7D7D7D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <CustomerData info={info[0]} />
      <CustomerData info={info[1]} />
      <CustomerData info={info[2]} />
      <CustomerData info={info[3]} />

      <div className="final">
        All Customers
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
        >
          <path
            d="M2.91666 7.11162H11.0833M11.0833 7.11162L8.75 9.44496M11.0833 7.11162L8.75 4.77829"
            stroke="#734A00"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
export default customers;
