import axios from "axios";
export type postTypes = {
  title: string;
  body: string;
  id: number;
};
export const options: string[] = [
  "KING-JAJA HOSTEL",
  "BIOBAKU HALL",
  "ENI NJOKU HALL",
  "MS MARIERE",
  "SODEINDE HALL",
  "EL-KANEMI HALL"
];
export const assets: { icon: string; title: string }[] = [
  {
    icon: "fa-solid fa-gauge",
    title: "Dashboard",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Student",
  },
  {
    icon: "fa-solid fa-user",
    title: "Teacher",
  },
  {
    icon: "fa-solid fa-school",
    title: "Classes",
  },
  {
    icon: "fa-solid fa-person",
    title: "Porters",
  },
  {
    icon: "fa-solid fa-chart-simple",
    title: "Chart",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Student",
  },
  {
    icon: "fa-solid fa-user",
    title: "Teacher",
  },
  {
    icon: "fa-solid fa-user",
    title: "Food",
  },
  {
    icon: "fa fa-house",
    title: "Apps",
  },
  {
    icon: "fa fa-house",
    title: "Chart",
  },
];
export class Helpers {
  static async getHostels(url:string) {
    let hostels:any
    fetch(url)
		.then(async res => {
			const isJson = res.headers.get('content-type')?.includes('application/json')
			const data = isJson ? await res.json() : null
	  
			if (!res.ok) {
				
			  const error = (data && data.message) || res.status;
			  
			  return Promise.reject(error)
			
			} else if (res.ok) {
				
        hostels = data
	
			}
		})
		.catch(err => {
      return JSON.stringify(err)
		})
    return hostels
  }
}