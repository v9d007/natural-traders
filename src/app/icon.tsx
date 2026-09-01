import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

// Image generation for Favicon & Google Search Result Logo
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #064e3b 0%, #022c22 45%, #0f172a 100%)",
          borderRadius: "110px",
          border: "16px solid rgba(52, 211, 153, 0.4)",
          position: "relative",
        }}
      >
        <svg
          viewBox="0 0 38 38"
          style={{
            width: "360px",
            height: "360px",
          }}
        >
          <defs>
            <linearGradient id="ntTGradient" x1="18" y1="10" x2="30" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="ntGoldDot" x1="26" y1="5" x2="32" y2="11" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="1" stopColor="#EAB308" />
            </linearGradient>
          </defs>

          {/* Geometric Letter 'N' */}
          <path
            d="M10 27V11L21 24.5V11"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interlocking Geometric Letter 'T' */}
          <path
            d="M19 11H29"
            stroke="url(#ntTGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M24 11V27"
            stroke="url(#ntTGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Golden Spark / Sunrise Accent */}
          <circle cx="30" cy="7.5" r="2.8" fill="url(#ntGoldDot)" />
          <circle cx="30" cy="7.5" r="1.2" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
