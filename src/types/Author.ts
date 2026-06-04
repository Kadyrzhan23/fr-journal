export type UserRole = "author" | "admin" | "editor";

export interface IUser {
    _id: string;

    firstName: string;
    lastName: string;

    email: string;
    phone: string;

    role: UserRole;

    degree: string | null;
    workplace: string | null;

    country: string;
    orcid: string | null;

    avatarUrl: string | null;

    isVerified: boolean;

    lastLoginAt: Date;

    createdAt: Date;
    updatedAt: Date;
}