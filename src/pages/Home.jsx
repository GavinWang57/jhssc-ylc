import { Helmet } from 'react-helmet-async';
import Banner from '../components/home/Banner';

const SITE_NAME = '雲林縣國民中學生涯及技藝教育資源網';
const SITE_URL = 'https://jhssc.ylc.edu.tw';
const DESCRIPTION = '雲林縣國民中學生涯及技藝教育資源網，提供技藝教育資訊、競賽活動、職業試探示範中心介紹、技藝教育新聞及技職影片等完整教育資源。';

function Home() {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="雲林縣,技藝教育,生涯教育,職業試探,技職教育,競賽報名,國民中學,技藝競賽" />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_NAME} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:site_name" content={SITE_NAME} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_NAME} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />

        {/* JSON-LD 結構化資料 */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'GovernmentOrganization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
          description: DESCRIPTION,
          address: {
            '@type': 'PostalAddress',
            addressRegion: '雲林縣',
            addressCountry: 'TW',
          },
        })}</script>
      </Helmet>

      <div className="container py-5">
        {/* 輪播圖區 */}
        <section className="container">
          <Banner />
        </section>

        <div className="container my-5">
          {/* 快速連結區 */}
          <section id="quick-links" className="mb-5">
            {/* Quick Links */}
          </section>

          {/* 最新公告 */}
          <section id="bulletin-top" className="mb-5">
            <h2 className="h3 fw-bold mb-4">最新公告</h2>
            {/* 公告列表 */}
          </section>

          {/* 職業試探示範中心 */}
          <section id="demonstration-center-top" className="mb-5">
            <h2 className="h3 fw-bold mb-4">職業試探示範中心</h2>
            {/* 中心卡片 */}
          </section>

          {/* 技藝教育新聞 */}
          <section id="news-top" className="mb-5">
            <h2 className="h3 fw-bold mb-4">技藝教育新聞</h2>
            {/* 新聞卡片 */}
          </section>

          {/* 技職影片 */}
          <section id="videos-top" className="mb-5">
            <h2 className="h3 fw-bold mb-4">技職影片</h2>
            {/* 影片嵌入 */}
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
