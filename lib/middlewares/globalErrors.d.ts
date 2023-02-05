import { NextFunction, Request, Response } from 'express';
export declare function globalErrors(err: Error | any, _: Request, response: Response, nextFunction: NextFunction): void;
