import { useState, useEffect } from "react";

export default function CatFacts() {
    const [facts, setFacts] = useState([]);

    useEffect(() => {
        async function getCatFacts() {
            try {
                const response = await fetch("https://catfact.ninja/facts");
                if (!response.ok) throw new Error("Failed to fetch");
                
                const data = await response.json();
                setFacts(data.data);

            } catch (error) {
                console.error("Error fetching cat facts:", error);
            }
        }
        getCatFacts();
    }, []);

    return (
        <div>
            <ul>
                {facts.map((fact, index) => (
                    <li key={index}>{fact.fact}</li>
                ))}
            </ul>
        </div>
    );
}
