export interface Job {
  jobangebotid: number;
  title: string;
  kurzbeschreibung: string;
  langbeschreibung: string;
  monatsgehalt: number;
  jahresgehalt: number;
  urlaubstage: number;
  istremote: boolean;
  vorteile: string;
  einstelldatum: Date;
  bewerbungsfrist: Date;
  istbefristet: boolean;
  start: Date;
  ende: Date;
  adresse: {
    adresseid: number;
    strasse: string;
    hausnummer: string;
    plz: number;
    stadt: string;
    land: string;
  };
  bewerbungstyp: {
    bewerbungstypid: number;
    art: string;
  };
  fachgebiet: {
    fachgebietid: number;
    name: string;
  };
  ansprechpartner: {
    personalerid: number;
    rang: number;
    name: string;
    vorname: string;
    email: string;
    telefon: string;
    ischef: boolean;
  };
}
