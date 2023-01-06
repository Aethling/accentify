import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import { Button, Stack } from "@mui/material";

const Recorder = () => {
  const recorderControls = useAudioRecorder()
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <Stack>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <Button variant="outlined" onClick={recorderControls.stopRecording} sx={{width: "200px", mt: 2}}>Stop recording</Button>
    </Stack>
  )
}
export default Recorder
