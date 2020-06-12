SELECT Clientes.Codigo, 
       Clientes.Nome,
       Clientes.Situacao, 
       ClientesUsuarios.Usuario, 
       Planos.Descricao AS Plano, 
       Planos.Velocidade AS down, 
       Planos.VelocidadeUP AS up, 
       ClientesUsuarios.MAC 
       FROM Clientes, 
            Contratos, 
            Planos, 
            ClientesUsuarios 
      WHERE Clientes.Situacao REGEXP 'B|A' 
        AND Clientes.Grupo = ClienteGrupo 
        AND ClientesUsuarios.MAC != 'undefiend' 
        AND (Clientes.Codigo = Contratos.Cliente) 
        AND (Contratos.Plano = Planos.Codigo) 
        AND (Clientes.Codigo = ClientesUsuarios.Cliente) 
