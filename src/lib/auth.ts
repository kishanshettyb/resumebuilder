import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        const token = process.env.TOKEN;
        const response = await axios.get('http://localhost:1337/api/signups/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = response.data;
        const emailFound = result.data.some((item) => item.attributes.email === user.email);
        if (!emailFound) {
          const postData = {
            data: {
              name: user.name,
              email: user.email,
              loginid: user.id,
              image: user.image
            }
          };
          await axios.post('http://localhost:1337/api/signups/', postData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
      return user;
    }
  }
};
