export interface Series {
    name:string;
    type:string;
    data:number[];
}

export interface Graphs {
    all: AllSeries[];
    sources?: string[];
}

export interface AllSeries {
    id?:string;
    series:Series[];
    name:string;
    legend:string[];
    data:number[];
    fields?:string[];
    step?:number;
}

