/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['a.storyblok.com', 'https://localhost:3010', 'https://discord.com']
  },
  env: {
    STORYBLOK: 'IjZn7WiNrOwUaAHmtXJaawtt',
    NEXTAUTH_URL:"http://localhost:3000",
    NEXTAUTH_SECRET:"2MEMzGYnxs4nfurJignZRtE+T99Zk8MsAwkUYm9xpl0=",
    TWITTER_CONSUMER_KEY:'nVPx8gZnA8mAMoqQl5fzE0Ke9',
    TWITTER_CONSUMER_SECRET:'2aNXgjTuKxMsNWwp2M9qkONI4BOww4PiZRjSL7QWZdqBnrXbd6',
    FB_API:"AIzaSyCQSYeTnvzQfFVjUed4Y_dzzhWmnhlMe8A",
    FB_DOMAIN: "potplantz.firebaseapp.com",
    FB_PROJECTID: "potplantz",
    FB_STORAGE: "potplantz.appspot.com",
    FB_MESSAGE: "437155016233",
    FB_APPID: "1:437155016233:web:47b31d28a7653c2428f638",
    FB_MEA: "",
    ALCHEMY: "https://eth-goerli.g.alchemy.com/v2/r0hPr09fHymuXddvS7ioacs7oAHkqqSZ",
    P:"0729e3a8394fa00b09a9702c55054efd7075d367c1ff1e532ca337a79382ebaa",
    S: "0x31bd94887a209337BE80E52B4f8badcA0c8d780C",
    DISCORD: "1MDJYvV4RZQEu8D_aF3c08kGDsEq1K0i"
  },
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    localeDetection: false,
  }
}

module.exports = nextConfig