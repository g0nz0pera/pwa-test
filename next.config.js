/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    sw: "service-worker.js",
    swcMinify: true,
    //disable: process.env.NODE_ENV === "development",
    disable: false,
    scope: "/app",
    workboxOptions: {
        // Workbox options go here...
        disableDevLogs: true
    },
});

const nextConfig = {};

module.exports = withPWA(nextConfig);