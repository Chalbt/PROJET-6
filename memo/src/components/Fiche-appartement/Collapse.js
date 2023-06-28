import React, { useState } from 'react';
import "../../styles/Collapse.css";
import ArrowTop from "../../assets/arrow_top.png";
import ArrowBottom from "../../assets/arrow_bottom.png";

function Collapse({ title, content}) {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {

    setOpen(!open);
  };

  return (
    <div>
      <button className="title-collapse" onClick={handleToggle}>
        {title}
        {open ? (
          <img className="collapse-icon" src={ArrowTop} alt="Arrow Top" />
        ) : (
          <img className="collapse-icon" src={ArrowBottom} alt="Arrow Bottom" />
        )}
      </button>
      <div className={`collapse-content ${open ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse