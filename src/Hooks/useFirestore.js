import {useState,useEffect} from 'react';
import { projectFirestore } from '../Firebase/Config';

export default function useFirestore(collection) {

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createAt', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data() , id: doc.id});
            })
            setDocs(documents);
        })

        return () => unsub();

    }, [collection])

    return { docs };
}
