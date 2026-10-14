import Front from "./Front";
import Back from "./Back";
import Flip from "./Flip";
import { useState, useEffect } from "react";

export default function Photocard() {
  const [flipState, setFlipState] = useState(0);

  const [front, setFront] = useState({
    photo: "./Sample1.jpg",
    frontDesc: "Write a short description here",
  });

  const [back, setBack] = useState({
    date: "Today",
    backDesc: "Write a longer description here",
    recording: "./Sample1.mp3",
  });

  function flip() {
    setFlipState(flipState == 0 ? 1 : 0);
  }

  function handlePhotoChange(event) {
    setFront({
      ...front,
      photo: event.target.value,
    });
  }

  function handleFrontDescChange(event) {
    setFront({
      ...front,
      frontDesc: event.target.value,
    });
  }

  function handleDateChange(event) {
    setBack({
      ...back,
      date: event.target.value,
    });
  }

  function handleBackDescChange(event) {
    setBack({
      ...back,
      backDesc: event.target.value,
    });
  }

  function handleRecordingChange(event) {
    setBack({
      ...back,
      recording: event.target.value,
    });
  }

  if (flipState == 0) {
    return (
      <>
        <Front photo={front.photo} frontDesc={front.frontDesc} />
        <br />
        <div className="inputs">
          <label>
            Photo:
            <input value={front.photo} onChange={handlePhotoChange} />
          </label>
          <br />
          <label>
            Short Description:
            <input value={front.frontDesc} onChange={handleFrontDescChange} />
          </label>
        </div>
        <br />
        <button onClick={flip}>Flip</button>
      </>
    );
  }
  return (
    <>
      <Back
        date={back.date}
        backDesc={back.backDesc}
        recording={back.recording}
      />
      <br />
      <div className="inputs">
        <label>
          Date:
          <input value={back.date} onChange={handleDateChange} />
        </label>
        <br />
        <label>
          Description:
          <input value={back.backDesc} onChange={handleBackDescChange} />
        </label>
        <br />
        <label>
          Recording:
          <input value={back.recording} onChange={handleRecordingChange} />
        </label>
      </div>
      <br />
      <button onClick={flip}>Flip</button>
    </>
  );
}
