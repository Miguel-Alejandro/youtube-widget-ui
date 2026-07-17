type StatusConfig = {
  type: string;
  title: string;
  detail: string;
};

const STATUS_MESSAGES: Record<number, StatusConfig> = {
  400: {
    type: 'bad-request',
    title: 'Bad Request',
    detail: 'The request could not be understood due to malformed syntax.',
  },
  401: {
    type: 'unauthorized',
    title: 'Unauthorized',
    detail: 'Authentication is required to access this resource.',
  },
  403: {
    type: 'forbidden',
    title: 'Forbidden',
    detail: 'You do not have permission to access this resource.',
  },
  404: {
    type: 'not-found',
    title: 'Not Found',
    detail: 'The requested resource could not be found.',
  },
  429: {
    type: 'too-many-requests',
    title: 'Too Many Requests',
    detail: 'You have exceeded the API rate limit.',
  },
  500: {
    type: 'internal-server-error',
    title: 'Internal Server Error',
    detail: 'An unexpected error occurred on the server.',
  },
};

export class ApiError extends Error {
  readonly type: string;
  readonly status: number;
  readonly detail: string;
  readonly instance: string;

  private constructor(status: number, instance: string) {
    const config = STATUS_MESSAGES[status] ?? STATUS_MESSAGES[500];

    super(config.title);
    this.name = 'ApiError';
    this.type = config.type;
    this.status = status;
    this.detail = config.detail;
    this.instance = instance;

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  static badRequest(instance: string = ''): ApiError {
    return new ApiError(400, instance);
  }

  static unauthorized(instance: string = ''): ApiError {
    return new ApiError(401, instance);
  }

  static forbidden(instance: string = ''): ApiError {
    return new ApiError(403, instance);
  }

  static notFound(instance: string = ''): ApiError {
    return new ApiError(404, instance);
  }

  static tooManyRequests(instance: string = ''): ApiError {
    return new ApiError(429, instance);
  }

  static serverError(instance: string = ''): ApiError {
    return new ApiError(500, instance);
  }

  toJSON() {
    return {
      type: this.type,
      title: this.message,
      status: this.status,
      detail: this.detail,
      instance: this.instance,
    };
  }
}
