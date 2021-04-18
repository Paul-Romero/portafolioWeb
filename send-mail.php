<?php
    $origin = $_POST['from'];
    $target = $_POST['to'];
    $subject = $_POST['subject'];

    //echo "De: ".$origin." Para: ".$target;

    $header = "From: ".$origin."\r\n";
    $header .= "X-Mailer: PHP/".phpversion()."\r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Enviado por: ".$origin."\r\n";
    $message .= "Mensaje: ".$subject."\r\n";
    $message .= "Fecha: ".date('d/m/y',time());
    $topic = "Portafolio Mail-box";

    if(mail($target,$topic,utf8_decode($message),$header)){
        echo "Correo enviado";
    }else{
        echo "Ocurrió un erorr";
    }
    header("Location:index.html");
?>