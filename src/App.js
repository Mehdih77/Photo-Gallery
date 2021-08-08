import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import UploadForm from './Components/UploadForm';
import ImgGrid from './Components/ImgGrid';
import Modal from './Components/Modal';

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
          <Header />
          <UploadForm />
          <ImgGrid setSelectedImage={setSelectedImage} />
          { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}
    </div>
  );
}

export default App;
