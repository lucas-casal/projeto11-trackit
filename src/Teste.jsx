import React, {useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

export default function Teste() {
  const [date, setDate] = useState(new Date());
  console.log(date)
  return (
      <div>
          <Calendar
              onChange={setDate}
              value={date}
              maxDate={new Date()}
              formatDay ={(locale, date) => dayjs(date).format('YYYY-MM-DD')}
          />
      </div>
  );
}