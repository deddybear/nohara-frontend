import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  focusedStyle,
  acceptStyle,
  thumb,
  thumbInner,
  img,
  thumbsContainer,
} from "./styles";

export const DropZoneComponent = (props) => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
  } = useDropzone({
    onDropRejected: (files) => props.handleFilesRejected(files),
    onDropAccepted: (files) => props.handleAcceptedFiles(files),
    accept: { "image/jpeg": [".jpeg", ".png", ".jpg"] },
    maxFiles: 3,
    maxSize: 1048576,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
    }),
    [isFocused, isDragAccept]
  );

  return (
    <div {...getRootProps({ style })}>
      <input name="file_layanan" {...getInputProps()} />

      {props.dataFiles &&
      Array.isArray(props.dataFiles) &&
      props.dataFiles.length ? (
        <div className="selected-file">
          {props.dataFiles.length > 3
            ? `${props.dataFiles.length} files`
            : props.dataFiles.map((file) => file.name).join(", ")}
        </div>
      ) : (
        <div>
          {" "}
          <p>Drag 'n' drop some files here, or click to select files</p>
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </div>
      )}
      <aside style={thumbsContainer}>
        {props.dataFiles.map((file, index) => (
          <div style={thumb} key={`${file.name}-${index}`}>
            <div style={thumbInner}>
              <img
                src={file.preview}
                style={img}
                alt={file.name}
                // Revoke data uri after image is loaded
                // onLoad={() => {
                //   URL.revokeObjectURL(file.preview);
                // }}
              />
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
};
