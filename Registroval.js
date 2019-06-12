$(init)
function init(){
    $("#btn").on("click", function()  {
        $("#formulario").validate
        ({
        rules:
        {
        nombre:{required:true},
       
        corr:{required:true, email:true, minlength:8, maxlength:80},
        pwd:{required:true, maxlength:25},
        edad:{required:true, number:true, maxlength:3},
         }, 
        messages:
        {
        nombre:{required:'El nombre es requerido'},
        corr: {required:'El correo es requerido', email:'El formato de correo es incorrecto', minlength:'Escriba minimo 8 caracteres', maxlength:'Solo se permiten 80 caracteres'},
        pwd:{required:'La contraseña es requerida', minlength:'Se necesitan minimo 8 caracteres', maxlength:'Se necesitan maximo 25 caracteres'},
        edad:{required:'la edad es requerida', number:'Ingrese valores numericos', maxlength:'Ingrese una edad real'},
         }, 
        
           errorElement:"div",
           errorClass:"invalid",
           errorPlacement:function(error, element){
               error.insertAfter(element)
           },
           submitHandler:function(form){

            Savedata();
           }
        });
        
   });
}
function saveData(){
    alert("Formulario Enviado");
}