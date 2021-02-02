export interface MenuModel {
    name: string;
    link: string;
    icon: string;
    children?: MenuModel[];
}
