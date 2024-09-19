document.getElementById('btn-cash-out').addEventListener('click' , function(event){
    event.preventDefault();

    if(isNaN(inputValue('input-cash-out'))){
        alert('Failed to cash out');
        return;
    }
    
    if(inputValue('input-cash-out-pin') === 123){ 
        const newBalance = textValue('account-balance') - inputValue('input-cash-out');

        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
        const date = new Date();

        p.innerText = 'Cash Out: ' + inputValue('input-cash-out') + ' Tk.  New Balance: ' + newBalance + ' Tk. Time: '+ date;

        document.getElementById('transaction-container').appendChild(p);

        document.getElementById('cash-out-form').classList.add('hidden');
    }
})