import { ValidationError } from 'yup';
interface IErros {
    [key: string]: string;
}
export declare function getValidationErros(err: ValidationError): IErros;
export {};
