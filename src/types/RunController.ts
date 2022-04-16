import {burl, Project, Run} from "./OctopiTypes";

export async function getRuns(pid?: number): Promise<Run[]> {
    const resp = await fetch(burl + '/run?pid=' + pid, {
        credentials: 'include'
    });
    return await resp.json();
}
