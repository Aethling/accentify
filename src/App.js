import RecorderControls from "./components/recorder-controls";
import RecordingsList from "./components/recordings-list";
import useRecorder from "./hooks/use-recorder";
import Home from "./components/Home";
import "./app.css";

export default function App() {
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;

  return (
    <>
      <section>
        <Home />
      </section>
      <section className="voice-recorder">
        <div className="recorder-container">
          <RecorderControls recorderState={recorderState} handlers={handlers} />
          <RecordingsList audio={audio} />
        </div>
      </section>
    </>
  );
}
