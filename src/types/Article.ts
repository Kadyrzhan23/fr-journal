export interface IArticle {
    _id: string;
    slug: string;
    issueId: string;
    issueNumber: number;
    volumeNumber: number;
    authors: IArticleAuthor[];
    editorId: string;
    createdBy: string;
    status: ArticleStatus;
    reviewNote: string;
    title: string;
    abstract: string;
    body?: string;
    pdfUrl: string;
    topicCode: TopicCode;
    keywords: string[];
    doi: string | null;
    pageStart: number;
    pageEnd: number;
    isOpenAccess: boolean;
    isFeatured: boolean;
    viewCount: number;
    downloadCount: number;
    submittedAt: Date ;
    publishedAt: Date ;
    createdAt: Date;
    updatedAt: Date;
}

export type ArticleStatus = "created" | "submitted" | "revision_requested" |
    "approved" | "rejected" | "published" | "retracted" | "updated"

export type TopicCode = "chemical" | "biological" | "technical" |
    "agricultural" | "economic" | "veterinary"


export interface IArticleAuthor {
    userId: string;
    order: number;

    corresponding: boolean;
}