import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req, res){
    const pageAccessToken = 'Bearer EAAKRbjZA1ZBooBOwQKlLdIIZC0HOVYgs7WXEpna4sC4s3ZAkSTW9bNpWJsvIo21UotvwwxC3sOfP8zzrThA2QCB120OWYFGJuTL8z4hpBlZBWUM46pRgVZCFRTKNucmP8FDPxMiiUcZCHNrlRBW2Ei2LiAkvJLVsU07eaB2YBfRZBrLZBwI4YWjMXDaSqx1iPfmEukaVcv2Khrhy3W85xR0JZBvBy1zgZC1PG3AXAZDZD';
    const myId = '155834447624471'; // The Facebook user ID of the recipient
    const messageText = 'Hello, this is a test message from your Facebook App!';
    const sentTo = '6281279349292';
    
    const graphApiUrl = `https://graph.facebook.com/v18.0/${myId}/messages`;

    const axiosConfig = {
        headers: {
          'Authorization': pageAccessToken,
          'Content-Type': 'application/json',
        },
    };

    const postData = {
        messaging_product: 'whatsapp',
        to: sentTo,
        type: "template",
        template: {
            name: "hello_world",
            language: {
                code: "en_US"
            }
        },
    };

    await axios.post(graphApiUrl, postData, axiosConfig)
    .then(() => {
        return NextResponse.json({message: "Whatsapp Terkirim"},{status:201});
    })
    .catch(error => {
        return NextResponse.json({message: "Whatsapp Gagal Terkirim",error},{status:500});
    });
}