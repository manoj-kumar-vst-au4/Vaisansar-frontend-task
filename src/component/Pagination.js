import React from 'react';

const Pagination = ({ dataPerPage, totalData, handlePageChange}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination' type="none">
                {pageNumbers.map(number => (
                    <li key={number} >
                        <p   className='page-item' onClick={()=> handlePageChange(number)}>
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;