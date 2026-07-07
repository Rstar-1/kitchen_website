import React from "react";
import Banner from "../../components/Banner";
import Container from "../../utility/Container";
import useFadeReveal from "../../utility/Fade";

const Terms = () => {
  const addToRef = useFadeReveal({ delay: 20, y: 30 });

  return (
    <>
      <Banner
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our website or ordering our PVC and vinyl products."
        widthClass="w-70"
      />
      <Container version="v2" className="bg-white">
        <div className="w-full py-40 sm-py-30 text-dark">
          <div className="w-80 md-w-90 sm-w-full" ref={addToRef}>
            
            <h3 className="title-text text-dark font-600 mb-10">1. Acceptance of Terms</h3>
            <p className="para-text text-gray mb-26">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">2. Products & Services</h3>
            <p className="para-text text-gray mb-26">
              Ashmita Vinyls Private Limited specializes in manufacturing and supplying premium PVC coated tarpaulins, transparent sheeting, table covers, strip curtains, synthetic leather, wall panels, and artificial grass flooring. All product specifications, availability, and pricing are subject to change without notice. We reserve the right to limit the quantity of products supplied to any customer.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">3. Orders & Payment</h3>
            <p className="para-text text-gray mb-26">
              All orders are subject to acceptance by us. Payments must be made in full as per the invoice terms. We provide GST-compliant tax invoices for all corporate and bulk transactions. Any taxes, duties, or shipping fees will be calculated and specified in the invoice.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">4. Delivery & Shipping</h3>
            <p className="para-text text-gray mb-26">
              We ship our products across India and export to UAE, USA, and Bangladesh. While we strive to meet all delivery timelines, delivery schedules are estimates and depend on external logistics providers and customs clearance for international shipments.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">5. Limitation of Liability</h3>
            <p className="para-text text-gray mb-26">
              Ashmita Vinyls Private Limited shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our products, or for the cost of procurement of substitute goods.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">6. Governing Law</h3>
            <p className="para-text text-gray mb-26">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h3 className="title-text text-dark font-600 mb-10">7. Contact Information</h3>
            <p className="para-text text-gray mb-26">
              For any questions or clarifications regarding our Terms & Conditions, please contact us at:<br />
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

export default Terms;
