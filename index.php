<?php
//
?>

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>comerxia.app</title>
  <link rel="stylesheet" href="style-inicio.css">
</head>

<body>

  <div class="fondo"></div>
  <div class="contenedor">
      <img class="logo" src="logo.png" alt="Logo"/>
      <p><strong>Bienvenid@</strong></p>
      <p>Seleccione su ciudad:</p>

      <form action="home.php" method="get" onsubmit="guardarCiudad()">
        <select name="ciudad" id="ciudad">
          <option value="monteria">Montería</option>
        </select><br/>
        <button type="submit">Entrar</button>
      </form>
  </div>

  <script>
    function guardarCiudad() {
      const ciudadSeleccionada = document.getElementById("ciudad").value;
      localStorage.setItem("ciudad", ciudadSeleccionada);
    }
  </script>
</body>
</html>
