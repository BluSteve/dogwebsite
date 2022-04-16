import {burl, Run} from "./OctopiTypes";

export async function getRuns(pid?: number): Promise<Run[]> {
    const resp = await fetch(burl + '/run?pid=' + pid, {
        credentials: 'include'
    });
    return await resp.json();
}

export async function addRun(pid, ihash, jpid, jhash, classpath) {
    const resp = await fetch(burl + '/run', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pid, ihash, jpid, jhash, classpath})
    });
    return resp.status;
}
