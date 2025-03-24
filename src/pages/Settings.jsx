// import { useState } from "react";
import AletrsToggle from "../components/AlertSettings";
function Settings() {
  // const [isAlertEnabled, setIsAlertEnabled] = useState( () => {
  //   return JSON.parse(localStorage.getItem("isAlertEnabled")) ?? true;
  // });

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <AletrsToggle />
    </div>
  );
}
export default Settings;
  