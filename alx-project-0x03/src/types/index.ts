export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}