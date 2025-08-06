import Client from "./API";
export const newRecored=async(payload)=>{
try {
    const res = await Client.post('/games/new', payload)
    console.log(payload)
    return res.data
} catch (error) {
   console.log(error)
  }
}
