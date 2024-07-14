import React, { useState } from "react";
import Input from "../form/Input/Input";
import Button from "../form/Button/Button";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import useStepStore from "@/app/stores/useStepStore";
import useSectionOneStore from "@/app/stores/useSectionOneStore";
import useSectionTwoStore from "@/app/stores/useSectionTwoStore";
import { PackageState } from "./types";
import { useCreateDataMutation } from "@/app/mutations/useDataMutation";
import DimensionsInput from "../form/DimensionsInput/DimensionsInput";
import { message, Tooltip } from 'antd';
import { isEmpty } from "@/app/utils/utils";

const SectionTwo = () => {
  const { mutate: sendData, isLoading } = useCreateDataMutation();
  const { formState: userData } = useSectionOneStore();
  const { packages, setPackages } = useSectionTwoStore();
  const { setCurrentStep } = useStepStore();

  const [messageApi, contextHolder] = message.useMessage();
  
  const errorNot = (error: string) => {
    messageApi.error(error);
  };

  const successNot = () => {
    messageApi?.success('Datos enviados correctamente.')
  }
  
  const [formState, setFormState] = useState<PackageState>({
    length: "",
    height: "",
    width: "",
    weight: "",
    content: "",
  });
  
  const isAnyFieldEmpty = Object.values(formState).some(prop => isEmpty(prop));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPackage = () => {
    if(isAnyFieldEmpty) {
      errorNot('Todos los campos deben estar llenos');
      return
    };
    setPackages([...packages, formState]);
    setFormState({
      length: "",
      height: "",
      width: "",
      weight: "",
      content: "",
    });
  };

  const handleDeletePackage = (index: number) => {
    const newPackages = packages.filter((_, i) => i !== index);
    setPackages(newPackages);
  };

  const handlePackageChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedPackages = packages.map((pkg, pkgIndex) =>
      pkgIndex === index
        ? { ...pkg, [event.target.name]: event.target.value }
        : pkg
    );
    setPackages(updatedPackages);
  };

  const handleSend = () => {
    const data = { user: userData, packages };
    sendData({data, successNot, errorNot});
  };

  return (
    <>
      {contextHolder}
      <p className="package_description">Agrega tus bultos</p>
      <form className="package_form_container">
        <div className="second_form_first_section">
          <div className="input_group">
            <svg
              className="box_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M13.6957 24.7812L6.97012 20.75C6.6848 20.5833 6.46571 20.3542 6.31285 20.0625C6.16 19.7708 6.08357 19.4583 6.08357 19.125V11.0938C6.08357 10.7604 6.16 10.4479 6.31285 10.1562C6.46571 9.86458 6.6848 9.63542 6.97012 9.46875L13.7262 5.375C14.0116 5.20833 14.3275 5.125 14.6739 5.125C15.0204 5.125 15.3363 5.20833 15.6216 5.375L22.3777 9.46875C22.6631 9.63542 22.8821 9.86458 23.035 10.1562C23.1879 10.4479 23.2643 10.7604 23.2643 11.0938V19.125C23.2643 19.4583 23.1828 19.7708 23.0197 20.0625C22.8567 20.3542 22.6325 20.5833 22.3472 20.75L15.5299 24.7812C15.2446 24.9479 14.9389 25.0312 14.6128 25.0312C14.2867 25.0312 13.981 24.9479 13.6957 24.7812ZM1.22284 7.15625V4.75C1.22284 3.79167 1.55912 2.96875 2.23167 2.28125C2.90423 1.59375 3.70925 1.25 4.64675 1.25H7.00069V3.125H4.64675C4.19838 3.125 3.82134 3.28125 3.51564 3.59375C3.20993 3.90625 3.05708 4.29167 3.05708 4.75V7.15625H1.22284ZM4.64675 28.75C3.70925 28.75 2.90423 28.4062 2.23167 27.7188C1.55912 27.0312 1.22284 26.2083 1.22284 25.25V22.8438H3.05708V25.25C3.05708 25.7083 3.20993 26.0938 3.51564 26.4062C3.82134 26.7188 4.19838 26.875 4.64675 26.875H7.00069V28.75H4.64675ZM22.3472 28.625V26.75H24.7011C25.1495 26.75 25.5265 26.5938 25.8322 26.2812C26.1379 25.9688 26.2908 25.5833 26.2908 25.125V22.7188H28.125V25.125C28.125 26.0833 27.7887 26.9062 27.1162 27.5938C26.4436 28.2813 25.6386 28.625 24.7011 28.625H22.3472ZM26.2908 7.15625V4.75C26.2908 4.29167 26.1379 3.90625 25.8322 3.59375C25.5265 3.28125 25.1495 3.125 24.7011 3.125H22.3472V1.25H24.7011C25.6386 1.25 26.4436 1.59375 27.1162 2.28125C27.7887 2.96875 28.125 3.79167 28.125 4.75V7.15625H26.2908ZM8.8655 10.5L7.94838 11.0625V12.2188L13.7568 15.625V22.625L14.6739 23.1875L15.591 22.625V15.625L21.43 12.2188V11.0625L20.4824 10.5L14.6739 13.9375L8.8655 10.5Z"
                fill="#ACB3C5"
              />
            </svg>
            <DimensionsInput
              onChange={handleInputChange}
              length={formState.length}
              height={formState.height}
              width={formState.width}
            />
          </div>
          <Input
            className="pounds"
            label="Peso en libras"
            type="number"
            suffix="lb"
            name="weight"
            value={formState.weight}
            onChange={handleInputChange}
          />
          <Input
            label="Contenido"
            className="content"
            name="content"
            value={formState.content}
            onChange={handleInputChange}
          />
        </div>

        <div className="add_package_container">
          <Button
            className="add_package"
            iconBefore={<PlusOutlined />}
            type="default"
            onClick={handleAddPackage}
          >
            Agregar
          </Button>
        </div>
      </form>

      {packages.length !== 0 && (
        <>
          <p className="package_description">Agrega tus bultos</p>
          {packages.map((pack, index: number) => (
            <div key={index} className="packages_container">
              <div className="packages_added">
                <Input
                  className="pounds"
                  label="Peso en libras"
                  type="number"
                  suffix="lb"
                  name="weight"
                  value={pack.weight}
                  onChange={(e) => handlePackageChange(index, e)}
                />
                <Input
                  label="Contenido"
                  className="content"
                  name="content"
                  value={pack.content}
                  onChange={(e) => handlePackageChange(index, e)}
                />
                <div className="input_group">
                  <svg
                    className="box_icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                  >
                    <path
                      d="M13.6957 24.7812L6.97012 20.75C6.6848 20.5833 6.46571 20.3542 6.31285 20.0625C6.16 19.7708 6.08357 19.4583 6.08357 19.125V11.0938C6.08357 10.7604 6.16 10.4479 6.31285 10.1562C6.46571 9.86458 6.6848 9.63542 6.97012 9.46875L13.7262 5.375C14.0116 5.20833 14.3275 5.125 14.6739 5.125C15.0204 5.125 15.3363 5.20833 15.6216 5.375L22.3777 9.46875C22.6631 9.63542 22.8821 9.86458 23.035 10.1562C23.1879 10.4479 23.2643 10.7604 23.2643 11.0938V19.125C23.2643 19.4583 23.1828 19.7708 23.0197 20.0625C22.8567 20.3542 22.6325 20.5833 22.3472 20.75L15.5299 24.7812C15.2446 24.9479 14.9389 25.0312 14.6128 25.0312C14.2867 25.0312 13.981 24.9479 13.6957 24.7812ZM1.22284 7.15625V4.75C1.22284 3.79167 1.55912 2.96875 2.23167 2.28125C2.90423 1.59375 3.70925 1.25 4.64675 1.25H7.00069V3.125H4.64675C4.19838 3.125 3.82134 3.28125 3.51564 3.59375C3.20993 3.90625 3.05708 4.29167 3.05708 4.75V7.15625H1.22284ZM4.64675 28.75C3.70925 28.75 2.90423 28.4062 2.23167 27.7188C1.55912 27.0312 1.22284 26.2083 1.22284 25.25V22.8438H3.05708V25.25C3.05708 25.7083 3.20993 26.0938 3.51564 26.4062C3.82134 26.7188 4.19838 26.875 4.64675 26.875H7.00069V28.75H4.64675ZM22.3472 28.625V26.75H24.7011C25.1495 26.75 25.5265 26.5938 25.8322 26.2812C26.1379 25.9688 26.2908 25.5833 26.2908 25.125V22.7188H28.125V25.125C28.125 26.0833 27.7887 26.9062 27.1162 27.5938C26.4436 28.2813 25.6386 28.625 24.7011 28.625H22.3472ZM26.2908 7.15625V4.75C26.2908 4.29167 26.1379 3.90625 25.8322 3.59375C25.5265 3.28125 25.1495 3.125 24.7011 3.125H22.3472V1.25H24.7011C25.6386 1.25 26.4436 1.59375 27.1162 2.28125C27.7887 2.96875 28.125 3.79167 28.125 4.75V7.15625H26.2908ZM8.8655 10.5L7.94838 11.0625V12.2188L13.7568 15.625V22.625L14.6739 23.1875L15.591 22.625V15.625L21.43 12.2188V11.0625L20.4824 10.5L14.6739 13.9375L8.8655 10.5Z"
                      fill="#ACB3C5"
                    />
                  </svg>
                  <DimensionsInput
                    length={pack.length}
                    height={pack.height}
                    width={pack.width}
                    onChange={(e) => handlePackageChange(index, e)}
                  />
                </div>
              </div>
              <div className="delete_package_container">
                <svg
                  onClick={() => handleDeletePackage(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M8.15625 26.25C7.65625 26.25 7.21875 26.0625 6.84375 25.6875C6.46875 25.3125 6.28125 24.875 6.28125 24.375V6.5625H5V4.6875H10.875V3.75H19.125V4.6875H25V6.5625H23.7188V24.375C23.7188 24.875 23.5312 25.3125 23.1562 25.6875C22.7812 26.0625 22.3438 26.25 21.8438 26.25H8.15625ZM11.4688 21.6875H13.3438V9.21875H11.4688V21.6875ZM16.6562 21.6875H18.5312V9.21875H16.6562V21.6875Z"
                    fill="#F85454"
                  />
                </svg>
              </div>
            </div>
          ))}
        </>
      )}

      <div
        className="button_container"
        style={{ justifyContent: "space-between" }}
      >
        <Button
          onClick={() => setCurrentStep(1)}
          iconAfter={<ArrowLeftOutlined />}
          className="go_back_button"
        >
          Regresar
        </Button>
       <Tooltip open={packages.length === 0} title='Debes agregar al menos un paquete.'>
       <Button
          loading={isLoading}
          disabled={packages.length === 0}
          onClick={handleSend}
          className="send_button"
          iconBefore={<ArrowRightOutlined />}
        >
          Enviar
        </Button>
       </Tooltip>
      </div>
    </>
  );
};

export default SectionTwo;
