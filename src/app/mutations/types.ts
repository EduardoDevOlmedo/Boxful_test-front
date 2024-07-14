import { FormState, PackageState } from "@/components/Sections/types";

type Data = {
    user: FormState;
    packages: PackageState[];
}

export type createDataProps = {
  data: Data;
  successNot: (text: string) => void;
  errorNot: (text: string) => void;

}
