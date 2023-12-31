import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div >
      
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy" // You can customize the format
        isClearable // Adds a clear button to reset the date
        className="form-select fs"
        placeholderText="Select a date"
      />
      
    </div>
  );
}

export default MyDatePicker;
