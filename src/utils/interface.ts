export interface ResJSON {
  statusCode: number;
  message: string;
  data?: Object | null;
  error?: string;
}

export type LogResponse = {
  ApiName: string;
  UserId: string | null;
  Request: string;
  Response: string;
  Elapsed: string;
};
