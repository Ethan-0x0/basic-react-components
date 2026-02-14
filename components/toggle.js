import { useState } from "react";

export default function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p>This is a conditionally rendered message!</p>}
    </div>
  );
}