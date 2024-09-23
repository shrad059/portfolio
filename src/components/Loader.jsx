// import { Html, useProgress } from "@react-three/drei";

// const CanvasLoader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html
//       as='div'
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <span className='canvas-loader'></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: "#F1F1F1",
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >
//         {progress.toFixed(2)}%
//       </p>
//     </Html>
//   );
// };

// export default CanvasLoader;
import React from 'react';
import './Loader.css'; // Ensure you have this CSS file

const CanvasLoader = () => {
    return (
        <div className="loader">
            <h1>Loading...</h1> {/* Keep it simple */}
        </div>
    );
};

export default CanvasLoader;
