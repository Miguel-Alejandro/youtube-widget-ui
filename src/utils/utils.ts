import { ApiError } from "../classes/ApiError";

export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export function setError(httpStatus: number, url: string){
  switch (httpStatus) {
    case 400:
      throw ApiError.badRequest(url);
    case 401:
      throw ApiError.unauthorized(url);
    case 403:
      throw ApiError.forbidden(url);
    case 404:
      throw ApiError.notFound(url);
    case 429:
      throw ApiError.tooManyRequests(url);
    default:
      throw ApiError.serverError(url);
  }
}