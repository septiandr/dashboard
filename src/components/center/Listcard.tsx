import React, { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";


interface BadgeListProps {
    data: string[];
}

const BadgeList: React.FC<BadgeListProps> = ({ data }) => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);

    const handleCheckboxChange = (item: string) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };

    return (
        <div>
            <div className="flex flex-row justify-between gap-2 flex-wrap mt-4">
                {data.map((item) => (
                    <div key={item} className="bg-[#f7f7f9] w-[49%] h-11 rounded-lg flex items-center justify-between px-4">
                        <div>
                            <input 
                                className="mr-2"
                                type="checkbox"
                                checked={checkedItems.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                            />
                            <label className="font-bold">
                                {item}
                            </label>
                        </div>
                        <div>
                            <CiMenuKebab/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BadgeList