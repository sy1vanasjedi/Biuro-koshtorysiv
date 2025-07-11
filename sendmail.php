<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ua', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('sheogoradik@gmail.com', 'Клієнт');
    $mail->addAddress('coder.radik@gmail.com');
    $mail->Subject = 'Запит від клієнта';

    //Letter body
    $body = '<h1>Лист від клієнта</h1>';

    if(trim(!empty($_POST['telephone'])){
        $body.='<p><strong>Телефон клієнта:</strong> '.$_POST['telephone'].'</p>';
    }

    if(trim(!empty($_POST['name'])){
        $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
    }

    $mail->Body = $body;

    //Sending
    if (!$mail->send()) {
        $message = 'Помилка';
    } else {
        $message = 'Запит відправлено';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>