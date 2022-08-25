import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import image1 from "../../../images/pexels-aleksandar-pasaric-1510610.jpg";
import image2 from "../../../images/pexels-aleksandar-pasaric-1718758.jpg";
import image3 from "../../../images/pexels-aleksandar-pasaric-2105239.jpg";
import image4 from "../../../images/pexels-aleksandar-pasaric-3029352.jpg";
import image5 from "../../../images/pexels-brett-sayles-2069341.jpg";
import image6 from "../../../images/pexels-itzyphoto-2901581.jpg";

export default function DragAndDrop() {
    const portfolioImages = [
        {
            id: "1",
            name: "image 1",
            thumb: image1,
        },
        {
            id: "2",
            name: "image 2",
            thumb: image2,
        },
        {
            id: "3",
            name: "image 3",
            thumb: image3,
        },
        {
            id: "4",
            name: "image 4",
            thumb: image4,
        },
        {
            id: "5",
            name: "image 5",
            thumb: image5,
        },
        {
            id: "6",
            name: "image 6",
            thumb: image6,
        },
    ];

    const [images, updateImages] = useState(portfolioImages);

    function handleDrag(result) {
        const items = Array.from(images);
        const [draggedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, draggedItem);

        updateImages(items);
    }

    return (
        <>
            <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId="images">
                    {(provided) => (
                        <div
                            className="imagesCon"
                            {...provided.droppableProbs}
                            ref={provided.innerRef}
                        >
                            {images.map(({ id, name, thumb }, index) => {
                                return (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <div
                                                key={id}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className="imageCon"
                                            >
                                                <img
                                                    className="image"
                                                    src={thumb}
                                                    alt={`${name} Thumb`}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    );
}
