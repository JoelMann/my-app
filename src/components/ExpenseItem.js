import './ExpenseItem.css'
function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>March 27th, 2020</div>
            <div className='expense-item__description'>
                <h2>Judo</h2>
                <div className='expense-item__price'>$169.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem