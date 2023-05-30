var  mysql = require('mysql2'); /* a variável mysql APONTA para a biblioteca mysql2*/

var con = mysql.createConnection({ /*Dados da conexão*/ 
    host: "localhost",
    user: "root",
    password: "c@tolic@",
    database: "aulaBDeJS"
});

con.connect(  /*verifica erro na conexão*/
    function(err){
        if(err) throw err;
        console.log("Conexao realizada com sucesso!!");

        var SQL = "create table agenda(nome varchar(255), endereco varchar(200));"; /*limite maximo 255 caracteres*/ 
        con.query(
            SQL, function(err, result){
                if(err) throw err;
                console.log("Tabela agenda(nome, endereco) criada com sucesso!");
            }
        );
    }
);