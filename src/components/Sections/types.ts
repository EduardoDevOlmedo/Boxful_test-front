import dayjs from 'dayjs'; 

export type Municipality = string;
export type Department = {
  [key: string]: Municipality[];
};


export type AddressItem = {
  
    key: string;
    address: string;
  };
  
export type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    scheduledDate: string;
    //this date is used to pass the proper value to the datepicker.
    date?: dayjs.Dayjs | null;
    referencePoint: string;
    instructions: string;
    phone: string;
    department: string;
    municipality: string;

    collectionAddress: string;
    
  };

  
export type PackageState = {
  length: string;
  height: string;
  width: string;
  weight: string;
  content: string;
}