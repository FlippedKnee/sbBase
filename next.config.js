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
    TWITTER_CONSUMER_KEY:'C17qKAFtDwwTbQGdZI9XwcvdC',
    TWITTER_CONSUMER_SECRET:'P50V28He8zGyqa59s1ODzCMpvcJwMtBkY0EZ9SMjv77jIStnpZ',
    FB_API:"AIzaSyBWTDqyYV-svx5O5TThL7mcQ-1HT2HOt0Q",
    FB_DOMAIN: "alea3-6f538.firebaseapp.com",
    FB_PROJECTID: "alea3-6f538",
    FB_STORAGE: "alea3-6f538.appspot.com",
    FB_MESSAGE: "486310389384",
    FB_APPID: "1:486310389384:web:4dfa669bb0bbddc5d0a13d",
    FB_MEA: "",
    ALCHEMY: "https://eth-goerli.g.alchemy.com/v2/r0hPr09fHymuXddvS7ioacs7oAHkqqSZ",
    P:"0729e3a8394fa00b09a9702c55054efd7075d367c1ff1e532ca337a79382ebaa",
    S: "0x31bd94887a209337BE80E52B4f8badcA0c8d780C",
    DISCORD: "123"
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