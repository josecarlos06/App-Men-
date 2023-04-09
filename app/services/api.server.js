export const getData = async () =>{
   try{
      const res = await fetch(`${process.env.API_URL}/menus?populate=image`);
      const data = await res.json();
      return data;
   }catch(err){
      console.log("object");
   }
}
export const onlyData = async (url) => {
   try{
      const res = await fetch(`${process.env.API_URL}/menus?filters[url]=${url}&populate=image`);
      const data = await res.json();
      return data;
   }catch(err){
      console.log("object");
   }  
}