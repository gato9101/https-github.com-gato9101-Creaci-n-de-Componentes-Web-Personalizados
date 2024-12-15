<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicios PHP</title>
    <link rel="stylesheet" href="./assets/style.css">
</head>
<body>
    
    <h1>Manipulación y Creación de Funciones con Arrays en PHP</h1>
    <hr>

    <?php
    // Inicia la sesión para mantener el estado del arreglo aleatorio
    session_start(); 

    // Generar un nuevo arreglo aleatorio si se ha solicitado o si no existe

    if (isset($_POST['nueva_sesion'])) {
        unset($_SESSION['arrayRandom']);
    }
    if (!isset($_SESSION['arrayRandom'])) {
        $_SESSION['arrayRandom'] = array();
        for ($i = 0; $i < 10; $i++) {
            $_SESSION['arrayRandom'][] = rand(1, 100);
        }
    }

    // Obtener el arreglo aleatorio de la sesión
    $arrayRandom = $_SESSION['arrayRandom'];
    ?>

    <div class="result">
        <h2>Defina una función que reciba dos números y devuelva su suma.</h2>
        <form method="post">
            <input type="number" name="num1" placeholder="Número 1" required>
            <input type="number" name="num2" placeholder="Número 2" required>
            <button type="submit" name="operacion" value="suma">Sumar</button>
        </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['operacion'])) {
                $num1 = $_POST['num1'];
                $num2 = $_POST['num2'];
                function suma($num1, $num2) {
                    return $num1 + $num2;
                }
                $resultado = suma($num1, $num2);
                echo "Resultado de la suma: $resultado";
            }
        ?>
    </div>

    <div class="result">
        <h2>Defina una función que reciba un array de números y devuelva el promedio de los elementos.</h2>
        <p>Arreglo definido</p>
        <p>[64, 56, 92, 54, 35, 49, 87, 34, 95, 18]</p>
        <?php
            $array = array(64, 56, 92, 54, 35, 49, 87, 34, 95, 18);
            function promedio($array) {
                $sum = array_sum($array);
                $count = count($array);
                return $count ? $sum / $count : 0;
            }        
            $promedio = promedio($array);
            echo "Promedio del arreglo: $promedio";
        ?>
    </div>
    
    <div class="result">
        <h2>Cree un array de 10 números enteros aleatorios.</h2>
        <?php
            function MostrarArray($array) {
                echo "<table border='1' cellpadding='5'>";
                foreach ($array as $valor) {
                    echo "<tr><td>$valor</td></tr>";
                }
                echo "</table>";
            }
            MostrarArray($arrayRandom);
        ?>
    </div>

    <div class="result">
        <h2>Funcion para ordenar el array en orden ascendente</h2>
        <?php
            function ordenarAscendente($array) {
                sort($array);
                return $array;
            }
            $arrayOrderAsc = ordenarAscendente($arrayRandom);
            echo "<h3> Arreglo ordenado ascendente:</h3>";
            MostrarArray($arrayOrderAsc);
        ?>
    </div>

    <div class="result">
        <h2>Funcion encontrar el valor máximo y el valor mínimo del array</h2>
        <?php
            function valorMaximo($array) {
                return max($array);
            }

            function valorMinimo($array) {
                return min($array);
            }
            echo "<h3> Valor Minimo Array:</h3>" . valorMinimo($arrayRandom);
            echo "<h3> Valor Maximo Array:</h3>" . valorMaximo($arrayRandom);
        ?>
    </div>

    <div class="result">
        <h2>Funcion para calcular la suma de todos los elementos del array.</h2>
        <?php
            function sumaArray($array) {
                return array_sum($array);
            }
            echo "<h3> Suma de todos los elementos del array:</h3>" . sumaArray($arrayRandom);        
        ?>
    </div>
    
    <div class="result">
        <h2>Funcion para contar el número de elementos en el array.</h2>
        <?php
            $numeroElementos = count($arrayRandom);
            echo "<h3> Numero de elementos en el array:</h3>" . $numeroElementos;        
        ?>
    </div>

    <div class="result">
        <h2>Funcion para buscar un valor específico dentro del array y devolver su índice.</h2>
        <form method="post">
            <input type="number" name="num1" placeholder="Número a buscar" required>
            <button type="submit" name="buscar" value="buscar">Buscar</button>
        </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['buscar'])) {
                $num1 = $_POST['num1'];
                function buscarValor($array, $num1) {
                    $index = array_search($num1, $array);
                    return $index !== false ? $index : -1;
                }
                $indice = buscarValor($arrayRandom, $num1);
                echo $indice != -1 ? "Valor $num1 encontrado en el índice $indice" : "Valor $num1 no encontrado";
            }
        ?>
    </div>

    <div class="result">
        <h2>Funcion para filtrar los valores pares y almacenarlos en un nuevo array</h2>
        <?php
            function filtrarPares($array) {
                return array_filter($array, function($num) {
                    return $num % 2 == 0;
                });
            }
            $arrayPares = filtrarPares($arrayRandom);
            echo "<h3> Nuevo Array con valores pares:</h3>"; 
            echo  MostrarArray($arrayPares);
        ?>
    </div>

    <div class="result">
        <h2>Función que reciba un array y devuelva un nuevo array con los valores duplicados </h2>
        <form method="post">
            <label for="array1">Ingrese los valores del array separados por comas:</label>
            <input type="text" name="array1" placeholder="Ejemplo: 1,2,3,4,5" required>
            <button type="submit" name="duplicar" value="duplicar">Duplicar Valores</button>
        </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['duplicar'])) {
                $array1 = explode(",", $_POST['array1']);
                $array1 = array_map('intval', $array1); // Convertir a enteros
                function duplicarValores($array) {
                    return array_map(function($num) {
                        return $num * 2;
                    }, $array);
                }
                $arrayDuplicado = duplicarValores($array1);
                echo "<h3>Nuevo Array con valores duplicados:</h3>"; 
                MostrarArray($arrayDuplicado);
            }
        ?>
    </div>
    
    <div class="result">
        <h2>Función que reciba dos arrays y devuelva un array con los valores comunes entre ambos.</h2>
        <form method="post">
            <label for="array2">Ingrese los valores del primer array separados por comas:</label>
            <input type="text" name="array2" placeholder="Ejemplo: 1,2,3,4,5" required>
            <label for="array3">Ingrese los valores del segundo array separados por comas:</label>
            <input type="text" name="array3" placeholder="Ejemplo: 4,5,6,7,8" required>
            <button type="submit" name="comunes" value="comunes">Encontrar Valores Comunes</button>
        </form>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['comunes'])) {
                $array2 = explode(",", $_POST['array2']);
                $array2 = array_map('intval', $array2);   // Convertir a enteros
                $array3 = explode(",", $_POST['array3']);
                $array3 = array_map('intval', $array3);  // Convertir a enteros
                function valoresComunes($array1, $array2) {
                    return array_intersect($array1, $array2);
                }
                $arrayComunes = valoresComunes($array2, $array3);
                echo "<h3>Nuevo array con valores comunes entre los dos arreglos:</h3>"; 
                MostrarArray($arrayComunes);
            }
        ?>
    </div>

    <div class="result">
        <h2>Generar nueva sesión</h2>
        <form method="post">
            <button type="submit" name="nueva_sesion" value="nueva_sesion">Generar Nueva Sesión</button>
        </form>
    </div>
</body>
</html>
