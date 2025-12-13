import React from "react";
import Container from "../../../utility/Container";
import Review from "../../../api/Review.json";

const Section6 = () => {
  const testimonials = Review || [];

  const getDaysAgo = (dateString) => {
    const today = new Date();
    const pastDate = new Date(dateString);
    const diffTime = today - pastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1 day ago";
    return `${diffDays} days ago`;
  };

  return (
    <Container version="v3" className="bg-white">
      <div className="w-full py-60">
        <div className="flex items-center sm-block pb-60 bordb px-15">
          <div className="w-50 sm-w-full pr-20">
            <div
              className="bg-secondary w-full h-500 relative overflow-hidden rounded-5"
              style={{
                backgroundImage:
                  'url("https://printshop.tokotema.com/wp-content/uploads/2023/08/Hero-Line-Bg.png")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
              }}
            >
              <img
                src="https://printshop.tokotema.com/wp-content/uploads/2023/08/T-Shirt-and-Dat-Hat-Mockup-Featuring-a-Smiling-768x861.png"
                alt="arrow"
                className="w-full absolute top-0 right-0 h-600 object-contain flex"
              />
            </div>
          </div>
          <div className="w-50 sm-w-full pl-20">
            <p className="text-gray midpara-text">Testimonial</p>
            <h4 className="large-text text-dark font-600 w-90 pt-10">
              Hear What They're Saying About Us
            </h4>
            <div className="flex items-center w-full gap-10 py-30">
              <img
                src="https://printshop.tokotema.com/wp-content/uploads/2023/08/a-men-look-back-before-driving-2022-11-03-05-19-05-utc-1.jpg"
                alt="testimonial"
                className="flex object-contain w-15 rounded-5"
                style={{ height: "80px" }}
              />
              <div className="w-85">
                <p className="small-text text-gray">3 days ago</p>
                <h5 className="title-text font-600 text-dark">Angela Jones</h5>
                <div className="flex items-center gap-6 mt-4">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="var(--warning)"
                      strokeWidth="2"
                      fill="var(--warning)"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <h6 className="title-text font-500 text-dark">
              Outstanding Print Quality
            </h6>
            <p className="para-text text-gray w-90 mt-8">
              Scelerisque in dolor donec neque velit. Risus aenean integer
              elementum odio sed adipiscing. Sem id scelerisque nunc quis.
              Imperdiet nascetur consequat.
            </p>
          </div>
        </div>
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-12 px-15 mt-40">
          {testimonials?.slice(0, 3)?.map((item) => (
            <div key={item.id} className="bg-tertiary rounded-10 w-full">
              <div className="p-20">
                <div className="flex items-center w-full gap-10">
                  <img
                    src="https://printshop.tokotema.com/wp-content/uploads/2023/08/a-men-look-back-before-driving-2022-11-03-05-19-05-utc-1.jpg"
                    alt="testimonial"
                    className="flex object-contain w-20 rounded-5"
                    style={{ height: "70px" }}
                  />
                  <div className="w-80">
                    <h5 className="title-text font-600 text-dark">
                      {item?.name}
                    </h5>
                    <div className="flex items-center gap-6 mt-4">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          viewBox="0 0 24 24"
                          width="16"
                          height="16"
                          stroke="var(--warning)"
                          strokeWidth="2"
                          fill="var(--warning)"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="para-text text-gray line-clamp3 mt-16">
                  “{item?.review}”
                </p>
                <p className="small-text text-gray mt-20">
                  {getDaysAgo(item?.date)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section6;
