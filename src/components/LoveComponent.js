import React from "react";

function LoveComponent({ background, color }) {
  const bgc = background ? background : 'transparent';
  const text_color = color ? color : 'black';
  return (
    <div style={{ backgroundColor:bgc, color: text_color}} className="d-flex justify-content-between px-2 py-1" >
      <div>
        <i className='fab fa-hotjar h3 text-danger'></i>
      </div>
      <div className="">
        <i className='mr-3 fas fa-heart'></i>
        <i class="fas fa-exchange-alt"></i>
      </div>
    </div>
  );
}

export default LoveComponent;
