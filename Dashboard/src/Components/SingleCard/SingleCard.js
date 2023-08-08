import React from "react";
import "./SingleCard.css";

const SingleCard = (props) => {
    const { title, totalNumber, icon: IconComponent } = props.item;
    return (
        <>
            <div className="single__card bg-[#FFFFFF]">
                <div className="card__content flex justify-between">
                    <div className="bg-[#68C6C5] icons_card">
                        <IconComponent className="h-11 w-11 p-2" />
                    </div>
                    <h4>{title}</h4>
                </div>
                <div className="flex items-start"> {/* Use flex and align-items properties */}
                    <span className="text-[#68C6C5] text-2xl">{totalNumber}</span>
                </div>
            </div>
        </>
    );
};

export default SingleCard;
