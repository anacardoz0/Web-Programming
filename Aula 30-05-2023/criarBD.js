var  mysql = require('mysql2'); /* a variável mysql APONTA para a biblioteca mysql2*/

var con = mysql.createConnection({ /*Dados da conexão*/ 
    host: "localhost",
    user: "root",
    password: "c@tolic@"
});

con.connect(  /*verifica erro na conexão*/
    function(err){
        if(err) throw err;
        console.log("Conexao realizada com sucesso!!");

        var SQL = "create database aulaBDeJS";
        con.query(
            SQL, function(err, result){
                if(err) throw err;
                console.log("BD schema criado com sucesso!")
            }
        );
    }
);

/*con.end();*/