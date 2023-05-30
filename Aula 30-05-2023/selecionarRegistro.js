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

        //ex 01 - 
        var SQL = "select * from agenda"; 

        //ex 02 - e se os nomes estiverem em ordem alfabética?
        var SQL = "select * from agenda order by Nome"

        con.query(
            SQL, function(err, result){
                if(err) throw err;
                console.log("Dados da tabela");
                result.forEach(
                    (row) => {
                    //console.log(row);
                    var Str = row.nome + "mora em " + row.endereco;
                    console.log(Str);
                  }
                  );
            }
        );
    }
);