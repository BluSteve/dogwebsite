import {burl, Project} from "./OctopiTypes";

export async function getProjects(): Promise<Project[]> {
    // @ts-ignore
    const resp = await fetch(burl + '/project', {
        credentials: 'include'
    });
    const array: any[] = await resp.json();
    console.log(array);
    array.forEach(x => x.cdate = new Date(x.cdate));
    return array;
}
