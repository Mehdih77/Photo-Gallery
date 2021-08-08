import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadForm() {

    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    // acceptable types of images
    const types = ["image/jpeg","image/png"];

    function uploadHandler(e) {

        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please chose an image with ( jpeg / png) file format.')
        }
    }


    return (
        <div className='upload-form'>
            <label>
                <input onChange={uploadHandler} type="file"/>
                <span className='upload-btn'>+</span>
            </label>
            { error && <p className='upload-error'>{error}</p>}
            {/* { file && <p className='upload-file-name'>{file.name}</p>} */}
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    )
}
