import { useState } from 'react';
import './App.css';
import ImgGrid from './Components/ImgGrid';
import Modal from './Components/Modal';
import UploadForm from './Components/UploadForm';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
          <UploadForm />
          <ImgGrid setSelectedImage={setSelectedImage} />
          { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
