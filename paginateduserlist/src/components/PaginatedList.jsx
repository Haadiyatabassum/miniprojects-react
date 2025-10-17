import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginatedUserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const indexOfFirstUser = (currentPage - 1) * usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfFirstUser + usersPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="container my-4"  >
      <h2 className="mb-4 text-center" style={{color:'blueviolet'}}>Paginated User List</h2>

      {currentUsers.map(user => (
        <div key={user.id} className="card mb-3"  >
          <div className="card-body" style={{backgroundColor:'lavenderblush'}} >
            <h5 className="card-title">
              {user.firstName} {user.lastName}
            </h5>
            <p className="card-text"><strong>Email:</strong> {user.email}</p>
            <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      ))}




 <nav>
        <div className="d-flex justify-content-center overflow-auto">
  <ul className="pagination flex-nowrap">

          {/* Previous Button */}
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handlePrev}>Previous</button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
            <li
              key={pageNumber}
              className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
            >
              <button className="page-link" onClick={() => handlePageClick(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}

          {/* Next Button */}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={handleNext}>Next</button>
          </li>

        </ul>
        </div>
      </nav>
    </div>
  );
};

export default PaginatedUserList;
