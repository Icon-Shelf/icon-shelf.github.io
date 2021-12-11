import * as React from "react";

const TestimonyCard = ({ children, testimony, designation }) => {
  return (
    <div className="relative px-14 py-20 bg-mockup-b rounded-3xl">
      <p className="absolute top-6 left-8 text-left text-white opacity-10 text-7xl leading-none italic">
        "
      </p>

      <div>
        <div>
          <div className="relative flex items-center justify-center">
            {children}
          </div>
        </div>

        <div className="mt-6 text-gray-200 text-desktop-paragraph">
          {testimony}
        </div>

        <div className="mt-6 text-base opacity-50 text-body">{designation}</div>
      </div>
    </div>
  );
};

export default TestimonyCard;
