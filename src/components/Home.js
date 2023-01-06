import { useRef } from "react";
import ReactPlayer from "react-player";
import { TextField, Button } from "@mui/material";

export const Home = () => {
  const fileInput = useRef(null);
  const handleClick = (e) => {
   //  e.preventDefault();
   
    console.log(fileInput.current.value);
  };
  return (
    <>
      <ReactPlayer url="https://www.youtube.com/watch?v=fy-bd5AC-Ms&ab_channel=LanguageofEarth" />
      <form >
        <TextField id="input" type="text" ref={fileInput}>
          asdf
        </TextField>
        <Button variant="outlined" onClick={handleClick}>
          Enter a URL
        </Button>
      </form>
    </>
  );
};
