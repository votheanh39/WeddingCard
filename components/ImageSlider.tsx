
import React, { useState, useRef } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import UploadIcon from './icons/UploadIcon';

interface ImageSliderProps {
  images: string[];
  isAdmin: boolean;
  onImageUpload: (file: File) => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, isAdmin, onImageUpload }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageUpload(file);
    }
  };

  if (!images || images.length === 0) {
    return (
        <div className="w-full aspect-[3/4] bg-stone-200 rounded-lg flex items-center justify-center text-stone-500 relative">
            <p>Chưa có ảnh nào.</p>
            {isAdmin && (
                <div className="absolute bottom-4 right-4">
                    <button
                        onClick={handleUploadClick}
                        className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-900 transition-colors shadow-lg"
                        aria-label="Tải ảnh lên"
                    >
                        <UploadIcon className="w-6 h-6" />
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </div>
            )}
        </div>
    );
  }

  return (
    <div className="w-full h-auto mx-auto relative group">
      <div style={{ backgroundImage: `url(${images[currentIndex]})` }} className="w-full aspect-[3/4] rounded-lg bg-center bg-cover duration-500 shadow-xl ring-1 ring-stone-200"></div>
      
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} className="w-6 h-6" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} className="w-6 h-6" />
      </div>

      <div className="flex top-4 justify-center py-4">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-1 ${currentIndex === slideIndex ? 'text-amber-800' : 'text-stone-400'}`}
          >
            ●
          </div>
        ))}
      </div>
      
      {isAdmin && (
        <div className="absolute bottom-4 right-4">
          <button
            onClick={handleUploadClick}
            className="bg-amber-800 text-white p-3 rounded-full hover:bg-amber-900 transition-colors shadow-lg"
            aria-label="Tải ảnh lên"
          >
            <UploadIcon className="w-6 h-6" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
