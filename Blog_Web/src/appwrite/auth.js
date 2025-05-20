import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client  = new Client();
    account;


    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);    
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                //call another method to create a document in the database
                return this.login({email, password});
                
            }else{
                return userAccount;
            }

        }catch(error){
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const userSession = await this.account.createEmailPasswordSession(email, password);
            return userSession;
        }catch(error){
            throw error;
        }
    }

    async logout() {
        try {
            const userSessions = await this.account.deleteSessions();
            return userSessions;
        }catch(error){
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        }catch(error){
            throw error;
        }
        return null;
    }
}

const authService = new AuthService();

export default authService;

