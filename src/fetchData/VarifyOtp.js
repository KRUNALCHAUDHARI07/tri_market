
const VarifyOtp = async(url,data) => {
    const rootUrl = "http://localhost:7500/public/user/";
    const finalUrl =rootUrl+url;
    
        
            const response = await fetch(finalUrl, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
             });
             const getData = await response.json();
            //  console.log(getData);
            console.log("new token created");
            return getData;
             
        
}

export default VarifyOtp
