import React from 'react'
import "./ScheduleAd.css"
import "./Navb__Form.css"
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
        
          <span className="schedule">{Element.schedule} - {Element.location}</span>
        </div>
      ))}
    </div>
  );
}

export default ScheduleAd