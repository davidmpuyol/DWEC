var fecha = new Date();
var fecha85 = new Date();
var fecha187 = new Date();
fecha85.setDate(fecha.getDate()+85);
fecha187.setDate(fecha.getDate()-187);

document.write("fecha85: "+fecha85.toLocaleString()+"<br>");
document.write("fecha187: "+fecha187.toLocaleString()+"<br>");
document.write("Sumamos 2 años a fecha85.<br>");
fecha85.setFullYear(fecha85.getFullYear()+2);
document.write("fecha85: "+fecha85.toLocaleString()+"<br>");
document.write("Restamos 24 horas a fecha187<br>");
document.write("fecha187: "+fecha187.toLocaleString()+"<br>");
var fechaResto = new Date(fecha85.getTime()-fecha187.getTime());
document.write("fechaResto: "+fechaResto.toLocaleString()+"<br>");