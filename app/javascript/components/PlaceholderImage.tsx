import React from "react"

export function PlaceholderImage({ alt }: { alt: string }) {
    return (
        <svg aria-label="Placeholder: thumbnail" className="bd-placeholder-img" height="225" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">{alt}</text>
        </svg>
    )
}