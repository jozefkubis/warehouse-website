"use client";

import { useState, useEffect } from "react";
import MultiCarousel from "./MultiCarousel";

export default function ClientSideVisibleItems({
    defaultVisibleItems,
    autoSlide,
    autoSlideInterval,
    children,
}) {
    const [visibleItems, setVisibleItems] = useState(defaultVisibleItems);

    useEffect(() => {
        const updateVisibleItems = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth < 768) {
                setVisibleItems(1); // Mobilné zariadenia
            } else if (screenWidth < 1024) {
                setVisibleItems(4); // Tablety
            } else if (screenWidth < 1400) {
                setVisibleItems(5); // Stredné obrazovky
            } else {
                setVisibleItems(6); // Veľké obrazovky
            }
        };

        // Inicializácia pri načítaní komponentu
        updateVisibleItems();

        // Event listener na zmenu veľkosti okna
        window.addEventListener("resize", updateVisibleItems);

        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    return (
        <MultiCarousel
            autoSlide={autoSlide}
            autoSlideInterval={autoSlideInterval}
            visibleItems={visibleItems}
        >
            {children}
        </MultiCarousel>
    );
}
