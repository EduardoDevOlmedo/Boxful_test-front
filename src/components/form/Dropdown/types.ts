import { DropDownProps as AntDropdownProps, MenuProps } from "antd";

export interface DropdownProps extends AntDropdownProps {
    items:  MenuProps['items'];
    label?: string;
    value?: string;
    placeholder?: string;
}