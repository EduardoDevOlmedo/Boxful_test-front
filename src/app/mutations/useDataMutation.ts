import { useMutation } from 'react-query';
import { createDataProps } from './types';


const createData = async ({data, successNot, errorNot}: createDataProps) => {

  const apiURI = `${process.env.baseApiURI}/user` || 'http://localhost:3000/user'


  const response = await fetch(apiURI, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data.user,
      packages: data.packages
    }),
  });

  if (!response.ok) {
    errorNot('Ocurrio un error. Revisa que todos los campos esten llenos y con el formato correcto.')
    throw new Error('Network response was not ok');
  }

  successNot("Datos enviados correctamente.");

  const responseData = await response.json();

  return responseData;
};



export const useCreateDataMutation = () => {
  return useMutation(createData);
};
