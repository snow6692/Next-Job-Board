/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "8wuggqbarqkhvru4.public.blob.vercel-storage.com"
            },
            {
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }


};

export default nextConfig;
