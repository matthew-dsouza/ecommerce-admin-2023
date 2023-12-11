// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["res.cloudinary.com"]
//     },
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },

}

module.exports = nextConfig