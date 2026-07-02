import { useState } from "react";

function FileUpload({setPdfInfo}) {
  const [file, setFile] = useState(null);
  const[loading,setLoading] = useState(false);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://Jestin12-pdf-text-extractor.hf.space/upload-pdf",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      
      setPdfInfo(data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Add this function inside your component
  const handleRipple = (e) => {
    const btn = e.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();
  
    circle.style.width  = circle.style.height = `${diameter}px`;
    circle.style.left   = `${e.clientX - rect.left - radius}px`;
    circle.style.top    = `${e.clientY - rect.top  - radius}px`;
    circle.classList.add('ripple');
  
    btn.querySelector('.ripple')?.remove();
    btn.appendChild(circle);
  };



  return (
    <div className="upload-section">
      <h2>Upload PDF</h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={(e) => {
          handleRipple(e);
          uploadFile();
        }}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      
    </div>
  );
}

export default FileUpload;