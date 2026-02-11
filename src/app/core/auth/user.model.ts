export type UserRole = 'user' | 'admin' | null;

export interface UserProfile {
  name: string;
  role: UserRole;
}
