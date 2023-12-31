import React from 'react'
import './ExpenseFiler.css';

const ExpenseFilter = (props) => {

  const setFilteredValueHandler = (event) => {
    props.onchangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={setFilteredValueHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter