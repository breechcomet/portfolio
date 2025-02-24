// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true, // Enable styled-components compiler
    },
};

export default nextConfig;