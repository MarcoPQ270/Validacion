$(init)
function init(){
    $("#btn").on("click", function()  {
        $("#formulario").validate
        ({
        rules:
        {
        correo:{required:true, email:true, minlength:8, maxlength:80},
        pwd:{required:true},
        fecha:{required:true, date:true} ,  
        sexo:{},
        ingreso:{required:true, number:true, maxlength:10},
        }, 
        messages:
        {
            correo:{required:'El correo es requerido', email:'El formato de email es incorrecto', minlength:'El minimo de caracteres es ', maxlength:'eEl maximo de caracteres es 25'},
            pwd:{required:'La contraseña es requerida'},
            fecha:{required:'La fecha es requerida'},
            sexo:{},
            ingreso:{required:'El sueldo es requerido', number:'Solo se aceptan numeros'},
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        }, 
        
           errorElement:"div",
           errorClass:"invalid",
           errorPlacement:function(error, element){
               error.insertAfter(element)
           },
           submitHandler:function(form){

            saveData();
           }
        });
        
   });
}
function saveData(){
    alert("El formulario es valido y guardado");
}