export interface LocalizedString {
    en: string;
    ru: string;
    uz: string;
    kz: string;
}
export interface IIssue {
    _id: string;

    volumeId: string;

    number: number;

    title: LocalizedString;

    description: LocalizedString | null;

    isSpecial: boolean;

    specialTheme: LocalizedString | null;

    publishedAt: Date | null;

    createdAt: Date;
    updatedAt: Date;
}

