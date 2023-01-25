const Client = require('disco-oauth');
const client = new Client('my-client-id', process.env.clientSecret);

client.setScopes('identify', 'guilds');
client.setRedirect('http://localhost:3000/login');

import { NextApiRequest, NextApiResponse } from 'next';

export default async function login(req: NextApiRequest, res: NextApiResponse){
    if (req.query.state && req.query.code && req.cookies['user-state']) {
        if (req.query.state === req.cookies['user-state']) {
            fetch(
                "https://discord.com/api/oauth2/authorize?client_id=1067545708321845269&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Foauth&response_type=code&scope=guilds.join"
              )
                .then()
                .catch((e) => console.log(e));
            }
        }
}