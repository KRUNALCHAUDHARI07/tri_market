
const createUrl = async(url, method, data, token) => {
    
    const rootUrl = "http://localhost:7500/api/user/";
    const finalUrl =rootUrl+url;
    if(method !== 'GET'){
        const response = await fetch(finalUrl, {
            method: method, 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body:JSON.stringify(data)
         });
        const getData = await response.json();
        // console.log(getData);
        return getData;

        }else{
            const response = await fetch(finalUrl, {
                method: method, 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                
             });
             const getData = await response.json();
             return getData;
        }

}

export default createUrl