import { ButtonProps as AntButtonProps } from "antd";
import React, { ReactNode } from "react";

export interface ButtonProps extends AntButtonProps {
     iconBefore?: ReactNode;
     iconAfter?: ReactNode;
     children: ReactNode
}