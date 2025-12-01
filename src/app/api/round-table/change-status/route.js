// export const runtime = 'nodejs'; // important
// export const dynamic = 'force-dynamic';

// import { get,update} from '@/lib/shared/database/db-query';
// import { sendEmail } from '@/lib/shared/email/email';
// import { emailParser } from '@/lib/shared/helper';

// function jsonResponse(data, status = 200) {
//   return new Response(JSON.stringify(data), {
//     status,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { id,status} = body;

//     // Basic validation
//     if (!status || !id) {
//       return jsonResponse({ error: 'Missing required fields' }, 400);
//     }
//     if(!["approved","decline"].includes(status)){
//       return jsonResponse({ error: 'Missing required fields' }, 400);
//     }
//     let { data: check }=await get("round_table",{eq:{id}});
//     if(!Array.isArray(check) || !check.length ){
//       return jsonResponse({ error: 'data not found' }, 404);
//     }

//     await update("round_table",{status},{id});
//     setImmediate(async()=>{
//       let htmlContent="";
//       let subject=""
//       if(status==="approved"){
//       htmlContent=await emailParser("host-round-table-approved.html",{name:check[0].name,year:new Date().getFullYear()});
//       subject="Application Approved"
//       }
//       else{
//       htmlContent=await emailParser("host-round-table-declined.html",{name:check[0].name,year:new Date().getFullYear()});
//       subject="Application Declined"
//       }
//        sendEmail(check[0].email,"Thanks New Host Round a Table",htmlContent)
//     })


//     return jsonResponse({
//     update:true
//     });

//   } catch (error) {
//     console.error('Error verifying session:', error);
//     return jsonResponse(
//       { error: 'Internal Server Error', details: error.message },
//       500
//     );
//   }
// }




export const runtime = 'nodejs'; // important
export const dynamic = 'force-dynamic';

import { get, update } from '@/lib/shared/database/db-query';
import { sendEmail } from '@/lib/shared/email/email';
import { emailParser } from '@/lib/shared/helper';

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, status } = body;

    if (!status || !id) {
      return jsonResponse({ error: 'Missing required fields' }, 400);
    }

    if (!["approved", "decline"].includes(status)) {
      return jsonResponse({ error: 'Invalid status' }, 400);
    }

    let { data: check } = await get("round_table", { eq: { id } });

    if (!Array.isArray(check) || !check.length) {
      return jsonResponse({ error: 'data not found' }, 404);
    }

    await update("round_table", { status }, { id });

    // async background task (safe)
    (async () => {
      let htmlContent = "";
      let subject = "";

      if (status === "approved") {
        htmlContent = await emailParser("host-round-table-approved.html", {
          name: check[0].name,
          year: new Date().getFullYear()
        });
        subject = "Application Approved";
      } else {
        htmlContent = await emailParser("host-round-table-declined.html", {
          name: check[0].name,
          year: new Date().getFullYear()
        });
        subject = "Application Declined";
      }

      sendEmail(
        check[0].email,
        subject,
        htmlContent
      );
    })();

    return jsonResponse({ update: true });

  } catch (error) {
    console.error('Error in change-status API:', error);
    return jsonResponse({ error: 'Internal Server Error', details: error.message }, 500);
  }
}
