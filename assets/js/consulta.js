let dataBase = (()=>{
    const url = "http://127.0.0.1:5501/animales.json";
    const getData = async () =>{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    return { getData }
})();

export default dataBase;