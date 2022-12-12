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
                // showDisabledMonthNavigation

            >
                {/* <div style={{ color: "#216ba5", textAlign: "center", fontWeight: "bold" }}>
                    Don't forget to smile!</div> */}
            </DatePicker>
        </>
    );
}