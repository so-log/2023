import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export const api = axios.create({ baseURL: '/board-api/v1/', timeout: 0 });
