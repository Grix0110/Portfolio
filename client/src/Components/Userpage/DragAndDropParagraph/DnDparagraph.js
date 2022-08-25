import React from "react";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ChangeText from "../ChangeText/ChangeText";

export default function DragParagraph() {
    const [editorVisible, setEditorVisible] = useState(false);

    const [paragraphs, updateParagraphs] = useState([
        {
            id: "0",
            message: "some instructions on usage",
        },
        {
            id: "1",
            message: "some information about functionality",
        },
        {
            id: "2",
            message: "some encouraging words to use this page",
        },
    ]);

    const showEditor = () => {
        setEditorVisible(!editorVisible);

    };

    function handleDrag(result) {
        const items = Array.from(paragraphs);
        const [draggedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, draggedItem);

        updateParagraphs(items);
    }

    const onFormInputChange = (e) => {
        const target = e.currentTarget;
        console.log(target.value);
        const newState = paragraphs.map((obj) => {
            if (obj.id === "1") {
                return { ...obj, message: target.value };
            }
            return obj;
        });
        updateParagraphs(newState);
    };

    return (
        <>
            <DragDropContext onDragEnd={handleDrag}>
                <Droppable droppableId="paragraphs">
                    {(provided) => (
                        <div
                            className="paraCon"
                            {...provided.droppableProbs}
                            ref={provided.innerRef}
                        >
                            {paragraphs.map(({ id, message }, index) => {
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
                                                className="infoCon"
                                            >
                                                <p className="paragraph">
                                                    {message}
                                                </p>
                                                <button onClick={showEditor}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            {editorVisible && (
                <ChangeText
                    // inEditId={keyId}
                    onInputChange={onFormInputChange}
                    showEditor={showEditor}
                />
            )}
        </>
    );
}
