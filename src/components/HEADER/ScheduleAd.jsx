import React from 'react'
import "./ScheduleAd.css"
import "./Search__Form.css"

const ScheduleAd = () => {
  let Schedules = [
    {
      Name: "Almacén principal",
      location: "AV. IQUITOS 1221, (LA VICTORIA)",
      schedule: "09:00-17:00HRS (LUN-VIE) / 09:00-13:00HRS (SAB)",
    },
  ];
  return (
    <div className="schedule-container hide-on-lg">
      {Schedules.map((Element, index) => (
        <div className="schedule-item" key={index}>
          <span className="schedule to">
            09:00-17:00HRS <strong className='sub'> (LUN-VIE) </strong> / 09:00-13:00HRS{" "}
            <strong className='sub'>(SAB)</strong> - AV. IQUITOS 1221,{" "}
            <strong className='sub'>(LA VICTORIA)</strong>
          </span>
        </div>
      ))}
    </div>
  );
}

export default ScheduleAd