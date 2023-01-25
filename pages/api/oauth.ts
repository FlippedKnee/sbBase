import { NextApiRequest, NextApiResponse } from 'next';
const { fetch, request } = require('undici');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
export default async function exit(req: NextApiRequest, res: NextApiResponse){

const client =await new Client({ intents: [GatewayIntentBits.Guilds] });
// MTA0NzU4NTc3MDA5OTE4MzYxOQ.GddFJE.YdigtjoVNEqYey6S8epp9XxtosvPF6iympVsG8

// from discord dev - bot -reset token
await client.login('MTA2NzU0NTcwODMyMTg0NTI2OQ.GRKCmU.gZShHq8gbmFSUJCwgkdBN76lwL5OHLvhU7XdIk');
//  await client.once(Events.ClientReady,async c => {
    // console.log(`Ready! Logged in as ${c.user.tag}`);
    // from discord channel
    const guild = client.guilds.cache.get("1066404143641669744");
    // try{

    //  const tokenResponseData  = await fetch('https://discord.com/api/users/@me', {
    //     headers: {
    //       authorization: `Bearer ${req.query }`,
    //     },
    //   })
      const userResult = await request('https://discord.com/api/users/@me', {
	headers: {
      // from discord user from link
	  authorization: `Bearer ${req.query.q}`,
	},
});
const user = await userResult.body.json()

//       const oauthData = await userResult.body.json();
//       console.log('ttttt', oauthData, 'tt')

//     }catch(e){
//       console.log(e)
//     }

			// const user = await fetch(`https://discordapp.com/api/users/@me`,
      // {headers: {Authorization: `Bearer ${req.query.q}}`}})
      // console.log(await user.body.json(), '____________USER')
		
    // console.log(guild)
    // console.log(client.guilds.cache,"this is cache")
    // console.log(guild?.commands?.guild?.commands)

    return guild.members.add(user?.id, { accessToken: req.query.q }).then(((r:any) => {
      if ( r?.user ) {
        return res.status(200).send({ data: r?.user?.id })
      } else {
        return res.status(403).json({ success: false })
      }
     })).catch((a:any) => {
      return res.status(403).json({ success: false })})
//  })
}
  // console.log('first')
  // client.once(Events.ClientReady, c => {
  //   console.log(`Ready! Logged in as ${c.user.tag}`);
  // });
// console.log(req, 'req')
            // fetch(
            //     "https://discord.com/api/oauth2/authorize?client_id=1038877253012050023&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds.join"
            //   )
            //     .then((res) => console.log(res, 'asdasda'))
            //     .catch((e) => console.log(e, 'errrooror'));
      
        
