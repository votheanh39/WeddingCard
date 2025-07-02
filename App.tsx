
import React, { useState, useEffect, useCallback } from 'react';
import ImageSlider from './components/ImageSlider';
import Countdown from './components/Countdown';

const initialImages = [
  '/512076695_1945162932967210_7261401508778253852_n.jpg',
  '/512234748_24350606611192014_5700611619477554383_n.jpg',
  '/512701718_2711709819026386_5016352024319123039_n.jpg',
  '/513111516_1539268823483161_5053458759972964968_n.jpg',
  '/513304312_2222014114885120_4308547420775683872_n.jpg',
  '/514226705_1248082592817943_7403179734982291791_n.jpg',
  '/514393770_1075732177308897_6387695316956925825_n.jpg',
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
      setImages((prevImages: string[]) => [...prevImages, newImageUrl]);
    } else {
      alert('Please upload a valid image file.');
    }
  }, []);

  const weddingDate = new Date('2025-07-20T17:00:00');

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen">
      <main className="max-w-3xl mx-auto p-4 sm:p-8">
        <header className="text-center my-12">
          <p className="text-lg text-stone-600 tracking-widest uppercase mb-4">Cùng với gia đình hai bên</p>
          <h1 className="text-4xl md:text-5xl text-amber-900" style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 700 }}>
  Dang Hoai Nem
</h1>
<div className="text-3xl my-2 text-stone-500">&</div>
<h1 className="text-4xl md:text-5xl text-amber-900" style={{ fontFamily: 'Great Vibes, cursive', fontWeight: 700 }}>
  Bui Le Na
</h1>
          <p className="text-lg text-stone-600 tracking-widest uppercase mt-4">Trân trọng mời</p>
        </header>

        <div className="text-center my-12">
          <h2 className="text-4xl md:text-5xl mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>{guestName}</h2>
        </div>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12 text-center ring-1 ring-stone-200">
          <div className="flex flex-col items-center my-6">
            <div className="flex flex-row justify-center items-center gap-8 md:gap-16 w-full">
  {/* Time */}
  <div className="flex flex-col items-center flex-shrink-0 w-20 md:w-28">
    <div className="w-full border-t-2 border-amber-300 mb-2"></div>
    <div className="text-3xl md:text-5xl font-bold text-amber-700 font-serif py-2 whitespace-nowrap">17:00</div>
    <div className="w-full border-b-2 border-amber-300 mt-2"></div>
  </div>
  {/* Day/Date/Year column */}
  <div className="flex flex-col items-center px-4">
    <span className="text-lg md:text-xl text-amber-600 font-semibold whitespace-nowrap">Thứ Bảy</span>
    <span className="text-6xl md:text-8xl font-extrabold text-amber-900 leading-none drop-shadow-lg" style={{letterSpacing: '0.05em'}}>20</span>
    <span className="text-lg md:text-xl text-amber-600 font-semibold whitespace-nowrap">Năm 2025</span>
  </div>
  {/* Month */}
  <div className="flex flex-col items-center flex-shrink-0 w-20 md:w-28">
    <div className="w-full border-t-2 border-amber-300 mb-2"></div>
    <div className="text-2xl md:text-4xl font-bold text-amber-700 font-serif py-2 whitespace-nowrap">Tháng 7</div>
    <div className="w-full border-b-2 border-amber-300 mt-2"></div>
  </div>
</div>
          </div>
          {/* <div className="mt-4">
            <Countdown targetDate={weddingDate} />
          </div> */}
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 my-12 text-center ring-2 ring-amber-200 border border-amber-100">
  <h3 className="text-2xl md:text-3xl font-serif text-amber-800 mb-3 tracking-wide">Địa điểm tổ chức</h3>
  <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6">
    <div className="flex-1">
      <p className="text-lg md:text-xl text-stone-700 mb-3 leading-relaxed">
        <span className="font-semibold text-amber-800">Trung tâm tiệc cưới</span><br/>
        <span>Hà Đông, Hà Nội</span>
      </p>
      <div className="mt-2 text-stone-500 text-sm italic">Vui lòng quét mã QR để xem bản đồ</div>
    </div>
    <div className="flex-1 flex flex-col items-center">
      <div className="border-2 border-amber-300 rounded-xl p-2 bg-stone-50 shadow-inner">
        <img src="/images/qr_location.jpg" alt="QR địa điểm tổ chức" className="w-40 md:w-56 rounded-lg shadow-sm" />
      </div>
      <div className="mt-2 text-xs text-stone-400">Quét mã để dẫn đường</div>
    </div>
  </div>
</section>

<div className="flex justify-center my-8">
  <Countdown targetDate={weddingDate} />
</div>

<section className="my-12">
            <h2 className="text-4xl font-serif text-stone-800 mb-6 text-center">Khoảnh khắc của chúng tôi</h2>
            <ImageSlider 
                images={images} 
                isAdmin={isAdmin} 
                onImageUpload={handleImageUpload} 
            />
        </section>

        <footer className="text-center mt-16 mb-8">
            <p className="text-2xl font-serif text-amber-900">Thân ái,</p>
            <p className="text-2xl font-serif text-amber-900">Nem & Na</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
