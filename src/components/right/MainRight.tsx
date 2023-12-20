import ExpenseAndIncome from "./ExpenseAndIncome"
import LatestSpending from "./LatestSpending"
import Premium from "./Premium"

function MainRight() {
  return (
    <div className="bg-white w-[30%] py-5 px-8">
        <ExpenseAndIncome/>
        <LatestSpending/>
        <Premium/>
    </div>
  )
}

export default MainRight