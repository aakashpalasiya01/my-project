import nextPWA from '@ducanh2912/next-pwa';

const pwaConfig = {
  dest: "public/pwa",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true
  }
};

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['json-placeholder.mock.beeceptor.com', '*.json-placeholder.mock.beeceptor.com'],
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Adjust the config for client-side bundling
      config.module.rules.push({
        test: /\.(mp3|mp4)$/, // Adjust regex to include any file extensions you need
        use: {
          loader: 'file-loader', // Uses file-loader for these file types
          options: {
            publicPath: '/_next/static/files', // Where files will be served from
            outputPath: 'static/files', // Where files will be output in the build folder
          },
        },
      });
    }

    return config;
  },
};

export default nextPWA(pwaConfig)(nextConfig);
