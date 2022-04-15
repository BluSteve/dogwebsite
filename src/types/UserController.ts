import {User, burl, UserType} from "./OctopiTypes";

export async function getUsers(): Promise<User[]> {
    const resp = await fetch(burl + '/user');
    const array: any[] = await resp.json();
    array.forEach(x => x.jdate = new Date(x.jdate));
    return array;
}

export async function login(username: string, password: string): Promise<number> {
    const resp = await fetch(burl + '/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    });

    return parseInt(await resp.text());
}

export async function signup(username: string, password: string, name: string, email: string, userType: UserType) {
    const resp = await fetch(burl + '/user/signup', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password, name, email, userType})
    });
}
