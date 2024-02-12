import conf from '../conf/conf'
import { Client, Account, ID , Databases ,Storage,Query } from "appwrite";

export class Service {
   client = new Client();
   Databases;
   bucket;

   constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl) // Your API Endpoint
    .setProject(conf.appwriteProjectId); 
    this.Databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
   }

   async createPost({title, slug, content, featuredImage, status, userId}){
       try {
          return await this.Databases.createDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId, 
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
            )
       } catch (error) {
        console.log("Appwrite :: createPost :: Error :",error)
       }
   }

   async updatePost(slug,{title, content, featuredImage, status}){
       try {
          return await this.Databases.updateDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId, 
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
            )
       } catch (error) {
        console.log("Appwrite :: updatePost :: Error :",error)
       }
   }

   async deletePost(slug){
       try {
           await this.Databases.deleteDocument(
            conf.appwriteDatabaseId, 
            conf.appwriteCollectionId, 
            slug
            )
            return true;
       } catch (error) {
        console.log("Appwrite :: updatePost :: Error :",error)
        return false;
       }
   }

   async getPost(slug){
       try {
           return await this.Databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )
       } catch (error) {
        console.log("Appwrite :: updatePost :: Error :",error)
       }
   }

   async getPosts(queries=[Query.equal("status","active")]){
    try {
       return await this.Databases.listDocuments(
         conf.appwriteDatabaseId, 
         conf.appwriteCollectionId, 
         queries
         )
    } catch (error) {
     console.log("Appwrite :: getPosts :: Error :",error)
     return false;
    }
}

// File Upload Services

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
            )
    } catch (error) {
        console.log("Appwrite :: uploadFile :: Error :",error)
        return false;
    }
}

async deleteFile(fileId){
    try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
            );
            return true;
    } catch (error) {
        console.log("Appwrite :: deleteFile :: Error :",error)
        return false;
    }
}

       getFilePreview(fileId){
    try {
         return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
            );
            
    } catch (error) {
        console.log("Appwrite :: getFilePreview :: Error :",error)
        return false;
    }
}
}

const service = new Service();

export default service;