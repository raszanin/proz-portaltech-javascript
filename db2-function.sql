CREATE OR REPLACE FUNCTION calculo
(numero in number)
RETURN number
IS
BEGIN 
  RETURN (numero + 30)
end calculo;