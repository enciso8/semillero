<?php
// conexión
?>

<!DOCTYPE html>
<html lang="es">

 

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro de Empresa</title>

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

      <div class="emp-container">
  
                <form class="empresa-form">
                    <h2>Registro de Empresa</h2>

                              <div class="form-group">
                                <label for="fecha">Fecha:</label>
                                <input type="date" id="fecha" name="fecha">
                              </div>

                          <div class="form-group">
                            <label for="nombre_empresa">Nombre de la Empresa:</label>
                            <input type="text" id="nombre_empresa" name="nombre_empresa">
                          </div>

                          <div class="form-group">
                            <label for="nit">Nit:</label>
                            <input type="number" id="nit" name="nit">
                          </div>

                          <div class="form-group">
                            <label for="telefono">Teléfono:</label>
                            <input type="tel" id="telefono" name="telefono">
                          </div>

                          <div class="form-group">
                            <label for="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion">
                          </div>

                          <div class="form-group">
                            <label for="email">Correo:</label>
                            <input type="email" id="email" name="email">
                          </div>

                          <div class="form-group">
                            <label for="logo">Logo:</label>
                            <input type="file" id="logo" name="logo">
                          </div>

                          <div class="form-group">
                            <label for="ciudad">Ciudad:</label>
                            <input type="text" id="ciudad" name="ciudad">
                          </div>

                          <div class="form-group">
                            <label>Empresa Legalmente Constituida:</label>
                            <div class="radio-group">
                              <label><input type="radio" name="legal" value="sí"> Sí</label>
                              <label><input type="radio" name="legal" value="no"> No</label>
                            </div>
                          </div>

                          <div class="form-group">
                            <label for="categoria">Categoría de la empresa:</label>
                            <select id="categoria" name="categoria" required>
                              <option value="">Seleccione</option>
                              <option value="Accesorios para Vehículos">Accesorios para Vehículos</option>
                              <option value="Agro">Agro</option>
                              <option value="Alimentos y Bebidas">Alimentos y Bebidas</option>
                              <option value="Consultoría">Consultoría</option>
                              <option value="Tecnología">Tecnología</option>
                              <option value="Otra">Otra</option>
                              <!-- Puedes agregar más categorías -->
                            </select>
                          </div>

                          <div class="form-group">
                            <label for="estado">Estado:</label>
                            <select id="estado" name="estado">
                              <option value="activo">Activo</option>
                              <option value="inactivo">Inactivo</option>
                            </select>
                          </div>

                          <div class="form-group">
                            <label for="clave">Clave:</label>
                            <input type="password" id="clave" name="clave">
                          </div>

                          <div class="d-flex justify-content-between">
                            <button type="submit" class="btn-registrar">Registrar</button>
                            <button type="reset" class="btn-limpiar">Limpiar</button>
                          </div>

                          <a href="login.php">¿Ya tienes cuenta? Iniciar Sesión</a>
                </form>
      </div>
</body>
</html>