import { FaCoins } from "react-icons/fa";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import ChartComponent from "./Chart";

interface FinancialData {
    month: string;
    expenses: number;
    income: number;
}


const financialData: Array<FinancialData>= [
    { month: "October", expenses: 700, income: 1500 },
    { month: "November", expenses: 600, income: 1400 },
    { month: "December", expenses: 800, income: 1600 },
    { month: "January", expenses: 500, income: 1200 },
    { month: "February", expenses: 600, income: 1800 }
];

function MainChart() {

    const [percentage, setPercentage] = useState(0);
    const [isPercentageUp, setIsPercentageUp] = useState(false);

    const countTotalSaving =()=>{
        let total = 0
        financialData.forEach(data =>{
            total += data.income - data.expenses
        })
        return total
    }
    const getPercentage =()=>{
        const lastDataIndex = financialData.length -1
        const lastData = financialData[lastDataIndex].income - financialData[lastDataIndex].expenses
        const beforeLastData = financialData[lastDataIndex-1].income - financialData[lastDataIndex-1].expenses
        const percentage = ((lastData - beforeLastData) / Math.abs(beforeLastData)) * 100;
        setPercentage(parseInt(percentage.toFixed(0)))
        if(lastData - beforeLastData > 0){
            setIsPercentageUp(true)
        }else{
            setIsPercentageUp(false)
        }
    }

    useEffect(() => {
        getPercentage()
    }, []);

  return (
    <div className="p-8 bg-white rounded-xl w-[50%] h-[320px]">
        <div className="flex justify-between">
            <p className="font-bold">Balance statistics</p>
            <select defaultValue={1} className="bg-[#f6f6f6] rounded-md w-16">
                <option value={1}>Filter</option>
            </select>
        </div>
        <div className="flex items-center h-full">
            <div className="w-[40%] h-full">
                <div className="mt-5">
                    <p className="font-bold text-5xl">${countTotalSaving()}</p>
                </div>
                <div className="flex gap-2 items-center mt-3">
                    <div className="text-[#f7ad13]">
                        <FaCoins size={50}/>
                    </div>
                    <p className="text-xl w-24">Your total balance</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    {isPercentageUp ? <FaRegArrowAltCircleUp size={20}/> : <FaRegArrowAltCircleDown size={20}/>}
                    <p>{percentage}%</p>
                </div>
                <p className="w-32 mt-4 text-[#a2a5ad] text-lg">Always see your earning update</p>
            </div>
            <div className="mt-3 w-[60%] h-full flex items-center">
                <ChartComponent data={financialData}/>
            </div>
        </div>
    </div>
  )
}

export default MainChart