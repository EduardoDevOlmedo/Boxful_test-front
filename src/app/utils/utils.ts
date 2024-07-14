import { Department, Municipality } from '@/components/Sections/types';
import dayjs from 'dayjs';


export const elSalvadorData: Department = {
    "San Salvador": ["San Salvador", "Soyapango", "Mejicanos", "Apopa", "Nejapa", "Ciudad Delgado", "Cuscatancingo", "Ayutuxtepeque", "Ilopango", "Tonacatepeque"],
    "Santa Ana": ["Santa Ana", "Chalchuapa", "Candelaria de la Frontera", "Metapán", "Coatepeque"],
    "San Miguel": ["San Miguel", "Chinameca", "San Rafael Oriente", "Moncagua", "Lolotique"],
    "La Libertad": ["Santa Tecla", "Antiguo Cuscatlán", "Zaragoza", "Colón", "San Juan Opico"],
    "Usulután": ["Usulután", "Jiquilisco", "Jucuapa", "Puerto El Triunfo"],
  };
  
export function filterMunicipalities(department: string): Municipality[] {
  if (elSalvadorData.hasOwnProperty(department)) {
    return elSalvadorData[department];
  } else {
    return [];
  }
}

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const isEmpty = (v: string) => v === '';

//no dates before today should be accepted.
export const getDisabledDate = (current: dayjs.Dayjs) => {
  return current && current < dayjs().startOf('day');
};

