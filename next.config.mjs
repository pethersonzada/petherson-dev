/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        {key:"Content-Security-Policy",value:"frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'"},
        {key:"X-Content-Type-Options",value:"nosniff"},
        {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
        {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},
      ],
    }];
  },
};
export default nextConfig;
