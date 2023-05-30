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

        //ex 01 - inserção de valores 
        var SQL = "insert into agenda(nome, endereco) values('Marina Borges', 'Jardim Botânico')"; /*limite maximo 255 caracteres*/ 

        // ex 02 - é obrigatório escrever (nome, endereco) antes de value? [sim]
        var SQL = "insert into agenda values('André', 'Taguatinga')";

        //ex 03 - e se trocar a ordem de nome e endereco no comando insert? [sim]
        var SQL = "insert into agenda(endereco, nome) values('Asa Norte', 'Luis')";

        //ex 04 - e para inserir duas linhas (registros) no BD? [sim]
        var SQL = " insert into agenda(nome, endereco) values ('João', 'Sudoeste'), ('Amanda', 'Girassol')"
            SQL = SQL + "('Bruno', 'Valença - BA')"; /*menor linha de codigo*/ 
            SQL = SQL + "('Valeria', 'Penha - SC')";

        var SQL = "insert into agenda values ('Pedro','Juazeiro do Norte'), ('Hector','Alagoas'), ('Amélia','Formigas - MG')"

        //ex 05 - e se os dados estiverem nas variáeis Nome e Endereco?

        /*var SQL = "insert into agenda (nome e endereco) values";
        SQL = SQL + "('Nome', 'Endereco')" <--> essas duas 'variáveis' serão inseridas como se fosse um valor de atributo */

        var Nome = "Gustavo";
        var Endereco = "Lisboa";

        var SQL = "insert into agenda(nome, endereco) values";
        SQL = SQL + "('"+ Nome + "', '"+ Endereco + "')"
        console.log(SQL);
        con.query(
            SQL, function(err, result){
                if(err) throw err;
                console.log("Valor atribuido com sucesso!");
            }
        );
    }
);