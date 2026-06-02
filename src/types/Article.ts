import type {IAuthor} from "./Author.ts";
import type {IDiscipline} from "./Discipline.ts";

export interface IArticle {
    _id: string;
    title: string;
    description: string;
    content: string;
    slug: string;
    doi: string;
    authors: IAuthor[]
    discipline: IDiscipline[];
    volume: number;
    issue: number;
    status: "review" | "published" | "archived";
    seo: {
        metaTitle: string,
        metaDescription:string,
    },
    coverImage:string;
    images:[string],
    pdfUrl:string;
    views:number;
    likes:number;
    downloads:number;
    createdAt:Date;
    updatedAt:Date;
}
