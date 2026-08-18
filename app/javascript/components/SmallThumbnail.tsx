import React from "react"

export function SmallThumbnail({ src, alt }: { src: string; alt: string }) {
    return (
        <img src={src} alt={alt} className="img-thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
    )
}