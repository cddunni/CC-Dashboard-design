export type MainMenu = {
    id: string;
    url?: string;
    label: string;
    icon: string;
    subMenu?: { id: string; label: string; url: string }[];
  };