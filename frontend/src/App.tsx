//import { Character } from "./components/Character"

import { useEffect, useRef, useState } from "react";
import { Character } from "./components/Character";
import { Grid } from "./components/Grid";
import { GridData } from "./lib/types";
import axios from "axios";

function App() {
  // set States
  const [character, setCharacter] = useState("");
  const lastInputChangeTime = useRef(0);
  const [gridData, setGridData] = useState<GridData | null>(null);
  const [generateGrid, setGenerateGrid] = useState<boolean>(false);

  // set events
  const handleSetCharacter = (text: string) => {
    const rightNow = Date.now();
    const regexValidator = /^[a-z]$/;
    text = text.toLocaleLowerCase();

    if (regexValidator.test(text) || text === "") {
      // Allow only one character
      if ((text.length <= 1 && rightNow - lastInputChangeTime.current >= 4000) || text !== "") {
        setCharacter(text);
        lastInputChangeTime.current = rightNow;
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL + "grid?character=" + character);
      setGridData(response.data);
    } catch (error) {
      console.error("Error fetching grid data:", error);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (generateGrid) {
      intervalId = setInterval(() => {
        fetchData();
      }, 2000); // Refresh every 2 seconds
    }

    return () => clearInterval(intervalId);
  }, [generateGrid, character]);

  const handleGenerateGridClick = () => {
    setGenerateGrid((prev) => !prev);
  };

  return (
    <div className="flex flex-col px-[10%] py-24 space-y-10">
      <Character character={character} handleSetCharacter={handleSetCharacter} handleGenerateGridClick={handleGenerateGridClick} />
      <Grid gridData={gridData} generateGrid={generateGrid} />
    </div>
  );
}

export default App;
