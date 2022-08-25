import "./Uploader.css";
import React, { useState, useEffect } from "react";

export default function Uploader() {
    const [images, setImages] = useState([]);
    const [imageURL, setImageURL] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrl = [];
        images.forEach((image) => newImageUrl.push(URL.createObjectURL(image)));
        setImageURL(newImageUrl);
    }, [images]);

    function onUpload(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            {imageURL.map((imageSrc) => (
                <img className="background" src={imageSrc} alt="alternative" />
            ))}
            <input
                className="imageInput"
                type="file"
                multiple
                accept="image/*"
                onChange={onUpload}
            />
        </>
    );
}