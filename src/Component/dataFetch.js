import React, { Component } from 'react';
import Pagination from './pagination'
// import './Table.css'
import api from '../AxiousApi'
// import ErrorBoundary from './ErrorBoundary';

export class DataFetchingComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true, // Add a loading flag
      error: null,   // Add an error state to handle errors
    };
  }

  componentDidMount() {
    api.get('/contacts')
      .then((response) => {
        console.log(response)
        this.setState({ data: response.data, loading: false }); 
      })
      .catch((error) => {
        // Handle the error and update error state
        this.setState({ error, loading: false });
      });
  }

  render() {
    const { data, loading , error} = this.state;

    if (loading) {
      // Render loading state
      return <div className='loader'></div>;
    }

    if (error) {
      // Render an error message if there is an error
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <Pagination data={data} />
        
      </div>
    );
  }
}



// import React, { useState, useEffect } from 'react';
// import { Pagination } from './pagination';

// export function Data() {
//   const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || [])

//   useEffect(() => {
//     // Check if data is already in local storage
//     const storedData = localStorage.getItem('data');
//     if (storedData) {
//       setData(JSON.parse(storedData));
//     } else {
//       fetchData();
//     }
//   }, []);

//   async function fetchData() {
//     try {
//       const fetchData = await fetch("http://localhost:8000/contacts");
//       const response = await fetchData.json();
//       console.log(response)
//       setData(response);
//       // Store data in local storage
//       localStorage.setItem('data', JSON.stringify(response));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   return (
//     <div>
//       <Pagination data={data} />
//     </div>
//   );
// }
