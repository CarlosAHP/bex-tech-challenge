import { type RouteConfig } from "@react-router/dev/routes";

export default [
    {
        file: "routes/_auth.tsx",
        children: [
            { path: "login", file: "routes/_auth.login.tsx" },
        ],
    },
    {
        file: "routes/_dashboard.tsx",
        children: [
            { index: true, file: "routes/_dashboard._index.tsx" },
            { path: "properties", file: "routes/_dashboard.properties.tsx" },
            { path: "clients", file: "routes/_dashboard.clients.tsx" },
            { path: "analytics", file: "routes/_dashboard.analytics.tsx" },
        ],
    },
] satisfies RouteConfig;
