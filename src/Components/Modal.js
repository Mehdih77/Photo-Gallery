import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({ selectedImage ,setSelectedImage}) {

    // if select enlarged img nothing happened BUT if select other place, img will be small
    function handleClick(e) {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null)
        }
    }

    return (
        <motion.div className='backdrop' onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
            <motion.img src={selectedImage} alt="enlarged pic"
            initial={{ y: "-100vh"}}
            animate={{ y: 0}} />
        </motion.div>
    )
}
