import type { Route } from "./+types/_dashboard.properties";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Properties - Real Estate" },
        { name: "description", content: "Manage properties" },
    ];
}

export default function PropertiesPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <h1 className="text-2xl font-bold">Properties</h1>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min flex items-center justify-center">
                <p className="text-muted-foreground">Property List Placeholder</p>
            </div>
        </div>
    );
}
