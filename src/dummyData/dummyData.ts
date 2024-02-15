import { Location, Task } from "@/app/new_tour/page";

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
    }
));