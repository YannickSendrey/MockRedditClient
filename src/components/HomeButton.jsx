import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
    const navigate = useNavigate();
    const goHome = () => {
        let path = '/';
        navigate(path);
    }
    
    return (
        <div onClick={goHome}>
            <p>Home</p>
        </div>
    )
}