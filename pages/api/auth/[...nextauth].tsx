import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req){
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                if(email == "rafael@gmail.com" && password == "1234") {
                    
                }
                else{
                    throw new Error('invalid credentials')
                }
                return {
                    id: '1234', 
                    name: 'Rafael Palo', 
                    email: 'raf@gmail.com',
                    role: 'admin'
                };
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks:{
        jwt(params){
            if (params.user?.role){
                params.token.role = params.user.role;
            }
            return params.token
        },
    },
};
export default NextAuth(authOptions);