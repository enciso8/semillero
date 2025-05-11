<?php
// conexión
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>comerxia.app</title>
  <!-- Bootstrap & Bootstrap Icons -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
 <link rel="icon" href="favicon.png" type="image/x-icon">
<link rel="stylesheet" href="style.css">
  
</head>

<body>

    <?php include('nav.php'); ?>
 
    <?php include('filter.php'); ?>
    <?php include('footer.php'); ?>

    <script src="script.js"></script>
  

    
 <div class="ses-container">
    <!-- 🖼 LOGO -->
            <img class="logo" src="img/logo.png" alt="Logo de usuario" style="width: 400px; display: block; margin: 0 auto 20px;">



                <h2>Iniciar Sesión</h2>

                <form id="loginForm">
                <!-- 👤 Nit-->
                <div class="mb-3 input-group">
                    <span class="input-group-text"><i class="bi bi-person-fill"></i>Usuario</span>
                    <input type="text" class="form-control" id="usuario" name="usuario" placeholder="Nit" required>
                </div>

                <!-- 🔒 Contraseña -->
                <div class="mb-3 input-group">
                    <span class="input-group-text"><i class="bi bi-lock-fill"></i>clave</span>
                    <input type="password" class="form-control" id="clave" name="clave" placeholder="Clave" required>
                </div>

                <!-- 🔘 Botón -->
            <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary me-2">Ingresar</button>
            <button type="button" class="btn btn-secondary ms-2" onclick="window.location.href='index.php'">Cancelar</button>
            </div>

            <div class="text-center mt-3">
            <p>¿Ingresar por primera vez? <a href="registro_emp.php" class="btn btn-outline-success">Registrarse</a></p>
            </div>

            </form>

</div>


</body>

</html>