import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { TextField, Button, Stack } from "@mui/material";
import Recorder from "./Recorder"
import Upload from "./Upload"

export const Home = () => {
  const [value, setValue] = useState("")
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=fy-bd5AC-Ms&ab_channel=LanguageofEarth")
  const fileInput = useRef(null);
  // const handleClick = (e) => {
  //   console.log();
    
   
  //   console.log(fileInput.current.value);
  // };
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
   setUrl(value) 
  }
  return (
    <Stack spacing={2} padding={4}>
      <ReactPlayer url={url} />
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
        <TextField id="input" type="text" ref={fileInput} value={value} onChange={handleChange} sx={{width: '100%'}}>
          asdf
        </TextField>
        <Button type="submit" variant="contained" sx={{ width: "400px"}} >
          Enter a URL
        </Button>
        </Stack>
      </form>
      <Recorder />
      <Upload />
    </Stack>
  );
};
