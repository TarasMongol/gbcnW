import React from 'react';
import './stPage.css';

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "These Subscription Terms (\"Subscription Terms\") govern purchases and use of digital subscription services offered by Global Broadcasting Corporation (\"GBC\", \"we\", \"our\", or \"us\") through GBC.com, the GBC mobile application, and other authorized GBC platforms.",
      "In these Subscription Terms, references to \"you\" and \"your\" mean the individual purchasing or using a subscription.",
      "By purchasing, accessing, or using any GBC Premium subscription, you agree to these Subscription Terms, our Terms of Use, and our Privacy Policy."
    ]
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    content: [
      "GBC Premium subscriptions are available only to individuals who:",
      "• Have reached the age of majority in their country of residence;",
      "• Are legally capable of entering into binding agreements;",
      "• Provide accurate registration and payment information.",
      "We reserve the right to refuse or cancel subscriptions that do not meet these requirements."
    ]
  },
  {
    id: "account",
    title: "3. GBC Account",
    content: [
      "To purchase a subscription, you must create a free GBC Account.",
      "By creating an account, you agree that:",
      "• Information provided is accurate and up to date;",
      "• You are responsible for maintaining account security;",
      "• Your login credentials remain confidential;",
      "• You will not share your account with others.",
      "Subscriptions are personal and non-transferable. If you believe your account has been compromised, please contact GBC Support immediately."
    ]
  },
  {
    id: "digital-subscriptions",
    title: "4. Digital Subscriptions",
    content: [
      "A GBC Premium subscription provides a limited, revocable license to access premium content and features available through the selected subscription plan.",
      "Premium content may include:",
      "• Exclusive news analysis;",
      "• Ad-free reading experience;",
      "• Premium documentaries;",
      "• Special reports;",
      "• Subscriber-only newsletters;",
      "• Early access to selected content;",
      "• Additional digital features.",
      "A subscription does not transfer ownership of any content or intellectual property. GBC reserves the right to modify subscription features, content, or availability at any time."
    ]
  },
  {
    id: "territory",
    title: "5. Subscription Territory",
    content: [
      "Unless otherwise specified, subscriptions may be used worldwide where GBC services are legally available.",
      "Certain content may be restricted due to licensing agreements, regional regulations, or legal requirements.",
      "Access to some features may vary by country."
    ]
  },
  {
    id: "payment",
    title: "6. Payment",
    content: [
      "By purchasing a subscription, you agree to pay:",
      "• The subscription price displayed at checkout;",
      "• Applicable taxes;",
      "• Any required processing fees.",
      "All charges will be billed using the payment method provided during purchase. Prices may change periodically. Any changes will be communicated before renewal whenever required by law."
    ]
  },
  {
    id: "renewals",
    title: "7. Subscription Renewals",
    content: [
      "Some subscriptions automatically renew.",
      "When you purchase an auto-renewing subscription, you authorize GBC to charge your selected payment method at the beginning of each billing cycle. Subscriptions continue until cancelled.",
      "Renewal periods may include:",
      "• Monthly plans;",
      "• Annual plans;",
      "• Other promotional billing periods.",
      "You may cancel renewal at any time through your account settings."
    ]
  },
  {
    id: "changes",
    title: "8. Changes to Subscription Plans",
    content: [
      "GBC may:",
      "• Add new features;",
      "• Remove existing features;",
      "• Change subscription pricing;",
      "• Introduce new subscription tiers.",
      "Where required by applicable law, advance notice of material changes will be provided. Continued use of the subscription after changes become effective constitutes acceptance of those changes."
    ]
  },
  {
    id: "promotions",
    title: "9. Promotions and Trial Offers",
    content: [
      "From time to time, GBC may offer:",
      "• Free trials;",
      "• Introductory discounts;",
      "• Promotional subscription packages.",
      "Each promotion may be subject to separate terms. Promotions cannot be combined unless expressly stated. GBC reserves the right to modify or discontinue promotions at any time."
    ]
  },
  {
    id: "refunds",
    title: "10. Refund Policy",
    content: [
      "Unless required by applicable law:",
      "• Subscription payments are non-refundable;",
      "• Partial billing periods are not refunded;",
      "• Unused subscription time cannot be exchanged for cash.",
      "If a refund is granted, it is provided solely at GBC's discretion. Refund decisions do not establish a future obligation to provide additional refunds."
    ]
  },
  {
    id: "cancellation",
    title: "11. Cancellation",
    content: [
      "You may cancel your subscription at any time. Cancellation prevents future billing but does not immediately terminate access.",
      "You will continue to enjoy subscription benefits until the end of the current billing period.",
      "Cancelling a subscription does not delete your GBC Account."
    ]
  },
  {
    id: "termination",
    title: "12. Suspension and Termination",
    content: [
      "GBC reserves the right to suspend or terminate subscriptions if:",
      "• Payment cannot be processed;",
      "• Fraudulent activity is detected;",
      "• Account information is false or misleading;",
      "• The user violates our Terms of Use;",
      "• Required by law or regulatory authorities.",
      "In such cases, access to subscription content may be restricted immediately."
    ]
  },
  {
    id: "disclaimer",
    title: "13. Disclaimer",
    content: [
      "All subscription services are provided on an \"AS AVAILABLE\" and \"AS IS\" basis. GBC does not guarantee:",
      "• Continuous availability;",
      "• Uninterrupted access;",
      "• Error-free operation;",
      "• Availability of specific content.",
      "Content libraries may change over time."
    ]
  },
  {
    id: "contact",
    title: "14. Contact Information",
    content: [
      "Global Broadcasting Corporation (GBC)",
      "Global Media Centre",
      "45 International Press Avenue",
      "London, United Kingdom",
      "Email: subscriptions@gbc-news.com",
      "Support: support@gbc-news.com",
      "Website: www.gbc-news.com"
    ]
  }
];

function StPage() {
  return (
    <div className="gbc-st-page-wrapper">
      <div className="gbc-st-document-container">
        <h1 className="document-main-title">BBCGN Subscription Terms</h1>
        
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

export default StPage;
