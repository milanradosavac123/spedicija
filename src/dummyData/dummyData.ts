import { Location, Task } from "@/app/tours/new_tour/page";

export interface TourInfo {
    id: number,
    tourName: string,
    tourDriver: string,
    tourVehicle: string,
    tourDispacherName: string,
    dateCreated: Date,
    locations: Location[]
}

export interface TourTableData {
    tourName: string,
    tourDriver: string,
    startDate: string,
    endDate: string,
    luStatus: string,
}

export interface RouteTableData {
    routeName: string,
    driver: string,
    startDate: string,
    endDate: string,
    luStatus: string,
}

export interface VehicleTableData {
    vehicleName: string,
    vehicleType: string,
    vehicleWeight: string,
    vehicleHeight: number,
    vehicleWidth: number
}

const dummyTasks = Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
    {
        text: "jfiodajdos;ifdsfio",
        isDone: false,
    } as Task
));

const dummyLocations = Array.from({ length: 5 }, (_, index) => index + 1).map((number) => (
    {
        name: "fodhspojhsafjkudshfoi",
        address: "Berlin, Germany",
        tasks: dummyTasks
    } as Location
));

export const dummyTourData = Array.from({ length: 73 }, (_, index) => index + 1).map((number) => (
    {
        id: number,
        tourName: `Berlin - Bonn_${number}`,
        tourDriver: "Milos",
        tourVehicle: "Mercedes",
        tourDispacherName: "Philipp",
        dateCreated: new Date(),
        locations: dummyLocations
    } as TourInfo
));

export const tourTableData = Array.from({ length: 37 }, (_, index) => index + 1).map((number) => (
    {
        tourName: `Berlin - Bonn_${number}`,
        tourDriver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    } as TourTableData
));

export const routeTableData = Array.from({ length: 37 }, (_, index) => index + 1).map((number) => (
    {
        routeName: `Berlin - Bonn_${number}`,
        driver: "Milos",
        startDate: "12/12/2023",
        endDate: "13/12/2023",
        luStatus: "Loaded",
    } as RouteTableData
));

export const vehicleTableData = Array.from({ length: 37 }, (_, index) => index + 1).map((number) => (
    {
        vehicleName: number % 2 === 0 ? "Mercedes-Benz Actros 1845 LS 4x2" : "Man TGL 8.160 4x2",
        vehicleType: "Truck",
        vehicleWeight: number % 2 === 0 ? "18" : "8",
        vehicleHeight: number % 2 === 0 ? 3.8 : 3,
        vehicleWidth: number % 2 === 0 ? 2.5 : 2.3
    } as VehicleTableData
));