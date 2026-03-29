import { Helmet } from 'react-helmet-async';

function Videos() {
  return (
    <>
      <Helmet>
        <title>技職影片 | 雲林縣國民中學生涯及技藝教育資源網</title>
        <meta name="description" content="雲林縣技職教育精選影片，提供職業介紹、技藝示範及生涯探索相關影音資源。" />
        <link rel="canonical" href="https://jhssc.ylc.edu.tw/videos" />
        <meta property="og:title" content="技職影片 | 雲林縣國民中學生涯及技藝教育資源網" />
        <meta property="og:description" content="雲林縣技職教育精選影片，提供職業介紹、技藝示範及生涯探索相關影音資源。" />
        <meta property="og:url" content="https://jhssc.ylc.edu.tw/videos" />
      </Helmet>
      <div className="container">
        <h1>技職影片</h1>
        <p>歡迎來到技職影片頁面！在這裡您可以找到最新的技職影片和資源。</p>
      </div>
    </>
  );
}

export default Videos;
