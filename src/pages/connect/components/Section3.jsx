import React from "react";
import Container from "../../../utility/Container";

const Section3 = ({ addToRef }) => {
  const faqSteps = [
    {
      faqText:
        "What products does Ashmita Vinyls Private Limited manufacture? We manufacture PVC coated tarpaulins, transparent sheeting, table covers, strip curtains, synthetic leather, wall panels, and artificial grass flooring.",
    },
    {
      faqText:
        "Where is your manufacturing and store facility located? We are located at 3rd Floor, C-304, Primus Neptune Eastern Business District, Lal Bahadur Shastri Marg, Bhandup West, Mumbai, Maharashtra 400078.",
    },
    {
      faqText:
        "Do you export products internationally? Yes, we regularly export high-grade PVC products and fabrics to Bangladesh, UAE, and the USA.",
    },
    {
      faqText:
        "What are your business operating hours? We operate Monday through Saturday from 10:00 AM to 7:00 PM (Closed on Sundays).",
    },
    {
      faqText:
        "Do you provide tax invoices for bulk and corporate purchases? Yes, Ashmita Vinyls Private Limited is GST registered (GSTIN: 27AAVCA8630Q1ZO) and provides proper tax invoices.",
    },
    {
      faqText:
        "Can I request custom sizes for tarpaulins and strip curtains? Absolutely! We offer custom cutting and tailored manufacturing according to your industrial specifications.",
    },
  ];
  return (
    <Container version="v3" className="bg-tertiary">
      <div className="w-full py-40 sm-py-30">
        <div className="px-15 sm-px-5">
          <p className="text-gray headpara-text" ref={addToRef}>
            Frequently Asked Questions
          </p>
          <h4 className="large-text text-darkk font-600 pt-10" ref={addToRef}>
            Everything You Need To Know
          </h4>
          <div className="grid-cols-2 sm-grid-cols-1 gap-12 mt-40 sm-mt-25 sm-w-full w-90">
            {faqSteps?.map((item, index) => (
              <div
                className="flex items-start w-full mb-16"
                ref={addToRef}
                key={index}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  fill="none"
                  className="flex w-10"
                >
                  <polyline points="15 10 20 15 15 20"></polyline>
                  <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                </svg>

                <p className="midpara-text text-gray w-90">
                  {index === 4 ? (
                    <>
                      Do you provide tax invoices for bulk and corporate purchases? Yes, Ashmita Vinyls Private Limited is GST registered (
                      <a
                        href="/GST_CERTIFICATE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warning font-500 inline-flex items-center gap-4 hover-underline"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          className="inline"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        GSTIN: 27AAVCA8630Q1ZO
                      </a>
                      ) and provides proper tax invoices.
                    </>
                  ) : (
                    item.faqText
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
