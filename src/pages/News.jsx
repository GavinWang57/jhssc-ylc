import { Helmet } from 'react-helmet-async';

function News() {
  return (
    <>
      <Helmet>
        <title>技藝教育新聞 | 雲林縣國民中學生涯及技藝教育資源網</title>
        <meta name="description" content="雲林縣技藝教育最新新聞，涵蓋技職教育政策、競賽成果及校園技藝活動報導。" />
        <link rel="canonical" href="https://jhssc.ylc.edu.tw/news" />
        <meta property="og:title" content="技藝教育新聞 | 雲林縣國民中學生涯及技藝教育資源網" />
        <meta property="og:description" content="雲林縣技藝教育最新新聞，涵蓋技職教育政策、競賽成果及校園技藝活動報導。" />
        <meta property="og:url" content="https://jhssc.ylc.edu.tw/news" />
      </Helmet>
      <div className="container">
        <h1>新聞</h1>
        <p>歡迎來到新聞頁面！在這裡您可以找到最新的新聞和更新。</p>
      </div>
    </>
  );
}

export default News;
