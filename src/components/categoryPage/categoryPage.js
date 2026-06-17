import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../homePage/homePage.css';
import './categoryPage.css';
import { categoryPagesData, subCategoryPagesData, resolveImage } from './categoryPageData';

export default function CategoryPage() {
  const [activeSub, setActiveSub] = useState(null);
  const location = useLocation();
  const path = location.pathname.substring(1);
  const categoryData = categoryPagesData[path];

  if (!categoryData) {
    return (
      <div className="gbc-category-page error-page">
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-desc">The requested page category does not exist.</p>
      </div>
    );
  }
  const currentSections = activeSub && subCategoryPagesData[activeSub]
    ? subCategoryPagesData[activeSub].sections
    : categoryData.sections;
  return (
    <div className="gbc-category-page">

      {categoryData.subCategories && categoryData.subCategories.length > 0 && (
        <div className="category-subnav-bar">
          <div className="category-subnav-container">

            {categoryData.subCategories.map((sub, idx) => {
              // Превращаем "Podcast Categories" в "podcast-categories" (ключ для данных)
              const subSlug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-');

              return (
                <a
                  key={idx}
                  href={`#${subSlug}`}
                  className={`category-subnav-link ${activeSub === subSlug ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); // Предотвращаем перезагрузку
                    setActiveSub(subSlug); // Меняем отображаемые данные
                  }}
                >
                  {sub}
                </a>
              );
            })}
          </div>
        </div>
      )}

      <div className="gbc-homepage">
        {/* Маппим сохраненные в currentSections данные */}
        {currentSections && currentSections.map((section, secIdx) => {
          const { layout, data } = section;

          if (layout === 'newspaper') {
            return (
              <section key={secIdx} className="gbc-sec gbc-sec-1">
                <div className="sec-1-grid">
                  <div className="sec-1-left-col">
                    {data.left_column.map((card, idx) => (
                      <div key={idx} className="news-card card-hover-effect">
                        {card.img && (
                          <div className="card-image-wrapper">
                            <img src={resolveImage(card.img)} alt={card.title} className="card-img" />
                          </div>
                        )}
                        <div className="card-content">
                          <h3 className="card-title">{card.title}</h3>
                          <p className="card-desc">{card.desc}</p>
                          {card.time && <span className="card-time">{card.time}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sec-1-featured">
                    <div className="news-card featured-card card-hover-effect">
                      {data.featured.img && (
                        <div className="card-image-wrapper featured-img-wrapper">
                          <img src={resolveImage(data.featured.img)} alt={data.featured.title} className="card-img" />
                        </div>
                      )}
                      <div className="card-content featured-content">
                        <div className="breaking-news-badge">Breaking News</div>
                        <h2 className="card-title featured-title">{data.featured.title}</h2>
                        <p className="card-desc featured-desc">{data.featured.desc}</p>
                        {data.featured.time && <span className="card-time">{data.featured.time}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="sec-1-right-col">
                    {data.right_column.map((card, idx) => (
                      <div key={idx} className="compact-news-item">
                        <h4 className="compact-title">{card.title}</h4>
                        <p className="compact-desc">{card.desc}</p>
                        <span className="compact-time">{card.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (layout === 'feature-left-text' || layout === 'feature-right-text') {
            return (
              <section key={secIdx} className="gbc-sec">
                <div className={`featured-full-layout bg-light-gray ${layout === 'feature-right-text' ? 'reverse-layout' : ''}`}>
                  <div className="layout-content">
                    <h2 className="featured-layout-title">{data.title}</h2>
                    <p className="featured-layout-desc">{data.desc}</p>
                    <div className="featured-layout-meta">
                      {data.logo_img && (
                        <img src={resolveImage(data.logo_img)} alt="Badge Logo" className="logo-badge" />
                      )}
                      <span className="featured-layout-time">{data.time}</span>
                    </div>
                  </div>
                  <div className="layout-image-container">
                    <img src={resolveImage(data.img)} alt={data.title} className="layout-img" />
                  </div>
                </div>
              </section>
            );
          }

          if (layout === 'audio-scroll') {
            return (
              <section key={secIdx} className="gbc-sec gbc-sec-audio">
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
                  {data.map((card, idx) => (
                    <div key={idx} className="audio-card card-hover-effect">
                      <div className="audio-img-wrapper">
                        {card.img && <img src={resolveImage(card.img)} alt={card.episode} className="audio-img" />}
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
            );
          }

          if (layout === 'media-library') {
            return (
              <section key={secIdx} className="gbc-sec gbc-sec-media">
                <div className="media-library-header-container">
                  <div className="media-library-pill">
                    <span className="live-dot"></span>
                    MEDIA LIBRARY
                  </div>
                </div>
                <div className="media-library-grid">
                  {data.map((card, idx) => (
                    <div key={idx} className="media-overlay-card card-hover-effect">
                      {card.img && <img src={resolveImage(card.img)} alt={card.title} className="media-bg-img" />}
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
            );
          }

          if (layout === 'staggered') {
            return (
              <section key={secIdx} className="gbc-sec gbc-sec-14">
                <div className="four-col-grid">
                  {data.map((card, idx) => (
                    <div key={idx} className={`news-card card-hover-effect staggered-card ${card.text_first ? 'text-first' : 'image-first'}`}>
                      <div className="card-image-wrapper">
                        {card.img && <img src={resolveImage(card.img)} alt={card.title} className="card-img" />}
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
            );
          }


          const colsCount = data.length;
          let gridClass = 'three-col-grid';
          if (colsCount === 2) gridClass = 'sec-2-grid';
          else if (colsCount === 3) gridClass = 'three-col-grid';
          else if (colsCount === 4) gridClass = 'four-col-grid';
          else if (colsCount === 5) gridClass = 'five-col-grid';
          else if (colsCount === 6) gridClass = 'six-col-grid';

          return (
            <section key={secIdx} className="gbc-sec">
              <div className={gridClass}>
                {data.map((card, idx) => {
                  const isRowLayout = colsCount === 2;

                  if (isRowLayout) {
                    return (
                      <div key={idx} className="news-card row-card card-hover-effect">
                        {card.img && (
                          <div className="card-image-wrapper large-img-wrapper">
                            <img src={resolveImage(card.img)} alt={card.title} className="card-img" />
                          </div>
                        )}
                        <div className="card-content">
                          <h3 className="card-title large-title">{card.title}</h3>
                          <p className="card-desc large-desc">{card.desc}</p>
                          {card.time && <span className="card-time">{card.time}</span>}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={idx} className="news-card card-hover-effect">
                      {card.img && (
                        <div className={`card-image-wrapper ${card.rotated ? 'vertical-image-wrapper' : ''}`}>
                          <img src={resolveImage(card.img)} alt={card.title} className="card-img" />
                          {card.category && <span className="category-overlay-badge">{card.category}</span>}
                        </div>
                      )}
                      <div className="card-content">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-desc">{card.desc}</p>
                        {card.time && <span className="card-time">{card.time}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
