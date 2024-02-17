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
    driver: string,
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
        driver: "Milos",
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