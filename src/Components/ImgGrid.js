import React from 'react';
import useFirestore from '../Hooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImgGrid({setSelectedImage}) {

    const {docs} = useFirestore('images');

    return (
        <div className='img-grid'>
            { docs && docs.map(doc => (
                <motion.div className='img-wrap' key={doc.id}
                onClick={() => setSelectedImage(doc.url)}
                layout
                whileHover={{ opacity: 1}}
                >
                    <motion.img src={doc.url} alt="upload pic img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                     />
                </motion.div>
            ))}
        </div>
    )
}
