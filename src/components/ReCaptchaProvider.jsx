// src/components/ReCaptchaProvider.jsx
"use client";

import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptchaProvider = ({ onChange }) => {
  const recaptchaRef = useRef(null);

  return (
    <div className="my-4">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={onChange}
        ref={recaptchaRef}
      />
    </div>
  );
};

export default ReCaptchaProvider;
