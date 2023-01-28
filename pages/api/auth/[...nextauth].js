import NextAuth from 'next-auth';
import TwitterProvider from "next-auth/providers/twitter";
let authUser = null
export default NextAuth({
  providers: [
    TwitterProvider({
      clientId: 'nVPx8gZnA8mAMoqQl5fzE0Ke9',
      clientSecret: '2aNXgjTuKxMsNWwp2M9qkONI4BOww4PiZRjSL7QWZdqBnrXbd6', 
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