import { Helmet } from 'react-helmet-async';

function Registration() {
  return (
    <>
      <Helmet>
        <title>競賽報名 | 雲林縣國民中學生涯及技藝教育資源網</title>
        <meta name="description" content="雲林縣國民中學技藝競賽報名，提供競賽項目說明、報名資格及注意事項等完整資訊。" />
        <link rel="canonical" href="https://jhssc.ylc.edu.tw/registration" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="競賽報名 | 雲林縣國民中學生涯及技藝教育資源網" />
        <meta property="og:description" content="雲林縣國民中學技藝競賽報名，提供競賽項目說明、報名資格及注意事項等完整資訊。" />
        <meta property="og:url" content="https://jhssc.ylc.edu.tw/registration" />
      </Helmet>
      <div className="container">
        <h1>競賽報名</h1>
        <p>歡迎來到競賽報名頁面！在這裡您可以進行競賽報名操作。</p>
      </div>
    </>
  );
}

export default Registration;
