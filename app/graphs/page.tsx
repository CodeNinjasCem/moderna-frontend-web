"use client";
import * as React from "react";
// import SimpleBarCharts from "@/components/charts/simple-bar-charts";

import PayPieChart from "@/components/charts/pay-pie-chart";
import HistogramBarChart from "@/components/charts/histogram";
import IncomeBarChart from "@/components/charts/income";
import SimpleBarChart from "@/components/charts/simple-barcharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const data01: any = [
    {
        name: "Spaghetti La Moderna",
        value: 80,
    },
    {
        name: "Sopa Munición La Moderna",
        value: 40,
    },
    {
        name: "Sopa Dino Figuras La Moderna",
        value: 72,
    },
];

const data = [
    { amount: "650", time: "12", last_visited: "25/10/2023" },
    { amount: "1650", time: "1", last_visited: "21/10/2023" },
    { amount: "1200", time: "5", last_visited: "16/10/2023" },
    { amount: "600", time: "9", last_visited: "11/10/2023" },
    { amount: "400", time: "12", last_visited: "6/10/2023" },
    { amount: "500", time: "5", last_visited: "1/10/2023" },
    { amount: "1000", time: "2", last_visited: "30/09/2023" },
    { amount: "400", time: "11", last_visited: "25/09/2023" },
];

const data02 = [
    { month: "Mayo", visits: 1300 },
    { month: "Junio", visits: 1600 },
    { month: "Julio", visits: 1400 },
    { month: "Agosto", visits: 1700 },
    { month: "Septiembre", visits: 1900 }
];

const data03 = [
    { product: "Spaghetti", visits: 1203 },
    { product: "Harina", visits: 987 },
    { product: "Fideo", visits: 897 },
];

const data04 = [
    {
        name: "Hombre",
        value: 30,
    },
    {
        name: "Mujer",
        value: 43,
    },
    {
        name: "Otro",
        value: 17,
    },
];

const BranchStatsPage = () => {
    return (
            <div className="flex-1 space-y-4 p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Producto del mes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Galleta de animalitos</div>
                    <p className="text-xs text-muted-foreground">
                      Primer producto escaneado por nuevos clientes
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Producto mas consumido
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">Spaghetti</div>
                    <p className="text-xs text-muted-foreground">
                        El favorito de las familias
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Familias La Moderna</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3 integrantes</div>
                    <p className="text-xs text-muted-foreground">
                    Tamaño promedio de las famlias
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                    Recetas generadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">120 nuevas recetas</div>
                    <p className="text-xs text-muted-foreground">
                      Por parte de los clientes
                    </p>
                  </CardContent>
                </Card>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
                    <div>
                        <Card className="p-4">
                            <CardTitle  className="mb-6 mt-6">Productos mas escaneados historicamente</CardTitle>
                            <PayPieChart data01={data01} />
                        </Card>
                    </div>
                    <div>
                        <Card className="p-4">
                            <CardTitle  className="mb-6 mt-6">Captación de nuevos usuarios</CardTitle>
                            <SimpleBarChart 
                            inData={data02}
                            fill={"#ff8000"} />
                        </Card>
                    </div>
                    <div>
                        <Card className="p-4">
                            <CardTitle className="mb-6 mt-6">Productos mas populares</CardTitle>
                            <SimpleBarChart 
                            inData={data03}
                            fill={"#808000"}
                            xaxis={"product"}
                            datak={"visits"} />
                        </Card>
                    </div>
                    <div>
                        <Card className="p-4">
                            <CardTitle className="mb-6 mt-6">Genero de nuestros usuarios</CardTitle>
                            <PayPieChart data01={data04}/>
                        </Card>
                    </div>
                </div>
            </div>
    );
};

export default BranchStatsPage;
