import "bootstrap/dist/css/bootstrap.min.css";
import Pile from "./Pile";
import { useEffect, useState } from "react";

interface Props {
  pile1Length: number[];
}
function App({ pile1Length }: Props) {
  const [moves, setMoves] = useState(1);
  const [col1BorderColor, setCol1BorderColor] = useState("green");
  const [col2BorderColor, setCol2BorderColor] = useState("white");
  const [col3BorderColor, setCol3BorderColor] = useState("white");
  const [pile1, setPile1] = useState<number[]>(pile1Length);
  const [pile2, setPile2] = useState<number[]>([]);
  const [pile3, setPile3] = useState<number[]>([]);

  const [selection, setSelection] = useState(1);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key === "a") {
        setCol1BorderColor("green");
        setCol2BorderColor("white");
        setCol3BorderColor("white");
        setSelection(1);
      }
      if (key === "s") {
        setCol1BorderColor("white");
        setCol2BorderColor("green");
        setCol3BorderColor("white");
        setSelection(2);
      }
      if (key === "d") {
        setCol1BorderColor("white");
        setCol2BorderColor("white");
        setCol3BorderColor("green");
        setSelection(3);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  useEffect(() => {
    function defaultChanges(
      col: string,
      col2: string,
      col3: string,
      sel: number
    ) {
      setSelection(sel);
      setMoves(moves + 1);
      setCol1BorderColor(col);
      setCol2BorderColor(col2);
      setCol3BorderColor(col3);
    }
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (key === "arrowleft") {
        console.log("left");

        if (selection == 2) {
          console.log("selection is equal to 2");
          if (pile2.length > 0) {
            console.log("pile has somethign inside");
            let pileleft: number[] = pile1;
            if (pile1.length == 0) {
              pileleft.unshift(pile2[0]);
              setPile1(pileleft);

              pileleft = pile2;
              pileleft.shift();
              setPile2(pileleft);
              defaultChanges("green", "white", "white", 1);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile1[0] > pile2[0]) {
              pileleft.unshift(pile2[0]);
              setPile1(pileleft);

              pileleft = pile2;
              pileleft.shift();
              setPile2(pileleft);
              defaultChanges("green", "white", "white", 1);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        } else if (selection == 3) {
          if (pile3.length > 0) {
            let pileleft: number[] = pile2;
            if (pile2.length == 0) {
              pileleft.unshift(pile3[0]);
              setPile2(pileleft);

              pileleft = pile3;
              pileleft.shift();
              setPile3(pileleft);
              defaultChanges("white", "green", "white", 2);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile2[0] > pile3[0]) {
              pileleft.unshift(pile3[0]);
              setPile2(pileleft);

              pileleft = pile3;
              pileleft.shift();
              setPile3(pileleft);
              defaultChanges("white", "green", "white", 2);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        } else if (selection == 1) {
          if (pile1.length > 0) {
            let pileleft: number[] = pile3;
            if (pile3.length == 0) {
              pileleft.unshift(pile1[0]);
              setPile3(pileleft);

              pileleft = pile1;
              pileleft.shift();
              setPile1(pileleft);
              defaultChanges("white", "white", "green", 3);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile3[0] > pile1[0]) {
              pileleft.unshift(pile1[0]);
              setPile3(pileleft);

              pileleft = pile1;
              pileleft.shift();
              setPile1(pileleft);
              defaultChanges("white", "white", "green", 3);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        }
      } else if (key === "arrowright") {
        if (selection == 1) {
          if (pile1.length > 0) {
            let pileleft: number[] = pile2;
            if (pile2.length == 0) {
              pileleft.unshift(pile1[0]);
              setPile2(pileleft);

              pileleft = pile1;
              pileleft.shift();
              setPile1(pileleft);
              defaultChanges("white", "green", "white", 2);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile2[0] > pile1[0]) {
              pileleft.unshift(pile1[0]);
              setPile2(pileleft);

              pileleft = pile1;
              pileleft.shift();
              setPile1(pileleft);
              defaultChanges("white", "green", "white", 2);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        } else if (selection == 2) {
          if (pile2.length > 0) {
            let pileleft: number[] = pile3;
            if (pile3.length == 0) {
              pileleft.unshift(pile2[0]);
              setPile3(pileleft);

              pileleft = pile2;
              pileleft.shift();
              setPile2(pileleft);
              defaultChanges("white", "white", "green", 3);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile3[0] > pile2[0]) {
              pileleft.unshift(pile2[0]);
              setPile3(pileleft);

              pileleft = pile2;
              pileleft.shift();
              setPile2(pileleft);
              defaultChanges("white", "white", "green", 3);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        } else if (selection == 3) {
          if (pile3.length > 0) {
            let pileleft: number[] = pile1;
            if (pile1.length == 0) {
              pileleft.unshift(pile3[0]);
              setPile1(pileleft);

              pileleft = pile3;
              pileleft.shift();
              setPile3(pileleft);
              defaultChanges("green", "white", "white", 1);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else if (pile1[0] > pile3[0]) {
              pileleft.unshift(pile3[0]);
              setPile1(pileleft);

              pileleft = pile3;
              pileleft.shift();
              setPile3(pileleft);
              defaultChanges("green", "white", "white", 1);
              setMoves(moves + 1);
              let label = document.getElementById("moves") as HTMLLabelElement;
              label.textContent = "MOVES: " + moves;
            } else {
              console.log("illegal move");
            }
          }
        }
      }
    };

    if (
      pile3.length ==
      parseInt(
        new URLSearchParams(window.location.search).get("disks") || "3",
        10
      )
    ) {
      alert("you won!!! in: " + moves + " moves");
    }
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selection, pile1, pile2, pile3]);

  return (
    <>
      <div className="container text-center">
        <div
          className="row align-items-end"
          style={{
            minHeight: "95vh",
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "nowrap",
          }}
        >
          <div
            className="col"
            style={{ border: `2px solid ${col1BorderColor}` }}
          >
            <Pile stacks={pile1}></Pile>
          </div>
          <div
            className="col"
            style={{ border: `2px solid ${col2BorderColor}` }}
          >
            <Pile stacks={pile2}></Pile>
          </div>
          <div
            className="col"
            style={{ border: `2px solid ${col3BorderColor}` }}
          >
            <Pile stacks={pile3}></Pile>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
