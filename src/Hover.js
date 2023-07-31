import {useState} from 'react';
// import axios from 'axios';
const Hover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
           
        </div>

        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
            <h2>bobbyhadz.com</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hover;
