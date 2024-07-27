
import crypto from "crypto";
import dotenv from 'dotenv';
dotenv.config();




// function hmac_rawurlsafe_base64_string(distinct_id, secret) {
//     const hash = crypto
//         .createHmac("sha256", secret)
//         .update(distinct_id)
//         .digest("base64url");
//     return hash.trimEnd("=");
// }

function hmac_rawurlsafe_base64_string(distinct_id, secret) {
    const hmac = crypto.createHmac("sha256", secret).update(distinct_id).digest("hex");
    const base64Hash = Buffer.from(hmac, "hex").toString("base64");
    return base64Hash;
}

const existingValue = localStorage.getItem('id');
let subscriberId;
if (existingValue !== null) {
    // console.log(existingValue);
    subscriberId = hmac_rawurlsafe_base64_string(existingValue.trim(), process.env.SUPRSEND_SECRET_KEY);
    // console.log(subscriberId);
} else {
    localStorage.setItem('id', '');
}


export default subscriberId;
