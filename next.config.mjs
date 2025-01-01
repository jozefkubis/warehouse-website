/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "djfaztojwfbjslvxbdep.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/order-images/**",
        // search: "",
      },
    ],
  },
  // output: "export",
}
export default nextConfig


