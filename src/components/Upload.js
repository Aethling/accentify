import { useRef } from 'react';
import { Button, Stack } from "@mui/material";
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';

const Upload = () => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      axios.post('https://some-api.com', formData, {
        'content-type': 'multipart/form-data',
      });
    } catch (error) {
      console.error('Failed to submit files.');
    }
  };

  return (
    <div >
      <h1>Upload Files</h1>

      <p>Please use the form to your right to upload any file(s) of your choosing.</p>

      <div className="form-container">
        {/* Display the files to be uploaded */}
        <div >
          <ul>
            {fileNames.map((name) => (
              <li key={name}>
                <span>{name}</span>

                <span onClick={() => removeFile(name)}>
                  <i className="fa fa-times" />
                </span>
              </li>
            ))}
          </ul>

          {files.length > 0 && (
            <ul>
              <li>File types found: {fileTypes.join(', ')}</li>
              <li>Total Size: {totalSize}</li>
              <li>Total Bytes: {totalSizeInBytes}</li>

              <li className="clear-all">
                <Button variant="outlined" onClick={() => clearAllFiles()}>Clear All</Button>
              </li>
            </ul>
          )}
        </div>

        {/* Provide a drop zone and an alternative Button inside it to upload files. */}
        <div
         //  css={DropzoneCSS}
          onDragEnter={handleDragDropEvent}
          onDragOver={handleDragDropEvent}
          onDrop={(e) => {
            handleDragDropEvent(e);
            setFiles(e, 'a');
          }}
        >
          <p>Drag and drop files here</p>

          <Button variant="outlined" onClick={() => inputRef.current.click()}>Or select files to upload</Button>

          {/* Hide the crappy looking default HTML input */}
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => {
              setFiles(e, 'a');
              inputRef.current.value = null;
            }}
          />
        </div>
      </div>

      <div className="submit">
        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};
export default Upload
