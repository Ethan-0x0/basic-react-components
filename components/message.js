import { useState } from "react";
export default function ToggleMessage() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>
      {show && <p>Welcome to the page this is a message and if you click the button I will disappear.</p>}
    </div>
  );
}