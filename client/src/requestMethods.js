import axios from "axios"; 

const BASE_URL = "http://localhost:5000/api/";
//const TOKEN = 
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjUzOTkxYzJkNWUwMzJiOTZhZThkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzI2NzM3MywiZXhwIjoxNjQ3NTI2NTczfQ.sd3icc3E58nFt0MaurNjEWO41aJMqs_QWyRCHCNYQ8c";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user; 
const currentUser = user && JSON.parse(user).currentUser; 
const TOKEN = currentUser?.accessToken; 

export const publicRequest = axios.create({
    baseURL: BASE_URL,
}); 

export const userRequest = axios.create({
    baseURL: BASE_URL, 
    header: { token: `Bearer ${TOKEN}` }
}); 