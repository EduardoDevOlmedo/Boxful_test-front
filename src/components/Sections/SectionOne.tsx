import { useState } from 'react';
import { DatePickerProps, MenuProps, message, Tooltip } from 'antd';
import { ArrowRightOutlined, EnvironmentFilled } from '@ant-design/icons';
import PhoneInput from '@/components/form/PhoneInput/PhoneInput';
import Dropdown from '@/components/form/Dropdown/Dropdown';
import DatePicker from '@/components/form/DatePicker/DatePicker';
import Input from '@/components/form/Input/Input';
import Button from '@/components/form/Button/Button';
import { elSalvadorData, emailRegex, filterMunicipalities, getDisabledDate, isEmpty } from '../../app/utils/utils';
import { AddressItem, FormState } from './types';
import useStepStore from '@/app/stores/useStepStore';
import useSectionOneStore from '@/app/stores/useSectionOneStore';

const SectionOne = () => {


      const [messageApi, contextHolder] = message.useMessage();

      const errorNot = (error: string) => {
        messageApi.error(error);
      };
      
      const addressItems: AddressItem[] = [
        { key: '1', address: 'Colonia Las Magnolias Calle ruta militar #1, San Miguel, San Miguel.' },
        { key: '2', address: 'Colonia La Sultana, Calle El Progreso #4, San Salvador, San Salvador.' },
        { key: '3', address: 'Avenida Roosevelt, Edificio Plaza #5, Santa Ana, Santa Ana.' },
      ];
      
      
      const { setCurrentStep } = useStepStore();
      const departments = Object.keys(elSalvadorData);
      
      const { formState, setFormState } = useSectionOneStore(); 
      
      const isInvalidMail = !emailRegex.test(formState.email);
      const isAnyFieldEmpty = Object.values(formState).some(prop => isEmpty(prop as string));
  
      const [municipalities, setMunicipalities] = useState<string[]>([]);
    
      const generateMenuItems = (items: AddressItem[]) => {
        return items.map(item => ({
          key: item.key,
          label: (
            <div onClick={() => handleChange('collectionAddress', item.address)}>
              {item.address}
            </div>
          ),
        }));
      };
    
      const generateDepartmentItems = (departments: string[]) => {
        return departments.map((department, index) => ({
          key: `${index}`,
          label: (
            <div onClick={() => handleDepartmentChange(department)}>
              {department}
            </div>
          ),
        }));
      };
    
      const generateMunicipalityItems = (municipalities: string[]) => {
        return municipalities.map((municipality, index) => ({
          key: `${index}`,
          label: (
            <div onClick={() => handleChange('municipality', municipality)}>
              {municipality}
            </div>
          ),
        }));
      };
    
      const handleDepartmentChange = (department: string) => {
        handleChange('department', department);
        setMunicipalities(filterMunicipalities(department));
      };
    
      const handleChange = (key: keyof FormState, value: string) => {
        setFormState({
          ...formState,
          [key]: value
        });
      };
    
      const onDatePickerChange: DatePickerProps['onChange'] = (date, dateString) => {
        setFormState({
          ...formState,
          'scheduledDate': dateString as string,
          date
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(isInvalidMail){
          errorNot('El formato del correo no es correcto.')
          return
        }
        if(isAnyFieldEmpty){
          errorNot('Todos los campos deben estar llenos.')
        }
        setCurrentStep(2);
      };
    
      const items: MenuProps['items'] = generateMenuItems(addressItems);
      const departmentItems: MenuProps['items'] = generateDepartmentItems(departments);
      const municipalityItems: MenuProps['items'] = generateMunicipalityItems(municipalities);

  return (
    <form onSubmit={handleSubmit}>
          {contextHolder}
          <div className='first_section'>
          <Dropdown 
            label='📍 Dirección de recolección'
            items={items} 
            placeholder='Direccion'
            value={formState.collectionAddress}
          />
          <DatePicker 
            disabledDate={getDisabledDate}
            label='📅 Fecha Programada'
            value={formState.date}
            onChange={onDatePickerChange}
          />
          </div>
        <div className='second_section'>
        <Input 
            label='Nombres'
            placeholder='Eduardo Antonio'
            value={formState.firstName}
            onChange={e => handleChange('firstName', e.target.value)}
          />
          <Input 
            label='Apellidos'
            placeholder='Olmedo Mojica'
            value={formState.lastName}
            onChange={e => handleChange('lastName', e.target.value)}
          />
          <Input 
            placeholder='ejemplo@mail.com'
            label='Correo Electronico'
            status={isInvalidMail && formState.email !== '' ? 'error' : undefined}
            value={formState.email}
            onChange={e => handleChange('email', e.target.value)}
          />
        </div>
        <div className='third_section'>
        <PhoneInput 
            placeholder='+503 7520-5438'
            className='phone_input'
            label='Telefono' 
            value={formState.phone} 
            onChange={e => handleChange('phone', e.target.value)} 
          />
          <svg className='location_icon' xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
            <path d="M10 12.1875C10.6042 12.1875 11.1198 11.974 11.5469 11.5469C11.974 11.1198 12.1875 10.6042 12.1875 10C12.1875 9.39583 11.974 8.88021 11.5469 8.45312C11.1198 8.02604 10.6042 7.8125 10 7.8125C9.39583 7.8125 8.88021 8.02604 8.45312 8.45312C8.02604 8.88021 7.8125 9.39583 7.8125 10C7.8125 10.6042 8.02604 11.1198 8.45312 11.5469C8.88021 11.974 9.39583 12.1875 10 12.1875ZM10 25C6.64583 22.1458 4.14062 19.4948 2.48438 17.0469C0.828125 14.599 0 12.3333 0 10.25C0 7.125 1.00521 4.63542 3.01562 2.78125C5.02604 0.927083 7.35417 0 10 0C12.6458 0 14.974 0.927083 16.9844 2.78125C18.9948 4.63542 20 7.125 20 10.25C20 12.3333 19.1719 14.599 17.5156 17.0469C15.8594 19.4948 13.3542 22.1458 10 25Z" fill="#ACB3C5"/>
          </svg>
          <Input 
            placeholder='San Salvador, Col. Ejemplo,  Calle Ejemplo'
            className='address'
            label='Direccion'
            value={formState.address}
            onChange={e => handleChange('address', e.target.value)}
          />
        </div>
         <div className='fourth_section'>
         <Dropdown
            label='Departamento'
            items={departmentItems}
            placeholder='Seleccionar Departamento'
            value={formState.department}
          />
          <Dropdown
            label='Municipio'
            items={municipalityItems}
            placeholder='Seleccionar Municipio'
            value={formState.municipality}
          />
           <Input 
            placeholder='Cerca de redondel Arbol de La Paz'
            label='Punto de referencia'
            value={formState.referencePoint}
            onChange={e => handleChange('referencePoint', e.target.value)}
          />
         </div>
          <Input 
            placeholder='Llamar antes de entregar'
            label='Indicaciones'
            value={formState.instructions}
            onChange={e => handleChange('instructions', e.target.value)}
          />
         
          <div className='button_container'>
           <Tooltip title={isAnyFieldEmpty && 'Rellena todos los campos antes de continuar.'}>
             <Button htmlType='submit'
              disabled={isAnyFieldEmpty}
              iconBefore={<ArrowRightOutlined />} type='primary'>Siguiente</Button>
           </Tooltip>
            </div>
        </form>
  )
}

export default SectionOne;