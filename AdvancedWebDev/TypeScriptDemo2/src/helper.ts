type Person = {
    fname: string;
    lname: string;
    isMarried: boolean;
    children: Person[];
    getAge: (num:number, fname:string) => number;
}

export {Person};

let getFullName = (person: Person): string => {
    return `${person.fname} ${person.lname}`;
};
export{getFullName};