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
        const token =
          '2b85878c22ebc826c810e5397b4ed99fe913bfdd5cb97a94d79ca4b490c9eff853210efd94840d0848a7ced24b6901c1e1c22cdf5dc76552750887d0704c69a24a59bc41e291f86cd984296a9c7ddc5be775b41cb45085cd6bce33463c1a93560eff1679c9d85eeef6977cdc8f033f6e0c5af00b44434b49af74f3ce0ab811d6';
        const response = await axios.get('http://localhost:1337/api/signups/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const result = response.data;
        let emailFound = false;

        result.data.forEach(async (item) => {
          if (item.attributes.email == user.email) {
            emailFound = true;
          }
        });

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
        console.log(error.response);
      }
      return user;
    }
  }
};
