import React from 'react';

const VisualIcon = ({ active = false }) => {
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      {active ? (
        <img src="/assets/visual.png" alt="visual icon" />
      ) : (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44 25.8546C44 24.9399 42.5729 24.913 42.5729 24.913C37.4234 24.7871 31.9058 23.6816 28.6408 20.3542C25.2767 16.9253 25.1788 11.7587 25.0529 8.7443C24.9648 6.63852 24.2996 6.46609 24.1773 6.45264V6.4502H23.8251V6.45264C23.7077 6.46487 23.0364 6.62629 22.9471 8.7443C22.8212 11.7587 22.7233 16.9253 19.3592 20.3542C16.0942 23.6828 10.5766 24.7883 5.42709 24.913C5.42709 24.913 4 24.9412 4 25.8546C4 25.8693 4 25.8816 4.00245 25.895C4.00245 25.9085 4 25.9219 4 25.9354C4 26.8501 5.42709 26.877 5.42709 26.877C10.5766 27.0029 16.0942 28.1084 19.3592 31.4358C22.7233 34.8647 22.8212 40.0314 22.9471 43.0457C23.0437 45.3667 23.8423 45.3386 23.8423 45.3386H24.1578C24.1578 45.3386 24.1639 45.3386 24.1761 45.3386H24.1773C24.2996 45.3251 24.9648 45.1527 25.0529 43.0469C25.1788 40.0326 25.2767 34.866 28.6408 31.437C31.9058 28.1084 37.4234 27.0029 42.5729 26.8782C42.5729 26.8782 44 26.8501 44 25.9366C44 25.9219 44 25.9097 43.9976 25.8962C43.9976 25.8828 44 25.8693 44 25.8559V25.8546Z"
            fill="#FFFFFF80"
          />
          <path
            d="M24.0012 5.65013C25.1196 5.65013 26.0263 4.74347 26.0263 3.62505C26.0263 2.50664 25.1196 1.59998 24.0012 1.59998C22.8828 1.59998 21.9761 2.50664 21.9761 3.62505C21.9761 4.74347 22.8828 5.65013 24.0012 5.65013Z"
            fill="#FFFFFF80"
          />
        </svg>
      )}
    </div>
  );
};

export default VisualIcon;
