var saldo = document.getElementById('saldo');

saldo.innerHTML = 1000;

function bayar(){
	saldo.innerHTML = 0;
	alert("Dibayar!, Saldo anda tersisa: " + 0);
}