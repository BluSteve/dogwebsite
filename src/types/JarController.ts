import {burl, Jar} from "./OctopiTypes";

export async function getJars(pid?: number): Promise<Jar[]> {
    const resp = await fetch(burl + '/jar?pid=' + pid, {
        credentials: 'include'
    });
    const array = (await resp.json());
    array.forEach(jar => jar.udate = new Date(jar.udate));
    return array;
}

export async function deleteFromProject(pid: number, jpid: number, jhash: string) {
    const resp = await fetch(burl + '/jar/delete-from-project', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pid, jpid, jhash})
    })
    return resp.status;
}

export async function deleteLegit(jpid: number, jhash: string) {
    const resp = await fetch(burl + '/jar/delete', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jpid, jhash})
    });
    return resp.status;
}

export async function togglePublic(jpid: number, jhash: string) {
    const resp = await fetch(burl + '/jar/toggle-public', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jpid, jhash})
    });
    return resp.status;
}

export async function uploadJar(jpid: number, jfile, ispublic: boolean): Promise<number> {
    const resp = await fetch(burl + '/jar', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({jpid, jfile, ispublic})
    });

    return resp.status;
}
