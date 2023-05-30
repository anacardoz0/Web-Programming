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
    }
);

con.end();