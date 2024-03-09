import { Location, Task } from "@/app/tours/new_tour/page";
import Conversation from "@/model/Conversation";
import Message from "@/model/Message";
import User from "@/model/User";
import next from "#/public/next.svg";
import favicon from "#/src/app/favicon.ico";

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

export interface DriverTableData {
    firstName: string,
    lastName: string
}

export interface Document {
    fileName: string,
    fileUrl: string,
    dateCreated: Date
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

export const driverTableData = Array.from({ length: 37 }, (_, index) => index + 1).map((number) => (
    {
        firstName: number % 2 === 0 ? "Mileta" : "Milos",
        lastName: "Milincic",
    } as DriverTableData
));

export const documents = Array.from({ length: 73 }, (_, index) => index + 1).map((number) => (
    {
        fileName: "Sample",
        fileUrl: "https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf",
        dateCreated: new Date()
    } as Document
));

export const conversationsAlt = Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
    {
        id: number.toString(),
        createdAt: new Date(),
        lastMessageAt: new Date(),
        name: number % 4 === 0 && "adfdfdsfdfsds",
        isGroup: number % 4 === 0,
    } as Conversation
));

export const conversationsAltIds = conversationsAlt.map((conversationAlt) => conversationAlt.id);

export const users = Array.from({ length: 20 }, (_, index) => index + 1).map((number) => (
    {
        id: `dfssdfsfdfsfsdfd-${number}`,
        name: number % 2 === 0 ? "Mileta Milincic" : "Milos Milincic",
        email: number % 2 === 0 ? "mileta@gmail.com" : "milos@gmail.com",
        password: "fouasdfhdsao;fhyoufds",
        createdAt: new Date(),
        updatedAt: new Date(),
        conversationIds: conversationsAltIds,
        conversations: conversationsAlt,
        seenMessageIds: [],
        seenMessages: [],
        accounts: [],
        messages: [],
        image: favicon.src
    } as User
));

export const userIds = users.map((user) => user.id);

export const messages = Array.from({ length: 10 }, (_, index) => index + 1).map((number) => (
    {
        id: "fdaksfjdsjfdklsfjdsl;fds",
        body: number % 3 === 0 ? "Hello, how are you?" : number % 2 === 0 && "https://gitlab.com/MaskedRedstonerProZ",
        image: number % 3 !== 0 && number % 2 !== 0 && next,
        createdAt: new Date(),

        seenIds: userIds,
        seen: users,

        conversationId: "1",
        conversation: {
            id: "sfgdfgfsdgfdg",
            createdAt: new Date(),
            lastMessageAt: new Date(),
    
            userIds: userIds,
            users: users,
        } as Conversation,

        senderId: users[0].id,
        sender: users[0],
    } as Message
));

export const messageIds = messages.map((message) => message.id);

export const conversations = Array.from({ length: 20 }, (_, index) => index + 1).map((number, i) => (
    {
        id: number.toString(),
        createdAt: new Date(),
        lastMessageAt: new Date(),
        name: number % 4 === 0 && "adfdfdsfdfsds",
        isGroup: number % 4 === 0,

        messagesIds: messageIds,
        messages: messages,

        userIds: userIds,
        users: i === 7 || i === 15 ? users.slice(undefined, 3) : users,
    } as Conversation
));