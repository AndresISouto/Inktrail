export interface UserLogRequest {
  email: string;
  password: string;
}
export interface UserRegisterRequest {
  name: string;
  email: string;
  password: string;
}
export interface UserResponse {
  id: number;
  name: string;
  email: string;
}
