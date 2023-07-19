const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  favicon: '/favicon.ico',
  fonts: [
    {
      family: 'LINESeedJP_A_OTF',
      fonts: [
        {
          file: '/font/LINESeedJP_A_OTF_Th.otf',
          weight: 200,
          style: 'normal',
          fontDisplay: 'swap',
        },
        {
          file: '/font/LINESeedJP_A_OTF_Rg.otf',
          weight: 400,
          style: 'normal',
          fontDisplay: 'swap',
        },
        {
          file: '/font/LINESeedJP_A_OTF_Bd.otf',
          weight: 700,
          style: 'normal',
          fontDisplay: 'swap',
        },
        {
          file: '/font/LINESeedJP_A_OTF_Eb.otf',
          weight: 800,
          style: 'normal',
          fontDisplay: 'swap',
        },
      ],
    },
    {
      family: 'DegularDemo-Black',
      fonts: [
        {
          file: '/font/DegularDemo-Black.otf',
          weight: 800,
          style: 'normal',
          fontDisplay: 'swap',
        },
      ],
    },
  ],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = withFonts(nextConfig);
