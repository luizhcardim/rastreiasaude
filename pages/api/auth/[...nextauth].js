import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import db from '../../../config/db';
import bcrypt from 'bcryptjs'

export default NextAuth({

    providers: [
        Providers.Credentials({
   
            name: 'dados',

            credentials: {
                username: { label: "CPF/Username", type: "text" },
                password: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {

                

                const user = await db('crawling.users')
                    .select('username', 'password')
                    .where({ username: credentials.username })
                    .first();

                
                

                if (!user) { // User don't exist
                    return null
                } else {
                    
                    // Verifying the password
                    if (bcrypt.compareSync(credentials.password, user.password)) {

                        
                        let ret = {
                            id: user.username,
                            name: user.username,
                        }
                        return ret;

                    } else {
                        return null;
                    }

                }

            }
        })
    ],
    jwt: {
        secret: process.env.JWT_SIGNING_PRIVATE_KEY,
      },
    callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {
            //  "user" parameter is the object received from "authorize"
            //  "token" is being send below to "session" callback...
            //  ...so we set "user" param of "token" to object from "authorize"...
            //  ...and return it...
            user && (token.user = user);
            return Promise.resolve(token)   // ...here
        },
        session: async (session, user, sessionToken) => {
            //  "session" is current session object
            //  below we set "user" param of "session" to value received from "jwt" callback
            session.user = user.user;
            return Promise.resolve(session)
        }
    },
    pages: {
        signIn: '/login'
    }

    // A database is optional, but required to persist accounts in a database
    //database: process.env.DATABASE_URL,
})