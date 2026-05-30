import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  output: 'export',
};

// allow any domain to access development server 
module.exports = {
  allowedDevOrigins: ['local.test'], /// dnsmasq local.test
}

export default nextConfig;
