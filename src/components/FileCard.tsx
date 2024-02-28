import { Button, rem } from "@mantine/core";
import { IconDownload, IconShare } from "@tabler/icons-react";
import { Card } from "react-bootstrap";

interface FileCardProps {
    fileName: string,
    fileUrl: string,
    dateCreated: Date
}

export default function FileCard({ fileName, fileUrl, dateCreated }: FileCardProps) {

    return (
        <Card className="bg-[#F7F5FA] text-gray-500 drop-shadow-md p-2 m-[1vh] w-fit h-fit">
            <Card.Header className="flex flex-col">
                <Card.Subtitle>{dateCreated.toLocaleDateString(["en-GB"])}</Card.Subtitle>
                <Card.Title className="text-[20px] font-black">{fileName}</Card.Title>
            </Card.Header>
            <Card.Body
                className="h-[7vh] border-2 border-t-gray-400 border-b-gray-400 border-r-transparent border-l-transparent cursor-pointer"
                onClick={() => {
                    window.open(fileUrl, fileUrl);
                }}
            >
            </Card.Body>
            <Card.Footer className="flex flex-row">
                <div className="flex-1">
                    <Button
                        className="text-gray-500"
                        leftSection={
                            <IconDownload
                                style={
                                    {
                                        width: rem(18),
                                        height: rem(18),
                                        color: "#6b7280"
                                    }
                                }
                                stroke={1.5}
                            />
                        }
                    >
                            <a href={fileName} target="_blank" rel="noopener noreferrer" download>Download</a>

                    </Button>
                </div>
                <div className="flex-1">
                    <Button
                        className="border-2 border-l-gray-400 text-gray-500"
                        leftSection={
                            <IconShare
                                style={
                                    {
                                        width: rem(18),
                                        height: rem(18),
                                        color: "#6b7280"
                                    }
                                }
                                stroke={1.5}
                            />
                        }
                    >
                        <p className="pt-1">Share</p>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    );
}