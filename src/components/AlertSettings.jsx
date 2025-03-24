// import { useState, useEffect } from "react";

import { useTodo } from "../context/TodoContext";

function AletrsToggle() {
//   const [isAlertsEnabled, setIsAlertsEnabled] = useState(() => {
//     return JSON.parse(localStorage.getItem("isAlertsEnabled")) ?? true;
//   });
//   useEffect(() => {
//     localStorage.setItem("isAlertsEnabled", JSON.stringify(isAlertsEnabled));
//     onToggleChange(isAlertsEnabled);
//   }, [isAlertsEnabled, onToggleChange]);

// Use context instead of local state

    const { isAlertsEnabled, setIsAlertsEnabled } = useTodo();

  return (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        id="alertsToggle"
        className="form-check-input"
        checked={isAlertsEnabled}
        onChange={() => setIsAlertsEnabled((prev) => !prev)}
      />
      <label htmlFor="alertsToggle" className="form-check-label ms-2">
        Enable Alerts
      </label>
    </div>
  );
}
export default AletrsToggle;
