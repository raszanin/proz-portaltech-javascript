DELIMITER $$
CREATE PROCEDURE busca_vendas ()
  BEGIN
    select * from produtos 
    where datavenda = date(now)
  END
DELIMITER;