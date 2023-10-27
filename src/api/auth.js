import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://quiz.com.ua/api',
});

export const setToken = token => {
    instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
    instance.defaults.headers.Authorization = '';
};

export async function currentUser() {
    const { data } = await instance.get('/users/current');
    setToken(data.token);
    return data;
}

export async function getUserStats() {
    // {avatar, name, password, email}
    const { data } = await instance.get('/auth/stats');
    return data;
}

export async function registerUser(userData) {
    // {name, email, password}
    const { data } = await instance.post('/auth/sign-up', userData);
    setToken(data.token);
    return data;
}

export async function loginUser(userData) {
        //  {email, password}
    const { data } = await instance.post('/auth/sign-in', userData);
    setToken(data.token);
    return data;
}


export async function logOutUser() {
    const { data } = await instance.delete('/auth/sign-out');
    clearToken();
    return data;
}

export async function updateUser(userData) {
    // {avatar, name, password, email}
    const { data } = await instance.patch('/auth/update', userData);
    return data;
}







