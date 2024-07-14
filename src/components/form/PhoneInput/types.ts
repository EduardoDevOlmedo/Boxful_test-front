import { InputProps } from "antd";

export interface  PhoneInputProps extends InputProps {
    value: string;
    flag?: string;
    label?: string;
};