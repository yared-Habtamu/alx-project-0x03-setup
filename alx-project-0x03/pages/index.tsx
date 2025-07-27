// interface/index.ts

export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export interface HomePageProps {
  message: string;
}
