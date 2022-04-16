import {burl} from "./OctopiTypes";

export async function getMachines(pid?: number, active?: boolean) {
    const resp = await fetch(burl + '/machine' +
        (pid ? '?pid=' + pid : '') + (active ? '&active=' + active : ''), {
        credentials: 'include'
    });
    const array = (await resp.json());
    array.forEach(machine => machine.cdate = new Date(machine.cdate));
    return array;
}

export async function deleteFromProject(pid: number, mname: string) {
    const resp = await fetch(burl + '/machine/delete-from-project', {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({pid, mname})
    })
    return resp.status;
}
