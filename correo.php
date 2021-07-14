<?php
    $destinatario = 'cristiannolasco@upeu.edu.pe';
    // esto es al correo que se enviara el mensaje

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $dni = $_POST['dni'];
    $fecha = $_POST['fecha'];
    $genero = $_POST['genero'];
    $correo= $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    $envioRegistro="Datos del usuario registrado"."\nNombre:". $nombre . "\nApellido:". $apellido ."\nSu DNI:". $dni ."\nFecha de nacimiento:". $fecha ."\nGenero:" . $genero ."\nCorreo". $correo ."\nContraseña:". $contrasena;

    mail($destinatario,"Contacto",$envioRegistro);
    header("Location:indexxx.html");

?>