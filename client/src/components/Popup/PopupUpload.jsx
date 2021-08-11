import './Popup.css';
import { FaTimes } from 'react-icons/fa';
import Dropzone  from 'react-dropzone';


const PopupUpload = ({ files, setFiles, uploadTrigger, setUploadTrigger}) => {

    // CSV File Handler
    const handleFiles = files => {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Use reader.result
            alert(reader.result);
            console.log(reader.result);
        }
        reader.readAsText(files[0]);
        
    }


    const handleOnDrop = (files, rejectedFiles) => {
        console.log(files);
        console.log(rejectedFiles);

        handleFiles(files);
    }

    let fileSize = 1e+7 // Bytes -> 10 MB

    return (uploadTrigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-header">
                    <div className="popup-title">
                        <h2> Upload Files </h2>
                    </div>
                    <div>
                        <h2>
                            <FaTimes
                                style={{ color: 'grey', alignItems: 'center'}}
                                onClick={() => setUploadTrigger (!uploadTrigger)}
                                id="close"
                                
                            />
                        </h2>
                    </div>
                </div>
                <div className="popup-drop">
                <Dropzone onDrop={handleOnDrop} maxSize={fileSize}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div className="dropzone" {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' Drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                </div>
            </div>
        </div>
    ) : ""
}

export default PopupUpload;
