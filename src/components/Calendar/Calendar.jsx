import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const onChange =(date)=> { setStartDate(date)}

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                maxDate={new Date()}
            >
            </DatePicker>
        </>
    );
}