export interface ButtonItem {
  text: string;
  onClick: () => void;
}

export interface NavbarProps {
  style?: React.CSSProperties; 
  height?: string; 
  logo?: string; 
  buttons: ButtonItem[]; 
}