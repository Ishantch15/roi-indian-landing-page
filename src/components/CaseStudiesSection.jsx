export default function CaseStudiesSection() {
  const studies = [
    {
      tag: 'E-Commerce SEO',
      metric: '£5.1M',
      label: 'Attributed Goal Value',
      title: 'personalise-wholesaleblanks.co.uk: £5.1M Goal Value via Technical & Content SEO',
      desc: 'Technical fixes, entity-rich on-page updates, and internal linking grew organic impressions by +823.99K and clicks by +16.75K — with 6,200 conversions driven in the period.',
      href: 'https://roispectrum.com/blogs/seo-case-study-personalise-wholesaleblanks-co-uk',
      // stats: [
      //   { num: '105.9K', label: 'Total Sessions' },
      //   { num: '56.6K', label: 'Organic Sessions' },
      //   { num: '54%', label: 'Organic Share' },
      // ]
    },
    {
      tag: 'Local SEO · B2B',
      metric: '3.5x',
      label: 'ROI Achieved',
      title: 'MCA Group: 145% Traffic Growth for Commercial Cleaning Brand in Toronto & GTA',
      desc: '12-month multi-channel SEO campaign combining technical fixes, local SEO, topical authority content, and CRO drove a 145% increase in website traffic and 72% higher conversion rate.',
      href: 'https://roispectrum.com/blogs/mca-group-commercial-cleaning-toronto-gta',
      // stats: [
      //   { num: '+145%', label: 'Traffic Growth' },
      //   { num: '+72%', label: 'Conversion Rate' },
      //   { num: '3.5x', label: 'ROI' },
      // ]
    },
    {
      tag: 'Local SEO',
      metric: '8.2K',
      label: 'Sessions in 8 Months',
      title: 'North County Spa: Zero to 8.2K Organic Sessions in 8 Months',
      desc: '15 keywords ranking in Google Top 10 and 5.8K engaged sessions with 70%+ engagement rate — all within 8 months of campaign launch.',
      href: 'https://roispectrum.com/blogs/north-county-spa-8-month-seo-case-study',
      // stats: [
      //   { num: '15', label: 'Top 10 Keywords' },
      //   { num: '5.8K', label: 'Engaged Sessions' },
      //   { num: '70%+', label: 'Engagement Rate' },
      // ]
    },
    {
      tag: 'Health & Wellness',
      metric: '24.6K',
      label: 'Organic Clicks',
      title: 'Energy Men Spa (NYC): 37.1K Sessions & 11.9K Conversions via Targeted SEO',
      desc: 'Targeted local and national SEO strategy drove 37.1K sessions with 51.9% engagement rate and 11.9K conversions through optimised content and authority building.',
      href: 'https://roispectrum.com/blogs/energy-men-spa-nyc-seo-case-study',
      // stats: [
      //   { num: '37.1K', label: 'Total Sessions' },
      //   { num: '51.9%', label: 'Engagement Rate' },
      //   { num: '11.9K', label: 'Conversions' },
      // ]
    },
  ];

  return (
    <section className="case-studies">
      <div className="case-studies-container">
        <div className="case-header">
          <div>
            <h2 className="section-h2">Case <span className="italic-orange">Studies</span></h2>
            <p className="section-p" style={{ marginTop: '8px' }}>Real data. Real growth. High-impact results.</p>
          </div>
          <a href="https://roispectrum.com/blogs" className="case-link" target="_blank" rel="noopener noreferrer">View All Case Studies →</a>
        </div>

        <div className="case-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {studies.map((study, i) => (
            <div key={i} className="case-card">
              <div className="case-card-header">
                <div className="case-tag">{study.tag}</div>
                <div className="case-metric">
                  <div className="case-metric-num">{study.metric}</div>
                  <div className="case-metric-label">{study.label}</div>
                </div>
              </div>
              <h4 className="case-card-h4">{study.title}</h4>
              <p className="case-card-p">{study.desc}</p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                padding: '16px',
                background: '#faf8ff',
                borderRadius: '12px',
                border: '1px solid #f0eeff',
              }}>
                {/* {study.stats.map((s, j) => (
                  <div key={j} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#ff6600', lineHeight: 1.2 }}>{s.num}</div>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#999', marginTop: '4px', lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))} */}
              </div>

              <a
                href={study.href}
                target="_blank"
                rel="noopener noreferrer"
                className="case-link"
                style={{ marginTop: '4px', display: 'inline-block' }}
              >
                Read Case Study →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
