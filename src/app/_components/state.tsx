"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import { useState } from "react";

const CardsWithStateInput = () => {
    const generateCards = () => {
        return Array.from({ length: 1000 }, (_, index) => ({
            id: index + 1,
            content: ` ${faker.hacker.phrase()}`
        }));
    };
    const [cards, setCards] = useState(generateCards());

    const [inputText, setInputText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            const newCard = {
                id: cards.length + 1,
                content: inputText
            };
            setCards([...cards, newCard]);
            setInputText('');
        }
    };

    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-bold mb-4">Cards Component (using useState)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {cards.map(card => (
                    <Card key={card.id}>
                        <CardHeader>
                            <CardTitle>Card #{card.id}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{card.content}</p>
                        </CardContent>

                    </Card>
                ))}
            </div>
            <form className="sticky bottom-4 bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Add a new card..."
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    rows={3}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Add Card
                </button>
            </form>
        </div>
    );
};

export default CardsWithStateInput;