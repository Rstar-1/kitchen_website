import React from "react";
import Banner from "../../components/Banner";
import Container from "../../utility/Container";
import useFadeReveal from "../../utility/Fade";

const Privacy = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });

  return (
    <>
      <Banner
        title="Privacy Policy"
        description="We respect your privacy and are committed to protecting any personal data you share with us."
        widthClass="w-70"
      />
      <Container version="v2" className="bg-white">
        <div className="w-full py-40 sm-py-30 text-dark">
          <div className="w-80 md-w-90 sm-w-full" ref={addToRef}>
            
            <h3 className="title-text text-dark font-600 mb-10">1. Information We Collect</h3>
            <p className="para-text text-gray mb-26">
              We collect personal information that you provide to us when you fill out contact forms, make product inquiries, or communicate with us. This may include your name, email address, phone number, company name, billing/shipping address, and GST number for business transactions.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">2. How We Use Your Information</h3>
            <p className="para-text text-gray mb-26">
              We use the collected information to:
              <ul className="list-disc pl-20 mt-10">
                <li>Respond to your product inquiries and requests.</li>
                <li>Process and fulfill orders, including generating GST-compliant tax invoices.</li>
                <li>Provide customer service and follow-up support.</li>
                <li>Send updates and promotional materials if you opt-in.</li>
                <li>Improve our website and client experience.</li>
              </ul>
            </p>

            <h3 className="title-text text-dark font-600 mb-10 mt-20">3. Data Sharing & Security</h3>
            <p className="para-text text-gray mb-26">
              We do not sell, trade, or transfer your personally identifiable information to third parties. We may share information with trusted logistics partners to complete product deliveries. We implement standard security practices to maintain the safety of your personal information when you place an order or enter, submit, or access your details.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">4. Cookies</h3>
            <p className="para-text text-gray mb-26">
              Our website may use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">5. Your Consent</h3>
            <p className="para-text text-gray mb-26">
              By using our website, you consent to our website's Privacy Policy.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">6. Changes to Privacy Policy</h3>
            <p className="para-text text-gray mb-26">
              We reserve the right to update or change our Privacy Policy at any time. Any changes will be posted on this page with the updated revision date.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">7. Contacting Us</h3>
            <p className="para-text text-gray mb-26">
              If there are any questions regarding this Privacy Policy, you may contact us using the information below:<br />
              <strong>Ashmita Vinyls Private Limited</strong><br />
              Address: 3rd Floor, C-304, Primus Neptune Eastern Business District, Lal Bahadur Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078<br />
              Email: info@ashmitavinyls.com<br />
              Phone: +91 85117 00544
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Privacy;
