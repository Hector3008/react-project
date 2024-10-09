import React from 'react'
import "./ScheduleAd.css"

const ScheduleAd = () => {
  let Schedules = [
    {
      Name: "Almacén principal",
      location: "av. Iquitos 1221, La Victoria",
      schedule: "09:00-17:00hrs (lun-vie) / 09:00-13:00hrs (sab)",
    },
  ];
  return (
    <div className="schedule-container">
      {Schedules.map((Element, index) => (
        <div className="schedule-item" key={index}>
          <span className="location">{Element.location}</span>
          <span className="schedule">{Element.schedule}</span>
        </div>
      ))}
    </div>
  );
}

export default ScheduleAd