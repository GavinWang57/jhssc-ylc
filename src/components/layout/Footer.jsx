function Footer() {
  const currentYear = new Date().getFullYear();

  const externalLinks = [
    { name: "生涯發展教育", url: "https://career.moe.edu.tw/" },
    { name: "國中技藝教育", url: "https://www.k12ea.gov.tw/" },
    { name: "技職大玩JOB", url: "https://job.tvbs.com.tw/" },
    { name: "國中畢業生適性入學宣導網站", url: "https://adapt.k12ea.gov.tw/" },
    { name: "技專校院招生策略委員會", url: "https://www.techadmi.edu.tw/" },
    { name: "技專校院招生委員會聯合會", url: "https://www.jctv.ntut.edu.tw/" },
    { name: "雲林縣政府", url: "https://www.yunlin.gov.tw/" },
    { name: "雲林縣政府教育處", url: "https://www.boe.ylc.edu.tw/" },
  ];

  return (
    <footer className="bg-primary-700 text-neutral-100 py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Logo 與機關資訊 */}
          <div className="col-lg-4 mb-1 d">
            <img
              src="images/logoYunLin.png"
              alt="雲林縣政府"
              height="60"
              className="mb-3"
            />
            <h5 className="fw-bold">雲林縣政府教育處</h5>
            <p className="text-neutral-300">
              <i className="bi bi-geo-alt-fill me-2"></i>
              640201 雲林縣斗六市雲林路二段515號
            </p>
            <a
              href="https://maps.google.com/?q=雲林縣斗六市雲林路二段515號"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-100 text-decoration-none"
            >
              <i className="bi bi-map me-2 text-warning"></i>
              查看地圖
            </a>
          </div>

          {/* 外部連結 */}
          <div className="col-lg-8">
            <h5 className="fw-bold mb-3 text-neutral-300 fw-500">相關連結</h5>
            <div className="row">
              {externalLinks.map((link, index) => (
                <div className="col-md-6 mb-2" key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-neutral-300 d-block"
                  >
                    <i className="bi bi-arrow-right-circle me-2"></i>
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 版權聲明 */}
        <div className="row mt-4 pt-4 border-top">
          <div className="col text-center text-neutral-300">
            <p className="mb-0">© {currentYear} 雲林縣政府教育處 版權所有</p>
            <p className="mb-0 small">一技在身，幸福一生</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
