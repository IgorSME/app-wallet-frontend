import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// import css from './Calendar.module.css';

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const onChange =(date)=> { setStartDate(date)}
    // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    //     <button className={css.customInput} onClick={onClick} ref={ref}>
    //       {value}
    //     </button>
    //   ));

    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                // customInput={<ExampleCustomInput />}
                dateFormat="dd-MM-yyyy"
                showYearDropdown
                scrollableMonthYearDropdown
            >
                <div style={{ color: "#216ba5", textAlign: "center", fontWeight: "bold" }}>
                    Don't forget to smile!</div>
            </DatePicker>
        </>
    );
}