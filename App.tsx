
import React, { useState, useEffect, useCallback } from 'react';
import ImageSlider from './components/ImageSlider';
import Countdown from './components/Countdown';

const initialImages = [
  'https://picsum.photos/id/1015/800/600',
  'https://picsum.photos/id/1018/800/600',
  'https://picsum.photos/id/1025/800/600',
  'https://picsum.photos/id/1040/800/600',
];

const App: React.FC = () => {
  const [guestName, setGuestName] = useState<string>('Our Dearest Guest');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>(initialImages);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const admin = params.get('admin');

    if (name) {
      setGuestName(name.replace(/_/g, ' '));
    }
    if (admin === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const handleImageUpload = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const newImageUrl = URL.createObjectURL(file);
      setImages(prevImages => [...prevImages, newImageUrl]);
    } else {
      alert('Please upload a valid image file.');
    }
  }, []);

  const weddingDate = new Date('2025-07-20T17:00:00');

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen">
      <main className="max-w-3xl mx-auto p-4 sm:p-8">
        <header className="text-center my-12">
          <p className="text-lg text-stone-600 tracking-widest uppercase mb-4">Together with their families</p>
          <h1 className="text-5xl md:text-7xl font-serif text-amber-900">
            Dang Hoai Nem
          </h1>
          <div className="text-4xl my-4 text-stone-500">&</div>
          <h1 className="text-5xl md:text-7xl font-serif text-amber-900">
            Bui Le Na
          </h1>
          <p className="text-lg text-stone-600 tracking-widest uppercase mt-4">Invite you to celebrate their wedding</p>
        </header>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12 text-center ring-1 ring-stone-200">
            <h2 className="text-3xl font-serif text-amber-800 mb-4">Dear {guestName},</h2>
            <p className="text-stone-600 leading-relaxed">
                We would be honored to have you join us as we begin our new life together. Your presence is the greatest gift we could ask for.
            </p>
        </section>

        <section className="text-center my-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-2">Save The Date</h2>
            <p className="text-xl text-stone-600">July 20, 2025</p>
            <Countdown targetDate={weddingDate} />
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12 text-center ring-1 ring-stone-200">
          <h3 className="text-3xl font-serif text-amber-800 mb-6">Ceremony & Reception</h3>
          <p className="text-lg font-semibold text-stone-700">Saturday, July 20th, 2025</p>
          <p className="text-lg text-stone-600">at 5:00 PM</p>
          <div className="w-24 h-px bg-stone-300 mx-auto my-6"></div>
          <p className="text-lg font-semibold text-stone-700">Wedding Palace</p>
          <p className="text-lg text-stone-600">Ha Dong, Ha Noi</p>
        </section>

        <section className="my-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-6 text-center">Our Moments</h2>
            <ImageSlider 
                images={images} 
                isAdmin={isAdmin} 
                onImageUpload={handleImageUpload} 
            />
        </section>

        <footer className="text-center mt-16 mb-8">
            <p className="text-2xl font-serif text-amber-900">With Love,</p>
            <p className="text-2xl font-serif text-amber-900">Nem & Na</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
