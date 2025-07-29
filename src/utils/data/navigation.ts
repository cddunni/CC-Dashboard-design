import { MainMenu } from "../types";

export const mainMenu: MainMenu[] = [
  {
    id: "home",
    url: "/",
    label: "Marketing",
    icon: "bi:megaphone-fill",
  },
  {
    id: "analytics",
    url: "/analytics",
    label: "Analytics",
    icon: "entypo:bar-graph",
  },
  {
    id: "business",
    url: "/business",
    label: "Business",
    icon: "basil:bag-solid",
  },
  {
    id: "project",
    url: "/project",
    label: "Project",
    icon: "bi:clipboard-data-fill",
  },
  {
    id: "hrm",
    url: "/hrm",
    label: "HRM",
    icon: "mdi:flowchart",
  },
  {
    id: "mobile-app",
    url: "/mobile-app",
    label: "Mobile App",
    icon: "gravity-ui:square-dot",
  },
  {
    id: "landing-page",
    url: "/landing-page",
    label: "Landingpage",
    icon: "bi:rocket-takeoff-fill",
  },
  {
    id: "components",
    label: "Components",
    icon: "tabler:stack-filled",
    subMenu: [
      {
        id: "components-option-1",
        url: "",
        label: "Components-option-1",
      },
    ],
  },
  {
    id: "page",
    label: "Pages",
    icon: "tdesign:file-1-filled",
    subMenu: [
      {
        id: "pages-option-1",
        url: "",
        label: "Pages-option-1",
      },
    ],
  },
  {
    id: "apps",
    label: "Apps",
    icon: "bi:puzzle-fill",
    subMenu: [
      {
        id: "app-option-1",
        url: "/app/",
        label: "App-option-1",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    icon: "icon-park-solid:file-text",
    subMenu: [
      {
        id: "content-option-1",
        url: "",
        label: "Content-option-1",
      },
    ],
  },
  {
    id: "users",
    label: "Users",
    icon: "mdi:user",
    subMenu: [
      {
        id: "users-option-1",
        url: "",
        label: "Users-option-1",
      },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    icon: "jam:document-f",
    subMenu: [
      {
        id: "documentation-option-1",
        url: "",
        label: "Documentation-option-1",
      },
    ],
  },
];
