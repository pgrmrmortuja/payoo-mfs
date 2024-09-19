document.getElementById('btn-add-money').addEventListener('click' , function(event){
    event.preventDefault();

    if(isNaN(inputValue('input-add-money'))){
        alert('Failed to add money');
        return;
    }
    
    if(inputValue('input-pin-number') === 123){ 
        const newBalance = textValue('account-balance') + inputValue('input-add-money');

        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
        const date = new Date();

        p.innerText = 'Added: ' + inputValue('input-add-money') + ' Tk.  New Balance: ' + newBalance + ' Tk. Time: '+ date;

        document.getElementById('transaction-container').appendChild(p);

        document.getElementById('add-money-form').classList.add('hidden');

    }
})