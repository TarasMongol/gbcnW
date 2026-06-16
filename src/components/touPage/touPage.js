import React from 'react';
import './touPage.css';

const sections = [
  {
    id: "hello",
    title: "1. Hello",
    content: [
      "These are GBC.com's Terms of Use (\"Terms\"). These Terms explain:",
      "• The rules for using our Services (as defined below);",
      "• What you can do with our Content (as defined below);",
      "• What we can do with information, comments, photos, videos, and other materials you upload or submit;",
      "• The limitations of our liability and responsibilities; and",
      "• The obligations you accept when using our Services.",
      "Your rights and responsibilities, basically – important stuff.",
      "It is important that you read these Terms carefully and check this page regularly, as the latest version will always apply to your use of our Services.",
      "When we refer to \"GBC\", \"GBC.com\", \"Global Broadcasting Corporation\", \"we\", \"our\", or \"us\", we mean the international digital news and media network operated by Global Broadcasting Corporation and its affiliated companies.",
      "Our services may be accessed through various platforms, including:",
      "• GBC.com",
      "• GBC News",
      "• GBC World",
      "• GBC Sport",
      "• GBC Mobile Applications",
      "• GBC Streaming Services",
      "• Other GBC-owned digital platforms",
      "Collectively, these are referred to as the \"Services\" throughout these Terms.",
      "By accessing or using any GBC Service, you agree to be legally bound by these Terms.",
      "GBC reserves the right to suspend, restrict, modify, or discontinue any Service, feature, or content at any time without prior notice. We may also terminate your access if we believe that you have violated these Terms or applicable laws.",
      "Except where otherwise stated, all Services and Content are provided solely for personal and non-commercial use."
    ]
  },
  {
    id: "applicability",
    title: "2. When These Terms Apply",
    content: [
      "These Terms apply whenever you access, browse, register for, interact with, or otherwise use any GBC Service.",
      "By continuing to use our Services, you acknowledge that you have read, understood, and accepted these Terms.",
      "Failure to comply with these Terms may result in suspension or permanent termination of access to our Services."
    ]
  },
  {
    id: "services-and-content",
    title: "3. What Are the Services and Content?",
    content: [
      "a. Services",
      "Services include all websites, applications, streaming platforms, newsletters, podcasts, social media channels, and digital products operated by GBC.",
      "Examples include:",
      "• GBC News",
      "• GBC World",
      "• GBC Sport",
      "• GBC Business",
      "• GBC Travel",
      "• GBC Earth",
      "• GBC Audio",
      "• GBC Live",
      "b. Content",
      "Content available through our Services may include:",
      "• News articles",
      "• Reports",
      "• Photographs",
      "• Illustrations",
      "• Videos",
      "• Audio recordings",
      "• Podcasts",
      "• Graphics",
      "• Live streams",
      "• User-generated content",
      "All Content is protected by copyright, trademark, and intellectual property laws.",
      "Nothing within our Services grants any right to reproduce, distribute, modify, or commercially exploit Content without written permission from GBC."
    ]
  },
  {
    id: "changes",
    title: "4. Changes to These Terms",
    content: [
      "We may update these Terms from time to time to reflect changes in our Services, legal requirements, or operational practices.",
      "Any changes become effective immediately after publication on GBC.com.",
      "Your continued use of the Services after changes have been published constitutes acceptance of the revised Terms."
    ]
  },
  {
    id: "using-services",
    title: "5. Using Our Services",
    content: [
      "To maintain a safe and reliable environment, users must not:",
      "• Attempt to gain unauthorized access to our systems;",
      "• Use automated tools to scrape or collect content;",
      "• Upload viruses, malware, or harmful software;",
      "• Interfere with the operation of our Services;",
      "• Post unlawful, misleading, defamatory, or offensive material;",
      "• Harass, threaten, or abuse other users;",
      "• Impersonate GBC, its employees, journalists, or representatives.",
      "Any violation may result in account suspension or legal action."
    ]
  },
  {
    id: "advertising",
    title: "6. Third-Party Advertising",
    content: [
      "Our Services may contain advertisements, sponsored content, or links provided by third parties.",
      "Advertisers are solely responsible for the accuracy and legality of their materials.",
      "GBC does not endorse third-party products, services, or opinions and accepts no responsibility for any transactions or interactions between users and advertisers."
    ]
  },
  {
    id: "intellectual-property",
    title: "7. Intellectual Property Rights",
    content: [
      "All trademarks, logos, graphics, videos, articles, and other materials available through GBC Services are owned by GBC or licensed to GBC.",
      "Without prior written permission, you may not:",
      "• Copy Content;",
      "• Redistribute Content;",
      "• Sell Content;",
      "• Modify Content;",
      "• Use Content for commercial purposes.",
      "Unauthorized use may result in legal action."
    ]
  },
  {
    id: "user-contributions",
    title: "8. User Contributions",
    content: [
      "Certain Services may allow users to submit comments, photos, videos, or other materials.",
      "By submitting content to GBC, you grant GBC a worldwide, non-exclusive, royalty-free license to use, display, reproduce, distribute, and publish that content across any current or future platform.",
      "You retain ownership of your original content.",
      "However, you confirm that you possess all necessary rights to submit such material."
    ]
  },
  {
    id: "accounts",
    title: "9. Accounts",
    content: [
      "Some Services may require a GBC account.",
      "You are responsible for:",
      "• Maintaining the confidentiality of your login credentials;",
      "• Keeping your account information accurate;",
      "• All activity conducted through your account.",
      "If you believe your account has been compromised, you should contact us immediately."
    ]
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer",
    content: [
      "All Services and Content are provided on an \"AS IS\" and \"AS AVAILABLE\" basis.",
      "While we strive for accuracy and reliability, GBC does not guarantee that:",
      "• Content will always be accurate;",
      "• Services will always be available;",
      "• Services will be free from interruptions, errors, or technical issues.",
      "Use of our Services is at your own risk."
    ]
  },
  {
    id: "limitation",
    title: "11. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, GBC shall not be liable for:",
      "• Loss of data;",
      "• Loss of profits;",
      "• Business interruption;",
      "• Reputational damage;",
      "• Indirect or consequential damages arising from use of our Services.",
      "Nothing in these Terms excludes liability where exclusion is prohibited by law."
    ]
  },
  {
    id: "contact",
    title: "12. Contact Information",
    content: [
      "Global Broadcasting Corporation (GBC)",
      "Global Media Centre",
      "45 International Press Avenue",
      "London, United Kingdom",
      "Email: support@gbc-news.com",
      "Website: www.gbc-news.com"
    ]
  }
];

function TouPage() {
  return (
    <div className="gbc-st-page-wrapper">
      <div className="gbc-st-document-container">
        <h1 className="document-main-title">BBC Global Terms of Use</h1>
        
        <div className="document-subtitle-container">
          <p className="document-subtitle-date">Page updated: 15 April 2026</p>
          <p className="document-subtitle-version">Version 1.0</p>
        </div>

        <div className="document-body">
          {sections.map((section) => (
            <section key={section.id} className="document-section">
              <h2 className="section-title">{section.title}</h2>
              <div className="section-paragraphs">
                {section.content.map((paragraph, index) => {
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <div key={index} className="bullet-row">
                        <span className="bullet-dot">•</span>
                        <span className="bullet-text">{paragraph.substring(1).trim()}</span>
                      </div>
                    );
                  }
                  
                  if (section.id === 'contact' && index > 0) {
                    return <p key={index} className="contact-info-line">{paragraph}</p>;
                  }
                  
                  return <p key={index} className="standard-paragraph">{paragraph}</p>;
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TouPage;