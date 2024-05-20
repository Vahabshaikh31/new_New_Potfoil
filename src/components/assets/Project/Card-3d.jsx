import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/Card-3d";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router for navigation
import { ProjectData } from './Data';

export function ThreeDCardDemo() {
    const navigate = useNavigate();

    return (
        <div className="flex mt-40 flex-wrap justify-center gap-24">
            {ProjectData.map((item, index) => (
                <CardContainer key={index} className="inter-var flex flex-col items-center">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col items-center">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {item.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                        >
                            {item.content}
                        </CardItem>

                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={item.IMG}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt={item.title}
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-4 w-full">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href={item.GithubLink}
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                View on GitHub →
                            </CardItem>
                           
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}
