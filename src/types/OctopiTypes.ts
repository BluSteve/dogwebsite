export const burl = 'http://localhost:8080';

export class Machine {
    mid: number;
    mname: string;
    token: string;
    cores: number;
    cdate: Date;
    jpid: number;
    jhash: string;
}

export class ActiveMachine extends Machine {
    ip: string;
    ccode: string;
    region: string;
    city: string;
    latitude: number;
    longitude: number;
}

export class User {
    uid: number;
    username: string;
    name: string;
    jdate: Date;
    email: string;
    pw: string;
}

export class Client extends User {
    hours_used: number;
}

export class Project {
    pid: number;
    pname: string;
    cdate: Date;
}

export class Input {
    pid: number;
    ihash: string;
    ijson: string;
}

export class Jar {
    jpid: number;
    jhash: string;
    jfile: string;
    udate: Date;
    ispublic: boolean;
}

export class Run {
    pid: number;
    ihash: string;
    rid: number;
    jpid: number;
    jhash: string;
    uid: number;
    classpath: string;
    ohash: string;
    ojson: string;
}

export class Running {
    pid: number;
    rid: number;
    mname: string;
    start_time: Date;
    end_time: Date;
}

export enum UserType {
    ADMIN,
    CLIENT
}
