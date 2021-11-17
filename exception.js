/*В try catch конструкцию завернуть код: console.log(a), let a = 3. 
И вывести ошибку – ‘let перед использованием нужно объявить’. 
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
*/

try {
    console.log(a);
    let a = 3;      
} catch(err) {
    console.log('let перед использованием нужно объявить');
};

function nullDevision(b, c) {
    let d = b/c;
    
    try{
            
        if (c != 0){
            console.log (d);
        } else { 
            throw new Error('На ноль делить нельзя'); 
        } 

    } catch (e){
        console.log(e.message); 
    }
};

nullDevision (5,0);