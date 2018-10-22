declare module 'parse-author' {
  export type AuthorType = string | {
    name: string;
  } | undefined;
  interface ParseAuthor {
    (author: AuthorType): AuthorType;
  }
  const parseAuthor: ParseAuthor;
  export default parseAuthor;
}
