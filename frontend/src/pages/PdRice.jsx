import React, { useState, useContext } from "react";
import Map from "./Map";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import { PageContext } from "../context/PageContext";
import { MdDeleteForever } from "react-icons/md";

const PdRice = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // 1. Access Language from Context
  const { lang } = useContext(PageContext);

  // 2. Define Translations
  const content = {
    ENG: {
      title: "Rice Disease Detection",
      uploadTitle: "Upload Leaf Image",
      clickToUpload: "Click to upload",
      fileType: "SVG, PNG, JPG or GIF (MAX. 5MB)",
      previewTitle: "Image Preview",
      clear: "Clear",
      noImage: "No image selected",
      analyzeBtn: "Analyze Image",
      mapTitle: "Select Farm Location",
    },
    BENG: {
      title: "ধান গাছের রোগ নির্ণয়",
      uploadTitle: "পাতার ছবি আপলোড করুন",
      clickToUpload: "আপলোড করতে ক্লিক করুন",
      fileType: "SVG, PNG, JPG অথবা GIF (সর্বোচ্চ ৫ MB)",
      previewTitle: "ছবির প্রিভিউ",
      clear: "মুছুন",
      noImage: "কোন ছবি নির্বাচন করা হয়নি",
      analyzeBtn: "ছবি বিশ্লেষণ করুন",
      mapTitle: "খামারের অবস্থান নির্বাচন করুন",
    },
  };

  // 3. Select text based on language
  const text = content[lang] || content.ENG;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full min-h-screen bg-amber-600/40 flex flex-col">
      {/* UPLOAD SECTION */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-8 text-center">
          {text.title}
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row h-[50vh]">
          {/* LEFT SIDE: Input */}
          <div className="w-full md:w-1/2 p-8 bg-green-50 flex flex-col justify-center items-center border-b md:border-b-0 md:border-r border-green-100">
            <h2 className="text-xl font-semibold text-green-800 mb-6">
              {text.uploadTitle}
            </h2>

            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-green-50 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaCloudUploadAlt className="w-12 h-12 mb-4 text-green-500" />
                <p className="mb-2 text-sm text-gray-500 font-semibold">
                  {text.clickToUpload}
                </p>
                <p className="text-xs text-gray-500">{text.fileType}</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* RIGHT SIDE: Preview */}
          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center items-center relative">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 absolute top-6">
              {text.previewTitle}
            </h2>

            {previewUrl ? (
              <div className="relative w-full h-full flex items-center justify-center pb-12 pt-16">
                <img
                  src={previewUrl}
                  alt="Selected Crop"
                  className="max-h-full max-w-full rounded-lg shadow-md object-contain"
                />

                {/* --- UPDATED CLEAR BUTTON --- */}
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setPreviewUrl(null);
                  }}
                  // Changed positioning to top-2 right-2 for better aesthetics
                  className="absolute top-2 right-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-red-200 transition-colors shadow-sm"
                >
                  {/* Added items-center and gap-1 for alignment */}
                  <span className="flex items-center gap-1">
                    {/* Added size prop to make icon larger */}
                    <MdDeleteForever size={18} />
                    {text.clear}
                  </span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-300">
                <FaImage className="w-24 h-24 mb-4" />
                <p className="text-lg">{text.noImage}</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        {selectedImage && (
          <div className="flex justify-center mt-8">
            <button className="bg-green-700 text-white px-10 py-3 rounded-full text-lg font-bold hover:bg-green-800 shadow-lg hover:scale-105 transition-all">
              {text.analyzeBtn}
            </button>
          </div>
        )}
      </div>

      <hr className="my-8 border-gray-300" />

      {/* MAP COMPONENT */}
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-6">
          {text.mapTitle}
        </h2>
        <Map />
      </div>
    </div>
  );
};

export default PdRice;
