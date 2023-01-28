import NextAuth from 'next-auth';
import TwitterProvider from "next-auth/providers/twitter";
let authUser = null
export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CONSUMER_KEY,
      clientSecret: process.env.TWITTER_CONSUMER_SECRET, 
      session: { jwt: true },
     
    }),
  ],
  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(user){
        authUser = user
      }
      return true
    },
 
    async jwt(token, user, account = {}, profile, isNewUser) {
      // console.log('inside callback')
      // console.log(token.token)
      return token;
    },

  
  },
  secret: process.env.NEXTAUTH_SECRET,

})