export interface ApiAvengersListI {
  id:string;
  hero: string;
  name: string;
  link: string;
  img: string;
  isActive?: boolean
}

export interface AvengersListI {
  id:string;
  hero: string;
  name: string;
  link: string;
  img: string;
}

export interface AvengersBodyRequest {
  hero: string;
  name: string;
  link: string;
  img: string;}
