export interface Item {
  id?:string;
  name?:string;
  parameters?:string[];
  result?:string[];
  pattern?:string;
  link?:string;
  link2?:string;

  fill?: Map<string,string>;
  moreInfo?:string[];
}

export interface InfoPanel {
  name:string;
  link:string;
}

export interface InfoPanelMKCH {
  header:string;
  informations:string;
  text:Map<string,string>;
}

export interface All {
  all: Item[];
}

export interface AllInfoPanelsMKCH {
  all: InfoPanelMKCH[];
}

export interface AllInfoPanels {
  all: InfoPanel[];
  sources?: string[];
}

export class Note {
  header: string;
  text: string;
  forItemId?:string;
  forGroup?:string;
}


export class TableRow {
  type:string;
  energy:number;
  carbo:number;
  fat:number;
  protein:number;
  ca:number;
  ph:number;
  fe:number;
  val:string;
}

export class AllPatient {
  allPatients:Patient[]
}
export interface Patient {
  name:string;
  saved:Data[]
}
export interface Data {
  item:Item;
  dataInputs:string;
}


