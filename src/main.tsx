// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./tests/App.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";

// const MainComponent = () => {
//   const [n, setN] = useState(3); // Default value for n

//   useEffect(() => {
//     // You can use this effect to handle any side effects when 'n' changes
//     // For now, it simply logs the generated array
//     console.log(generateNumberArray(n));
//   }, [n]);

//   const generateNumberArray = (max: any) => {
//     return Array.from({ length: max }, (_, index) => index + 1);
//   };

//   return (
//     <React.StrictMode>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <label>
//           Choose max value (n):
//           <input
//             type="number"
//             value={n}
//             onChange={(e) => setN(parseInt(e.target.value))}
//             min="3"
//           />
//         </label>
//         <div style={{ display: "flex" }}>
//           <App pile1Length={generateNumberArray(n)} />
//         </div>
//       </div>
//     </React.StrictMode>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")!).render(<MainComponent />);

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./tests/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

const MainComponent = () => {
  const urlParams = new URLSearchParams("http://localhost:5173");
  // const [n, setN] = useState(3); // Default value for n
  // const generateNumberArray = (max: any) => {
  //   return Array.from({ length: max }, (_, index) => index + 1);
  // };

  // const [pile1Length, setPile1Length] = useState(generateNumberArray(n));

  // useEffect(() => {
  //   // You can use this effect to handle any side effects when 'n' changes
  //   // For now, it simply logs the generated array
  //   console.log(pile1Length);
  // }, [pile1Length]);

  // const handleNumberChange = (newN: number) => {
  //   setN(newN);
  //   setPile1Length(generateNumberArray(newN));
  // };

  return (
    <React.StrictMode>
      <div
      >
        <div style={{ display: "flex" }}>
          <App
            pile1Length={Array.from(
              {
                length: parseInt(
                  new URLSearchParams(window.location.search).get("disks") ||
                    "3",
                  10
                ),
              },
              (_, index) => index + 1
            )}
          />
        </div>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<MainComponent />);

// <App  pile1Array ={ Array.from({ length: parseInt(new URLSearchParams(window.location.search).get("disks") || '3', 10) }, (_, index) => index + 1)

// } />
