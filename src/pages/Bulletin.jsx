import { Helmet } from 'react-helmet-async';

function Bulletin() {
  return (
    <>
      <Helmet>
        <title>公告項目 | 雲林縣國民中學生涯及技藝教育資源網</title>
        <meta name="description" content="雲林縣技藝教育最新公告項目，包含競賽、活動及教育政策相關通知。" />
        <link rel="canonical" href="https://jhssc.ylc.edu.tw/bulletin" />
        <meta property="og:title" content="公告項目 | 雲林縣國民中學生涯及技藝教育資源網" />
        <meta property="og:description" content="雲林縣技藝教育最新公告項目，包含競賽、活動及教育政策相關通知。" />
        <meta property="og:url" content="https://jhssc.ylc.edu.tw/bulletin" />
      </Helmet>
      <div className="container">
        <h1>公告</h1>
        <p>歡迎來到公告頁面！在這裡您可以找到最新的更新和公告。</p>
      </div>
    </>
  );
}

export default Bulletin;
