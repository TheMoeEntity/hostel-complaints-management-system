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
export const assets: { icon: string; title: string, link:``|'/students'|'/complaints'|'/porters' }[] = [
  {
    icon: "fa-solid fa-gauge",
    title: "Dashboard",
    link:''
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Students",
    link:'/students'
  },
  {
    icon: "fa-solid fa-person",
    title: "Porters",
    link:'/porters'
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
  static showError(type:string) {
    switch (type) {
      case 'email':
        
        break;
    
      default:
        break;
    }
  } 
}