import { Activity, DollarSign, Home } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "~/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import type { Route } from "./+types/_dashboard._index";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Dashboard - Real Estate" },
        { name: "description", content: "Overview" },
    ];
}

export default function DashboardIndex() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1.2M</div>
                        <p className="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Available Units
                        </CardTitle>
                        <Home className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">15</div>
                        <p className="text-xs text-muted-foreground">
                            +2 new properties listed
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Web Visits</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from yesterday
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="p-6 pb-0">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">Recent Projects</h3>
                    <p className="text-sm text-muted-foreground pt-1">A list of your recent real estate projects.</p>
                </div>
                <div className="p-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                {
                                    name: "Sunset Villa",
                                    location: "Beverly Hills, CA",
                                    status: "Sale",
                                    price: "$4,500,000",
                                },
                                {
                                    name: "Urban Loft",
                                    location: "New York, NY",
                                    status: "Rent",
                                    price: "$3,200/mo",
                                },
                                {
                                    name: "Seaside Condo",
                                    location: "Miami, FL",
                                    status: "Sale",
                                    price: "$850,000",
                                },
                                {
                                    name: "Mountain Retreat",
                                    location: "Aspen, CO",
                                    status: "Sale",
                                    price: "$2,800,000",
                                },
                                {
                                    name: "Downtown Studio",
                                    location: "Chicago, IL",
                                    status: "Rent",
                                    price: "$1,800/mo",
                                },
                            ].map((project) => (
                                <TableRow key={project.name}>
                                    <TableCell className="font-medium">{project.name}</TableCell>
                                    <TableCell>{project.location}</TableCell>
                                    <TableCell>
                                        <Badge variant={project.status === "Sale" ? "default" : "secondary"}>
                                            {project.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">{project.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}