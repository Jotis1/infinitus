/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wordpress.yoruverse.com',
            }
        ]
    }
};

export default nextConfig;
