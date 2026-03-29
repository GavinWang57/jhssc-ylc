import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // 整理出的三個精簡副標題
  const subtitles = [
    "從實作中發現潛能，在體驗中預見未來",
    "落實職探教育向下延伸，協助學子探索性向、擇其所適",
    "開啟職涯的第一扇窗：實境教學 × 多元體驗 × 專業試探"
  ];

  // 自動輪播邏輯
  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % subtitles.length);
        setVisible(true);
      }, 400);
    }, 3500); // 每 3.5 秒切換一次
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="position-relative w-100 overflow-hidden bg-dark d-flex align-items-center px-5 text-white"
      style={{ height: '400px' }}
    >
      {/* 背景圖層（可換成您的校舍背景圖並加上深色遮罩） */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          // backgroundImage: "url('/path-to-your-school-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      {/* 文字內容區 */}
      <div className="position-relative" style={{ zIndex: 1, maxWidth: '48rem' }}>
        {/* 主標題 */}
        <h1 className="display-5 fw-bold mb-4 lh-sm">
          西螺國中 <br />
          <span className="text-primary">「職業試探與體驗示範中心」</span>
        </h1>

        {/* 自動輪換副標題區 */}
        <div className="d-flex align-items-center" style={{ minHeight: '2.5rem' }}>
          <p
            className="fs-5 fw-light text-light border-start border-primary border-3 ps-3 fst-italic mb-0"
            style={{
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-8px)',
            }}
          >
            {subtitles[index]}
          </p>
        </div>

        {/* 呼籲行動按鈕 */}
        <button className="btn btn-primary rounded-pill px-4 py-2 fw-medium fs-5 mt-4">
          了解更多中心理念
        </button>
      </div>

      {/* 右側裝飾性元素（可放置您圖片右側的圓圈圖示） */}
      <div
        className="d-none d-lg-block position-absolute end-0 me-5 pe-none"
        style={{ opacity: 0.6, zIndex: 1 }}
      >
        {/* 這裡可放置右側的 SVG 圓圈結構 */}
      </div>
    </div>
  );
};

export default Banner;
