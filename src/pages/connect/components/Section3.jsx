import React from "react";
import Container from "../../../utility/Container";

const Section3 = ({ addToRef }) => {
  const faqSteps = [
    {
      faqText:
        "What products does Ashmita Enterprises deal in? We deal in PVC Strip Curtains, PVC Printed Rolls, PVC Sheets, PVC Rolls, PVC Curtains, PVC Films, Mounting Brackets, PVC Clear Sheets, Soft PVC Rolls, Transparent PVC Rolls, PVC Rainbow Clear Sheets, Anti-Insect PVC Strip Curtains, Freezer Grade PVC Strip Curtains, Cold Storage Curtains, PVC Mattress Films, and Super Clear PVC Films.",
    },
    {
      faqText:
        "Where is your store facility located? We are located at Shop No. 271, Next to State Bank of India, Mohammed Ali Road, Masjid Bunder, Mumbai – 400003, Maharashtra.",
    },
    {
      faqText:
        "What is your business type? Ashmita Enterprises operates as a leading Importer, Wholesaler, Trader & Retailer, serving clients with premium-grade PVC rolls and curtains.",
    },
    {
      faqText:
        "What are your business operating hours? We operate Monday through Saturday from 10:00 AM to 7:00 PM (Closed on Sundays).",
    },
    {
      faqText:
        "Do you provide tax invoices for bulk and corporate purchases? Yes, Ashmita Enterprises provides proper tax invoices with GST compliance for all wholesale and retail orders.",
    },
    {
      faqText:
        "Can I request custom sizes for PVC strip curtains and sheets? Absolutely! We support custom dimensions and specific sizing to meet your unique storage, industrial, or domestic requirements.",
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

                <p className="midpara-text text-gray w-90">{item.faqText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
