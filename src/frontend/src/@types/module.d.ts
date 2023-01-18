declare module "*.scss";

declare module "*.jpg";

declare module "*.jpeg";

declare module "*.png";

declare module "*.svg";

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

interface IWithId {
    id: string;
}

interface IWithClassName {
    className?: string;
}
