declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
declare module '*.ico';
declare module '*.png';
declare module '*.jpg';

declare var DEVELOPMENT:boolean;