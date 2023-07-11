import { authOptions } from "@/lib/auth";
import axios from "axios";
import { getServerSession } from "next-auth";
export type postTypes = {
  title: string;
  body: string;
  id: number;
};
export type payload = {
  access: string;
  id: string;
  email: string;
  matric_number: string;
  hostel: string;
  first_name: string;
  last_name: string;
  is_student: boolean;
  is_porter: boolean;
  is_superuser: boolean;
  is_staff: boolean;
  refresh: string;
};
enum categories {
  light_issues = "fa-solid fa-lightbulb",
  water_issues = "fa-solid fa-droplet",
  theft = "fa-solid fa-person-through-window",
  others = "fa-solid fa-circle-info",
  bed_bug = "fa-solid fa-bug",
}
export const catIcons: { title: string; icon: string }[] = [
  {
    title: "Light issues",
    icon: categories.light_issues,
  },
  {
    title: "Water Issues",
    icon: categories.water_issues,
  },
];
export const options: string[] = [
  "KING-JAJA HOSTEL",
  "BIOBAKU HALL",
  "ENI NJOKU HALL",
  "MS MARIERE",
  "SODEINDE HALL",
  "EL-KANEMI HALL",
];
export type studType = {
  faculty: string | null | undefined;
  department: string | null;
  students_details: {
    first_name: string | null;
    last_name?: string | null;
    matric_number?: string | null;
  };
  block_no: string | null;
  room_no: string | null;
};
export type porterType = {
  porter_details: {
    email: string | null;
    first_name: string | null;
    last_name: string | null;
  };
};
export const assets: {
  icon: string;
  title: string;
  link: `/` | "/students" | "/complaints" | "/porters";
}[] = [
  {
    icon: "fa-solid fa-gauge",
    title: "Dashboard",
    link: "/",
  },
  {
    icon: "fa-solid fa-person",
    title: "Porters",
    link: "/porters",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Students",
    link: "/students",
  },
];
export class Helpers {
  static async getHostels(url: string) {
    let hostels: any;
    fetch(url)
      .then(async (res) => {
        const isJson = res.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await res.json() : null;

        if (!res.ok) {
          const error = (data && data.message) || res.status;

          return Promise.reject(error);
        } else if (res.ok) {
          hostels = data;
        }
      })
      .catch((err) => {
        return JSON.stringify(err);
      });
    return hostels;
  }
  static fetchData = async (url: string) => {
    const session = await getServerSession(authOptions);
    const res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + session?.user.access,
      },
    });

    return res.json();
  };
  static getRefresh = async (signIn: Promise<undefined>) => {
    const session = await getServerSession(authOptions);
    const url =
      "https://hostelcomplaintsmanagementsystem.onrender.com/api/auth/login/refresh/";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: session?.user.refresh }),
    });
    if (res.status === 401) {
      signIn;
    }

    return res.json();
  };
  static showError(type: string) {
    switch (type) {
      case "email":
        break;

      default:
        break;
    }
  }
}
