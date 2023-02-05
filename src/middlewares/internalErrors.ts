import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'yup';

import { AppError } from '../exceptions/AppError.js';
import { ApiError } from '../exceptions/ApiError.js';
import { getValidationErros } from '../utils/getValidationErros.js';

export function internalErrors(
  err: Error | any,
  _request: Request,
  response: Response,
  nextFunction: NextFunction
): void {
  if (err instanceof ApiError) {
    response.status(err.statusCode).json({
      code: err.code,
      message: err.message
    });

    return;
  }

  if (err instanceof AppError) {
    response.status(422).json({
      code: err.code,
      message: err.message
    });

    return;
  }

  if (err instanceof ValidationError) {
    const erros = getValidationErros(err);

    response.status(400).json({
      code: 'application/validations-fail',
      message: 'Validation fails.',
      erros
    });

    return;
  }

  if (err.codePrefix && err.errorInfo) {
    response.status(400).json(err.errorInfo);
    return;
  }

  nextFunction(err);
}
