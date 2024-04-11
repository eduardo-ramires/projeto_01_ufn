function sucesso(){
    try {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const form = document.getElementById("formulario");
        var senha1 = document.getElementById("senha1").value;
        var senha2 = document.getElementById("senha2").value;

        if (form.reportValidity() && emailRegex.test(email)) {
            alert("Cadastro feito com sucesso")
        }else if(senha1 != senha2){
            alert("As senha deve ser igual a confirmação")
        }else {
            alert("Preencha os campos pendentes")
        }
    } catch (error) {
        console.log("Erro ao tentar fazer cadastro")
    }
}

function entrou(){
    try {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const form = document.getElementById("formulario");
    
        if (form.reportValidity() && emailRegex.test(email)) {
            alert("Login feito com sucess")
        }else{
            alert("Preencha os campos")
        }
    } catch (error) {
        console.log("Erro ao tentar fazer login")
    }
}

function limpaCampo(){
    try {
        $("#nome").val("");
        $("#email").val("");
        $("#idade").val("");
        $("#telefone").val("");
        $("#endereco").val("");
        $("#observacao").val("");
        $("#senha1").val("");
        $("#senha2").val("");
    } catch (error) {
        console.log("Erro ao tentar fazer login")
    }
}

