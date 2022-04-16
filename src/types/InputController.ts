import {burl, Project, Input} from "./OctopiTypes";

export async function getInputs(pid?: number): Promise<Input[]> {
    const resp = await fetch(burl + '/input?pid=' + pid, {
        credentials: 'include'
    });
    return await resp.json();
}

export async function uploadInput(pid: number, ijson): Promise<number> {
    const resp = await fetch(burl + '/input', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pid, ijson})
    });

    return resp.status;
}
