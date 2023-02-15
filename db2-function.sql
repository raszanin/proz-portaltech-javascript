CREATE OR REPLACE FUNCTION calculo
()
RETURN number
IS
BEGIN 
  RETURN SELECT sum(clientes) AS 'QtdeCliente' FROM clientes where datacadastro = date(now)
end calculo;