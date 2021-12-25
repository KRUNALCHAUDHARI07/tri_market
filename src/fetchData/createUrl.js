
const createUrl = async(url, method, data) => {
    const rootUrl = "http://localhost:7500/api/user/";
    const finalUrl =rootUrl+url;
    if(method !== 'GET'){
        const response = await fetch(finalUrl, {
            method: method, 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNDIxODYyLCJleHAiOjE2NDA0MjU0NjJ9.GenofieoMLVJTY_hFdztxTFJk2_JxHMeyBZhUUIMyVg'
                },
                body:JSON.stringify(data)
         });
        const getData = await response.json();
        return getData;

        }else{
            const response = await fetch(url, {
                method: method, 
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQwNDIxODYyLCJleHAiOjE2NDA0MjU0NjJ9.GenofieoMLVJTY_hFdztxTFJk2_JxHMeyBZhUUIMyVg'
                },
                body:JSON.stringify(data)
             });
             const getData = await response.json();
             return getData;
        }

}

export default createUrl