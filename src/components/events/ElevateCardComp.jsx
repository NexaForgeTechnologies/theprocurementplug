import React from 'react';

const ElevateCard = ({ cards }) => {
    return (
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="rounded-[6px] p-5 h-[280px] md:h-[400px] flex flex-col justify-between"
                    // className="rounded-[6px] px-5 pb-5 pt-5 md:pt-12 h-[280px] md:h-[436px] flex flex-col justify-between"
                    style={{
                        backgroundImage: `linear-gradient(to bottom, ${card.bgFrom}, ${card.bgTo})`,
                        color: card.textColor,
                    }}
                >
                    <div>
                        <span className="text-[20px] md:text-3xl">{card.prefix}</span>
                        <h3 className="text-2xl md:text-6xl font-semibold mb-4 md:mb-8">{card.title}</h3>
                        <p className="text-[20px]">{card.subtitle}</p>
                    </div>
                    <p className="text-2xl font-semibold">{card.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ElevateCard;