import './App.css';
import ImgGrid from './Components/ImgGrid';
import UploadForm from './Components/UploadForm';

function App() {
  return (
    <div className="gallery-container">
          <UploadForm />
          <ImgGrid />
    </div>
  );
}

export default App;
