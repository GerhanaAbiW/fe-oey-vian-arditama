export interface ButtonItem {
  text: string;
  link: string;
}

export interface NavbarProps {
  style?: React.CSSProperties; 
  height?: string; 
  logo?: string; 
  buttons: ButtonItem[]; 
}