function embed(
    path: string,
    width: number = 640,
    height: number = 480,
    alt: string = "decorator image"
) {
    "use strict";
    return (target: Record<string, any>, propKey: string) => {
        target[propKey] = document.createElement("img");
        let img = <HTMLImageElement>target[propKey];
        img.src = path;
        img.alt = alt;
        img.width = width;
        img.height = height;
    };
}