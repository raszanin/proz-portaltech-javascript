create table cliente (
  id_cliente SERIAL PRIMARY key,
  nome VARCHAR NOT NULL,
  sobrenome VARCHAR NOT NULL,
  idade INT NOT NULL
  );
  
  create table pedido (
  id_pedido SERIAL PRIMARY KEY,
  item VARCHAR not NULL,
  quantidade INT not NULL,
  cliente INT NOT NULL,
  CONSTRAINT fk_cliente FOREIGN KEY (cliente) REFERENCES cliente(id_cliente)
  );
  
insert into cliente(nome, sobrenome, idade) VALUES ('Richard', 'Alie', 41);
insert into cliente(nome, sobrenome, idade) VALUES ('Carl', 'Simpson', 39);

insert into pedido(item, quantidade, cliente) VALUES
('Guitarra', 1, 1),
('Bateria', 1, 1),
('Flauta', 1, 2),
('Teclado', 1 ,2)

select ped.id_pedido, cli.nome, cli.idade, ped.item, ped.quantidade from pedido ped
right JOIN cliente cli
on ped.cliente = cli.id_cliente
order by id_cliente ASC;