import React from 'react';
import './homePage.css';
import {
  section1Data,
  section2Data,
  recommendedAudioData,
  section4Data,
  section5Data,
  section6Data,
  section7Data,
  section8Data,
  section9Data,
  section10Data,
  section11Data,
  section12Data,
  section13Data,
  section14Data
} from './homePageData';

export default function HomePage() {
  return (
    <div className="gbc-homepage">
            <section className="gbc-sec gbc-sec-1">
        <div className="sec-1-grid">
                    <div className="sec-1-left-col">
            {section1Data.left_column.map((card, idx) => (
              <div key={idx} className="news-card card-hover-effect">
                <div className="card-image-wrapper">
                  <img src={card.img} alt={card.title} className="card-img" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                  <span className="card-time">{card.time}</span>
                </div>
              </div>
            ))}
          </div>

                    <div className="sec-1-featured">
            <div className="news-card featured-card card-hover-effect">
              <div className="card-image-wrapper featured-img-wrapper">
                <img src={section1Data.featured.img} alt={section1Data.featured.title} className="card-img" />
              </div>
              <div className="card-content featured-content">
                <div className="breaking-news-badge">Breaking News</div>
                <h2 className="card-title featured-title">{section1Data.featured.title}</h2>
                <p className="card-desc featured-desc">{section1Data.featured.desc}</p>
              </div>
            </div>
          </div>

                    <div className="sec-1-right-col">
            {section1Data.right_column.map((card, idx) => (
              <div key={idx} className="compact-news-item">
                <h4 className="compact-title">{card.title}</h4>
                <p className="compact-desc">{card.desc}</p>
                <span className="compact-time">{card.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="gbc-sec gbc-sec-2">
        <div className="sec-header">
          <h2 className="sec-heading">ONLY FROM THE GBC</h2>
          <div className="sec-header-line"></div>
        </div>
        <div className="sec-2-grid">
          {section2Data.map((card, idx) => (
            <div key={idx} className="news-card row-card card-hover-effect">
              <div className="card-image-wrapper large-img-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title large-title">{card.title}</h3>
                <p className="card-desc large-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-audio">
        <div className="sec-header">
          <h2 className="sec-heading audio-heading">
            <svg className="audio-play-symbol" viewBox="0 0 24 24" fill="#FF0000">
              <path d="M8 5v14l11-7z" />
            </svg>
            RECOMMENDED AUDIO
          </h2>
          <div className="sec-header-line"></div>
        </div>
        <div className="audio-scroll-container">
          {recommendedAudioData.map((card, idx) => (
            <div key={idx} className="audio-card card-hover-effect">
              <div className="audio-img-wrapper">
                <img src={card.img} alt={card.episode} className="audio-img" />
                <div className="audio-play-overlay">
                  <div className="play-button-circle">
                    <svg viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="audio-content">
                <span className="audio-show-name">{card.show}</span>
                <h4 className="audio-episode-title">{card.episode}</h4>
                <span className="audio-duration">{card.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-4">
        <div className="sec-4-grid-top">
          {section4Data.top_row.map((card, idx) => (
            <div key={idx} className={`news-card card-hover-effect ${idx === 1 ? 'span-two-cols' : ''}`}>
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="sec-4-grid-bottom">
          {section4Data.bottom_row.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper small-img-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title compact-title-sm">{card.title}</h3>
                <p className="card-desc compact-desc-sm">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-5">
        <div className="five-col-grid">
          {section5Data.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title compact-title-sm">{card.title}</h3>
                <p className="card-desc compact-desc-sm">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-6">
        <div className="sec-6-grid">
                    <div className="sec-6-left">
            <div className="news-card featured-card card-hover-effect">
              <div className="card-image-wrapper large-img-wrapper">
                <img src={section6Data.left_featured.img} alt={section6Data.left_featured.title} className="card-img" />
              </div>
              <div className="card-content">
                <h2 className="card-title large-title">{section6Data.left_featured.title}</h2>
                <p className="card-desc large-desc">{section6Data.left_featured.desc}</p>
                <span className="card-time">{section6Data.left_featured.time}</span>
              </div>
            </div>
          </div>

                    <div className="sec-6-right">
            {section6Data.right_column.map((card, idx) => (
              <div key={idx} className="news-card card-hover-effect">
                <div className="card-image-wrapper">
                  <img src={card.img} alt={card.title} className="card-img" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                  <span className="card-time">{card.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <section className="gbc-sec gbc-sec-7">
        <div className="featured-full-layout bg-light-gray">
          <div className="layout-content">
            <h2 className="featured-layout-title">{section7Data.title}</h2>
            <p className="featured-layout-desc">{section7Data.desc}</p>
            <div className="featured-layout-meta">
              <img src={section7Data.logo_img} alt="UN Logo" className="logo-badge" />
              <span className="featured-layout-time">{section7Data.time}</span>
            </div>
          </div>
          <div className="layout-image-container">
            <img src={section7Data.img} alt={section7Data.title} className="layout-img" />
          </div>
        </div>
      </section>

            <section className="gbc-sec gbc-sec-8">
        <div className="three-col-grid">
          {section8Data.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-media">
        <div className="media-library-header-container">
          <div className="media-library-pill">
            <span className="live-dot"></span>
            MEDIA LIBRARY
          </div>
        </div>
        <div className="media-library-grid">
          {section9Data.map((card, idx) => (
            <div key={idx} className="media-overlay-card card-hover-effect">
              <img src={card.img} alt={card.title} className="media-bg-img" />
              <div className="media-card-overlay">
                <div className="media-icon-play">
                  <svg viewBox="0 0 24 24" fill="#FFFFFF">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h4 className="media-card-title">{card.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-10">
        <div className="six-col-grid">
          {section10Data.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper small-img-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title compact-title-sm">{card.title}</h3>
                <p className="card-desc compact-desc-sm">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-11">
        <div className="four-col-grid">
          {section11Data.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-12">
        <h2 className="centered-showcase-title">Global Defense News</h2>
        <div className="featured-full-layout bg-light-blue reverse-layout">
          <div className="layout-content">
            <h2 className="featured-layout-title">{section12Data.title}</h2>
            <p className="featured-layout-desc">{section12Data.desc}</p>
            <div className="featured-layout-meta">
              <img src={section12Data.logo_img} alt="NATO Emblem" className="logo-badge circular-logo" />
              <span className="featured-layout-time">{section12Data.time}</span>
            </div>
          </div>
          <div className="layout-image-container">
            <img src={section12Data.img} alt={section12Data.title} className="layout-img" />
          </div>
        </div>
      </section>

            <section className="gbc-sec gbc-sec-13">
        <div className="four-col-grid">
          {section13Data.map((card, idx) => (
            <div key={idx} className="news-card card-hover-effect">
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
                <span className="category-overlay-badge">{card.category}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="gbc-sec gbc-sec-14">
        <div className="four-col-grid">
          {section14Data.map((card, idx) => (
            <div key={idx} className={`news-card card-hover-effect staggered-card ${card.text_first ? 'text-first' : 'image-first'}`}>
              <div className="card-image-wrapper">
                <img src={card.img} alt={card.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <span className="card-time">{card.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
