import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (key, value)=>{
    const exp = new Date();
    exp.setDate(exp.getDate() + 7);
    cookies.set(key, value, { path: "/", expires: exp })
}

const getCookie = key =>{
    return cookies.get(key)
}

export { getCookie, setCookie }