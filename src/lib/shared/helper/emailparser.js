import fs from "fs";
import path from "path";
export const emailParser=async(template,data={})=>{
    try{
    const filePath = path.join(process.cwd(), `src/lib/shared/email/templates/${template}`);
    let htmlContent = fs.readFileSync(filePath, "utf8");
    if(typeof data==="object" && !Array.isArray(data)){
    Object.keys(data).forEach(key => {
    const regex = new RegExp(`{{${key}}}`, "g");
    htmlContent = htmlContent.replace(regex, data[key]);
    });
   
    }
     return htmlContent;
   
    }catch(e){
console.log(e)
    }

}


   