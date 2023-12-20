import { useEffect, useState } from "react";
import img from "../../assets/img.jpeg";
import img2 from "../../assets/img2.png";
import { CiMenuKebab } from "react-icons/ci";

interface UserData {
    name: string;
    avatar: string;
    date: string;
    total: number;
    isIncome: boolean;
}

const users: UserData[] = [
    {
        name: "John Doe",
        avatar: img,
        date: "2023-12-25",
        total: 500,
        isIncome: false
    },
    {
        name: "Alice Smith",
        avatar: img2,
        date: "2023-12-26",
        total: 700,
        isIncome: false
    },
    {
        name: "John Doe",
        avatar: img,
        date: "2023-12-25",
        total: 500,
        isIncome: true
    },
];

const formatDate = (dateString: string) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
};

const LastTransaction: React.FC = () => {
    const [sortedUsers, setSortedUsers] = useState<UserData[]>([]);

    const formatAndSortData = (type: string) => {
        const formattedData = users.map((user) => ({
            ...user,
            date: formatDate(user.date),
        }));

        let sortedData: UserData[] = [];
        if (type === 'newest') {
            sortedData = formattedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (type === 'oldest') {
            sortedData = formattedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        setSortedUsers([...sortedData]);
    };

    useEffect(() => {
        formatAndSortData('newest'); // Default sorting saat komponen dimuat
    }, []);

    return (
        <div className="bg-white rounded-xl w-[65%] mr-2">
            <div className="flex justify-between p-3">
                <h2 className="font-bold">Last Transactions</h2>
                <div className="flex gap-5">
                    <a className="text-black text-sm cursor-pointer" onClick={() => formatAndSortData('newest')}>Newest</a>
                    <a className="text-black text-sm cursor-pointer" onClick={() => formatAndSortData('oldest')}>Oldest</a>
                </div>
            </div>
            <div>
                {sortedUsers.map((item, index) => (
                    <div key={index} className="py-3 border-t-2 flex justify-between px-5">
                        <div className="flex gap-2">
                            <div className="rounded-full mx-2">
                                <img width={30} src={item.avatar} alt={`${item.name}'s avatar`} style={{ borderRadius: '50%' }} />
                            </div>
                            <div>
                                <h2 className="font-bold">{item.name}</h2>
                                <p className="text-xs text-[#222222]">{item.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 justify-around">
                            <h2 className="font-bold">{item.isIncome ? '+' : '-'} ${item.total}</h2>
                            <CiMenuKebab/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LastTransaction;
