
// import React, { useState, useEffect} from 'react';
// import '../Css/Table.css';
// // import '../App.css'
// // Import the CSS file with .css extension

//  export function Pagination(pr) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // State for error handling

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const storedData = await JSON.parse(localStorage.getItem('data'));
//         if (storedData) {
//           setData(storedData);
//           setLoading(false);
//         } else {
//           setError('Data not found in localStorage.');
//         }
//       } catch (error) {
//         setError('An error occurred while fetching data.');
//       }
//     };

//     fetchData();
//   }, []);


//   const [perPage, setPerPage] =useState(5);
//   const [currentPage, setCurrentPage] =useState(0);
//   const [inputPage, setInputPage] =useState(currentPage + 1);

//   const totalPages = Math.ceil(data.length / perPage);

//   const handlePageChange = (newPage) => {
//     if (newPage >= 0 && newPage < totalPages) {
//       setCurrentPage(newPage);
//       setInputPage(newPage + 1); // Update inputPage when currentPage changes
//     }
//   };

//   return (
//     <div className='whole-table'>
//     <div>
//     <table className="styled-table">
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone</th>
//                     <th>Address</th>
//                 </tr>
//             </thead>
//             {data.slice(currentPage * perPage, (currentPage + 1) * perPage)
//             .map(({ id, first_name,  email, phone, address }, index) => (
//     // Your JSX here, which could include rendering of these properties
//     <tbody key={id}>
//       <tr>
//           <td>{id}</td>
//           <td>{first_name}</td>
//           <td>{email}</td>
//           <td>{phone}</td>
//           <td>{address}</td>
//       </tr>
//   </tbody>
  
//   ))}

// </table>

//       <div className="pagination">
//         <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>

//         <div className="page-box">
//           <input
//             type="number"
//             value={inputPage}
//             onChange={(e) => setInputPage(parseInt(e.target.value))}
//             onBlur={() => handlePageChange(inputPage - 1)} // Trigger navigation when the input loses focus
//             min="1"
//             max={totalPages}
//           />
//           <span>of {totalPages}</span>
//         </div>

//         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//       </div>
//     </div>
//     </div>

//   );
// }


import '../Css/Table.css'
import React, { useState} from 'react';
// import './App.css';

export default function Pagination(props) {
  const { data } = props;
  console.log(data)
  

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [inputPage, setInputPage] = useState(currentPage + 1);

  const totalPages = Math.ceil(data.length / perPage);
  // let pegeData=data.slice(currentPage * perPage, (currentPage + 1) * perPage)
  // console.log(pegeData)

  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
      setInputPage(newPage + 1);
    }
  };

  return (
    <div className='whole-table1'>
    <div className='whole-table'>
    <table className="styled-table custom-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            {data.slice(currentPage * perPage, (currentPage + 1) * perPage)
            
            .map(({ id, first_name,  email, phone, address }, index) => (
            <tbody key={id}>
              <tr>
                  <td>{id}</td>
                  <td>{first_name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{address}</td>
              </tr>
          </tbody>
  ))}

</table>
<div className="pagination-container">
  <div className="pagination">
    <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>
    <div className="page-box">
      <input
        type="number"
        value={inputPage}
        onChange={(e) => setInputPage(parseInt(e.target.value))}
        onBlur={() => handlePageChange(inputPage - 1)} // Trigger navigation when the input loses focus
        min="1"
        max={totalPages}
      />
      <span>of {totalPages}</span>
    </div>
    <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
  </div>
  <label className='input-box1'>
    Per Page:
    <input
      className="input-box"
      type="number"
      value={perPage}
      onChange={(e) => setPerPage(Number(e.target.value))}
    />
  </label>
</div>
</div>
</div>
  );
}
