declare module '*.scss' {
    const content: object;
    export default content;
}

declare module '*.json' {
    const content: object | array;
    export default content;
}

declare module '*.svg' {
    const content: string;
    export default content;
}
