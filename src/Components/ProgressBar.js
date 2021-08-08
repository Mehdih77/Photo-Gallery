import React, {useEffect} from 'react';
import useStorage from '../Hooks/useStorage';
import { motion } from 'framer-motion';


export default function ProgressBar({file,setFile}) {

    const {url,progress} = useStorage(file);

    useEffect(() => {
        // if url created, name and other thing in file gone...
        if(url) {
            setFile(null)
        }
    }, [url,setFile])

    return (
        <motion.div className='progress-bar'
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
        >
        </motion.div>
    )
}
