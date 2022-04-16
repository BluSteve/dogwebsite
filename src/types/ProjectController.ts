import {burl, Client, Project, User} from "./OctopiTypes";

export async function getProjects(pid?: number): Promise<Project[]> {
    const resp = await fetch(burl + '/project' + (pid ? '?pid=' + pid : ''), {
        credentials: 'include'
    });
    const array: any[] = await resp.json();
    array.forEach(x => x.cdate = new Date(x.cdate));
    return array;
}

export async function getClients(pid: number): Promise<Client[]> {
    const resp = await fetch(burl + '/project/clients?pid='+pid, {
        credentials: 'include'
    });
    const array: any[] = await resp.json();
    array.forEach(x => x.jdate = new Date(x.jdate));
    return array;
}

export async function getAdmins(pid: number): Promise<User[]> {
    const resp = await fetch(burl + '/project/admins?pid='+pid, {
        credentials: 'include'
    });
    const array: any[] = await resp.json();
    array.forEach(x => x.jdate = new Date(x.jdate));
    return array;
}
