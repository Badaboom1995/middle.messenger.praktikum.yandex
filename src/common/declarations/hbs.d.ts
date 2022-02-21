declare module '*.hbs' {
    const content: (context: any) => string
    export default content;
}
declare module "*.png" {
    const value: string;
    export default value;
}
