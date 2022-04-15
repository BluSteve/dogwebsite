export const burl = 'http://localhost:8080';
export const postHeaders = {'Content-Type': 'application/json'};
export const getInit = {
    headers: {'cookie': 'token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.d-uYW-1RBefhSpDhbMqcN2fNqb1JFHs5vu26FxhD_Bs'}, credentials: 'include'
};

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

export enum UserType {
    ADMIN,
    CLIENT
}
