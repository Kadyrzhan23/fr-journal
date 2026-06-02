export type AuthorStatus = "active" | "inactive" | "blocked";

export interface IAuthor {
    _id: string;

    firstName: string;
    lastName: string;
    middleName?: string;

    displayName: string;
    slug: string;

    dateOfBirth: Date;

    degree: string;
    specialization: string[];
    researchAreas: string[];

    orcid?: string;
    scopusId?: string;
    googleScholarId?: string;

    workPlace: WorkPlace;

    email?: string;
    phone?: string;
    avatar?: string;
    images?: string[];
    stats: number;
    status: AuthorStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface WorkPlace {
    name: string;
    country: string;
    city?: string;
    department?: string;
    position?: string;
}
