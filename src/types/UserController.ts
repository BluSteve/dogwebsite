import {User, burl, postHeaders, UserType} from "./OctopiTypes";

export async function getUsers(): Promise<User[]> {
    const resp = await fetch(burl + '/user');
    const array: any[] = await resp.json();
    array.forEach(x => x.jdate = new Date(x.jdate));
    return array;
}

export async function login(username: string, pw: string): Promise<number> {
    const resp = await fetch(burl + '/user/login', {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify({username, pw})
    });

    return parseInt(await resp.text());
}

export async function signup(username: string, pw: string, name: string, email: string, userType: UserType) {
    await fetch(burl + '/user/signup', {
        method: 'POST',
        headers: postHeaders,
        body: JSON.stringify({username, pw, name, email, userType})
    });
}
