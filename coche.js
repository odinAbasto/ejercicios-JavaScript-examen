//Define la clase coche con los siguientes datos. Ejecuta alguna instrucciones para comprobar que funciona cada metodo

class coche{
    encendido = false;
    velocidad = 0;
    constructor(marca, modelo,patente){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    arrancar(){
        if(this.encendido == true){
            console.log('El coche ya está encendido');
        }else{
            this.encendido = true;
        }
    }
    apagar(){
        if(this.velocidad==0){
            this.encendido = false;
        }else{
            console.log('Para apagar el coche la velocidad debe ser igual a cero');
        }

    }
    acelerar(){
        if(this.encendido == true){
            this.velocidad += 10;
        }else{
            console.log('El coche debe estar encendido para acelerar');
        }
    }
    desacelerar(){
        if(this.encendido == true){
            if(this.velocidad==0){
                console.log('La velocidad es cero, no puedes desacelerar');
            }else{
                this.velocidad -=10;
            }
        }else{
            console.log('El coche debe estar encendido para poder desacelerar');
        }
    }
    toString(){
        return `${this.marca}, ${this.modelo}, ${this.patente}`;
    }
}

let miCoche = new coche('bmx',"x1",1232);
miCoche.arrancar();
miCoche.acelerar();
miCoche.desacelerar();
miCoche.desacelerar();
miCoche.desacelerar();
console.log(miCoche.encendido);
console.log(miCoche.velocidad);