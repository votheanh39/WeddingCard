
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
  const [guestName, setGuestName] = useState<string>('Bạn Thế Anh');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>(initialImages);
  // showToast: false | true | 'address'
  const [showToast, setShowToast] = useState<false | true | 'address'>(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    const admin = params.get('admin');

    if (to) {
      setGuestName(to.replace(/_/g, ' '));
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
        <header className="text-center my-8">
          <div className="flex justify-center mb-3">
            <img src="/images/wedding-ring.png" alt="Wedding Rings" className="w-16 md:w-24 mx-auto drop-shadow-lg" />
          </div>
          <p className="text-lg text-stone-600 tracking-widest uppercase mb-4">Cùng với gia đình hai bên</p>
          <h1
            className="text-3xl md:text-5xl text-amber-900 font-light tracking-widest mb-2"
            style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            Đặng Hoài Nam
          </h1>
          <div className="text-3xl my-2 text-stone-500 font-bold">&</div>
          <h1
            className="text-3xl md:text-5xl text-amber-900 font-light tracking-widest mt-2"
            style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            Bùi Lê Na
          </h1>
          <p className="text-lg text-stone-600 tracking-widest uppercase mt-4">Trân trọng mời</p>
        </header>

        <div className="text-center my-6">
          <h2
            className="text-3xl md:text-5xl mb-1 text-amber-900 font-light tracking-widest"
            style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            {guestName}
          </h2>
        </div>

        <section className="bg-gradient-to-br from-rose-50 to-amber-50 shadow-lg shadow-amber-200/40 rounded-2xl p-6 md:p-8 my-8 text-center ring-4 ring-amber-100/60 border-2 border-amber-300">
          <div className="flex flex-col items-center my-2">
            <span className="text-3xl md:text-4xl mb-2" role="img" aria-label="Calendar">📅</span>
            <div className="flex flex-row justify-center items-center gap-4 md:gap-8 w-full max-w-xs mx-auto">
              {/* Time */}
              <div className="flex flex-col items-center flex-shrink-0 w-20 md:w-28">
                <div className="w-full border-t-2 border-amber-300 mb-2"></div>
                <div className="text-3xl md:text-5xl font-bold text-amber-700 font-serif py-2 whitespace-nowrap">17:00</div>
                <div className="w-full border-b-2 border-amber-300 mt-2"></div>
              </div>
              {/* Day/Date/Year column */}
              <div className="flex flex-col items-center px-4">
                <span className="text-lg md:text-xl text-amber-600 font-semibold whitespace-nowrap">Chủ Nhật</span>
                <span className="text-6xl md:text-8xl font-extrabold text-amber-900 leading-none drop-shadow-lg" style={{ letterSpacing: '0.05em' }}>20</span>
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
        </section>
        <div className="flex justify-center my-8">
          <Countdown targetDate={weddingDate} />
        </div>

        <section className="bg-gradient-to-br from-rose-50 to-amber-50 shadow-lg shadow-amber-200/40 rounded-2xl p-6 md:p-8 my-8 text-center ring-4 ring-amber-100/60 border-2 border-amber-300">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-2">
              <span className="text-3xl md:text-4xl mb-2" role="img" aria-label="Location">📍</span>
            </div>
            <p className="text-lg md:text-xl text-stone-700 mb-3 leading-relaxed">
              <span className="block">NHÀ HÀNG</span>
              <span className="block font-semibold text-amber-800 text-2xl md:text-3xl" style={{ fontWeight: 900, letterSpacing: '1px' }}>CẦU AM PALACE</span>
              <span className="block">SẢNH TẦNG 3</span>
              <span className="block">SỐ 9 CHU VĂN AN, YẾT KIÊU, HÀ ĐÔNG, HÀ NỘI</span>
            </p>
            <div className="border-2 border-amber-300 rounded-xl p-2 bg-stone-50 shadow-inner my-4 flex justify-center items-center">
              <img src="/images/qr_location.jpg" alt="QR địa điểm tổ chức" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-sm" />
            </div>
            <div className="flex flex-col items-center gap-2 w-full md:w-64 mx-auto">
              <a
                href="https://maps.app.goo.gl/wABzVA7dVAALayNe8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow transition-colors text-base md:text-lg font-semibold flex items-center justify-center gap-2 mb-1"
                  type="button"
                >
                  Mở bản đồ
                </button>
              </a>
              <button
                className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow transition-colors text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                onClick={async () => {
                  const addressText = `NHÀ HÀNG CẦU AM PALACE\nSẢNH TẦNG 3\nSỐ 9 CHU VĂN AN, YẾT KIÊU, HÀ ĐÔNG, HÀ NỘI`;
                  const mapUrl = 'https://maps.app.goo.gl/wABzVA7dVAALayNe8';
                  if (navigator.share) {
                    try {
                      await navigator.share({
                        title: 'Địa chỉ tiệc cưới Nam & Na',
                        text: `${addressText}`,
                        url: mapUrl,
                      });
                      
                    } catch (e) {
                      // fallback to clipboard if share is cancelled or fails
                      navigator.clipboard.writeText(`${addressText}\n${mapUrl}`);
                      
                    }
                  } else {
                    navigator.clipboard.writeText(`${addressText}\n${mapUrl}`);

                  }
                }}
                type="button"
              >
                Chia sẻ địa chỉ
              </button>
            </div>
          </div>
        </section>

        <section className="my-8">
          <div className="flex flex-col items-center mb-2">
            <span className="text-3xl md:text-4xl mb-2" role="img" aria-label="Album">📸</span>
            <h2
              className="text-2xl md:text-3xl text-amber-900 font-light tracking-widest mb-6 text-center whitespace-nowrap"
              style={{
                fontFamily: 'Montserrat, Arial, sans-serif',
                fontWeight: 400,
                textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
                letterSpacing: '0.08em',
                lineHeight: 1.1
              }}
            >
              Khoảnh khắc của chúng tôi
            </h2>
          </div>
          <ImageSlider
            images={images}
            isAdmin={isAdmin}
            onImageUpload={handleImageUpload}
          />
        </section>

        <section className="bg-gradient-to-br from-rose-50 to-amber-50 shadow-lg shadow-amber-200/40 rounded-2xl p-6 md:p-8 my-8 text-center ring-4 ring-amber-100/60 border-2 border-amber-300">
          <div className="flex flex-col items-center mb-2">
            <span className="text-3xl md:text-4xl mb-2" role="img" aria-label="Gift">🎁</span>
          </div>
          <p className="text-lg md:text-xl text-stone-700 mb-4 leading-relaxed">
             Không cần phải ở gần, chỉ cần bạn nhớ đến là tụi mình đã vui lắm rồi. Xin cảm ơn bạn thật nhiều! 💖
          </p>
          <div className="flex flex-col items-center">
            <div className="border-2 border-amber-300 rounded-xl p-2 bg-stone-50 shadow-inner inline-block mb-4">
              <img src="/images/qr_bank.png" alt="QR chuyển khoản mừng cưới" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-sm" />
            </div>
            <div className="flex flex-col items-center gap-2 w-full md:w-64 mx-auto">
              <a
                href="https://dl.vietqr.io/pay?app=acb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow transition-colors text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                  type="button"
                >
                  Chuyển khoản ngay
                </button>
              </a>
              <button
                className="w-full px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg shadow transition-colors text-base md:text-lg font-semibold flex items-center justify-center gap-2"
                onClick={() => {
                  navigator.clipboard.writeText('232551789');
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 2000);
                }}
                type="button"
              >
                Sao chép số tài khoản
              </button>
            </div>
            </div>
            {(showToast === true) && (
              <div className="fixed left-1/2 bottom-8 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold z-50 transition-opacity animate-fade-in-out">
                Đã sao chép số tài khoản!
              </div>
            )}

        </section>

        <footer className="text-center mt-16 mb-8">
          <p
            className="text-2xl md:text-4xl text-amber-900 font-light tracking-widest mb-2"
            style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            Thân ái,
          </p>
          <p
            className="text-2xl md:text-4xl text-amber-900 font-light tracking-widest"
            style={{
              fontFamily: 'Montserrat, Arial, sans-serif',
              fontWeight: 400,
              textShadow: '0 2px 8px rgba(0,0,0,0.10), 0 1px 0 #fff',
              letterSpacing: '0.08em',
              lineHeight: 1.1
            }}
          >
            Nam & Na
          </p>
        </footer>
      </main>
    </div>
  );
};

// Simple fade-in-out animation for the toast
// Add this style block if not already present
const toastStyle = `
@keyframes fade-in-out {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
.animate-fade-in-out {
  animation: fade-in-out 2s;
}
`;

export default (props: any) => <>
  <style>{toastStyle}</style>
  <App {...props} />
</>;
