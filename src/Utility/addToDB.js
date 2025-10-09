const getStoredApp=()=>{
        
    const storedAppSTR=localStorage.getItem('appList')

    if(storedAppSTR){
        const storedAppData=JSON.parse(storedAppSTR)
        return storedAppData
    }
    else{
        return []
    }
}

const addToStoreDB=(id)=>{
        const storedAppData=getStoredApp()
        if(storedAppData.includes(id)){
                alert('Already installed')
        }
        else{
            storedAppData.push(id)
            const data =JSON.stringify(storedAppData)
            localStorage.setItem('appList',data)
        }

}

const removeData=(id)=>{
        const storedAppData=getStoredApp();
        const removeData=storedAppData.filter(appId=>parseInt(appId)!==id);
        localStorage.setItem('appList',JSON.stringify(removeData))
}
export {addToStoreDB,getStoredApp,removeData}