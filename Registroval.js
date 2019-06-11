$(init)
function init(){
    $("#btn").on("click", function()  {
        $("#formulario").validate
        ({
        rules:
        {
        nombre:{required:true},
        apellidos:{required:true},
        correo:{required:true, email:true, minlength:8, maxlength:80},
        pwd:{required:true, maxlength:25},
        suel:{required:true, number:true},
        edad:{required:true, number:true, maxlength:3},
        fec:{required:true, date:true}     
        }, 
        messages:
        {
        nombre:{required:'El nombre es requerido'},
        apellidos:{required:'El apellido es requerido'},
        correo: {required:'El correo es requerido', email:'El formato de correo es incorrecto', minlength:'Escriba minimo 8 caracteres', maxlength:'Solo se permiten 80 caracteres'},
        pwd:{required:'La contraseña es requerida', minlength:'Se necesitan minimo 8 caracteres', maxlength:'Se necesitan maximo 25 caracteres'},
        suel:{required:'El sueldo es requerido', number:'Ingrese valores numericos'},
        edad:{required:'la edad es requerida', number:'Ingrese valores numericos', maxlength:'Ingrese una edad real'},
        fec:{required:'La fecha es requerida'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
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

    alert("El formulario es valido y guardado");
}