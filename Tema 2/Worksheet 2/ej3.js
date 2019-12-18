function crearTabla(){
    document.write("<h1>Ejercicio 7</h1>");
    document.write("<table style=\"text-align:center\">");
    document.write("<th>Número</th><th>Seno</th>");
    for(let i = 0; i < 100; i++){
        document.write("<tr>");
        document.write("<td>"+i+"</td>");
        document.write("<td>"+Math.sin(i).toFixed(2)+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}
