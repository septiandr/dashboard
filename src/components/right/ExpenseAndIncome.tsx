const financialData: Array<FinancialData> = [
    { month: "October", expenses: 700, income: 1500 },
    { month: "November", expenses: 600, income: 1400 },
    { month: "December", expenses: 800, income: 1600 },
    { month: "January", expenses: 500, income: 1200 },
    { month: "February", expenses: 600, income: 1800 }
];
interface FinancialData {
    month: string;
    expenses: number;
    income: number;
}
import ProgressBar from "./Progress";
function ExpenseAndIncome() {

    const totalExpenses = financialData.reduce((total, data) => total + data.expenses, 0);
    const totalIncome = financialData.reduce((total, data) => total + data.income, 0);

    // Menghitung persentase expenses dan income
    const total = totalExpenses + totalIncome;
    const expensesPercentage = ((totalExpenses / total) * 100).toFixed(0);
    const incomePercentage = ((totalIncome / total) * 100).toFixed(0);
    return (
        <div className="my-5 mx-3 border-2 rounded-xl p-4">
            <h2 className='font-bold'>Expense and Income</h2>
            <div className="flex justify-between mt-5">
                <div>
                    <p className="text-lg font-bold">Expense</p>
                    <h3 className="text-4xl font-bold">{expensesPercentage}%</h3>
                    <p className="text-sm text-[#c3c5c7]">{totalExpenses}</p>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center font-bold">|</p>
                    <p>Vs</p>
                    <p className="text-center font-bold">|</p>
                </div>
                <div>
                    <p className="text-lg font-bold">Income</p>
                    <h3 className="text-4xl font-bold">{incomePercentage}%</h3>
                    <p className="text-sm text-[#c3c5c7]">{totalIncome}</p>
                </div>
            </div>
            <div className="mt-5">
                <ProgressBar
                    leftPercentage={expensesPercentage}
                    rightPercentage={incomePercentage}
                    leftColor="#545de6"
                    rightColor="#ffa70f"
                />
            </div>
        </div>
    )
}

export default ExpenseAndIncome