var obj = {
    'nome':'igor', 'idade' : '30', 'grau de estudo': 'dev junior', 'func': function(){
        console.log(this.function.nome)
    }
};
obj.func();