import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react'
import Twitter from 'twitter-lite';

export default async (req:any, res:any) => {
 

    try {
         // @ts-ignore
        
        const token:any = await getToken({ req,   secret: process.env.NEXTAUTH_SECRET
        });
 
        const client = await new Twitter({
          subdomain: 'api',
          consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
          // access_token_key: "1589743542183804929-ymTE8yqVhesvGlCpqY0QDqrWEoh2tz",
          // access_token_secret: "lWCAPZzactR7VX6bSzEpOfiAWj6tdrzJQVrDzr7bTkDHD",
          access_token_key: token?.token?.account?.oauth_token ?? token?.token?.token?.account?.oauth_token,
          access_token_secret: token?.token?.account?.oauth_token_secret?? token?.token?.token?.account?.oauth_token_secret,
      });


        const following = await client.post("friendships/create", {
          screen_name: req.query?.id
        });
     try{

       const tweet = await client.post("statuses/retweet", { id: req?.query?.rid as string });
      }catch{

      }

      
      
        if(following.following){
        return res.status(200).json({
          status: 'Ok',
          data: token?.token?.user ?? token?.token?.token?.user
        });

      }else{

        return res.status(400).json({
          status: 'failed'
        });

      }
    } catch(e) {
      console.log(e, 'error')
      return res.status(400).json({
        // @ts-ignore
        status: e.message
      });
    }
  }