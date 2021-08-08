import React from 'react';
import useFirestore from '../Hooks/useFirestore';

export default function ImgGrid() {

    const {docs} = useFirestore('images');

    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt="upload pic img" />
                </div>
            ))}
        </div>
    )
}
