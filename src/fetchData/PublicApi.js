import React from 'react'

const PublicApi = async(url,data) => {
    const rootUrl = 'http://localhost:7500/public/user/';
    const finalUrl = "rootUrl + url";
    console.log(finalUrl);
    const response = await fetch(finalUrl,{
        method:'POST',
        body: JSON.stringify({
            "full_name":"Krunal",
            "phone":8460104585
        })
    });
    const getData = await response.json();
    return getData;
}

export default PublicApi
