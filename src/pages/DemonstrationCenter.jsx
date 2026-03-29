import { Helmet } from 'react-helmet-async';

function DemonstrationCenter() {
  return (
    <>
      <Helmet>
        <title>職業試探示範中心 | 雲林縣國民中學生涯及技藝教育資源網</title>
        <meta name="description" content="雲林縣職業試探示範中心介紹，提供國中生多元職業體驗與技藝試探的學習資源與活動資訊。" />
        <link rel="canonical" href="https://jhssc.ylc.edu.tw/demonstration-center" />
        <meta property="og:title" content="職業試探示範中心 | 雲林縣國民中學生涯及技藝教育資源網" />
        <meta property="og:description" content="雲林縣職業試探示範中心介紹，提供國中生多元職業體驗與技藝試探的學習資源與活動資訊。" />
        <meta property="og:url" content="https://jhssc.ylc.edu.tw/demonstration-center" />
      </Helmet>
      <div className="container">
        <h1>職業試探示範中心</h1>
        <p>歡迎來到職業試探示範中心頁面！在這裡您可以找到最新的中心資訊和活動。</p>
      </div>
    </>
  );
}

export default DemonstrationCenter;
