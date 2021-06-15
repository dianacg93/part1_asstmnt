select s.name, c.name, s.city from salesman s
join customer c 
on s.salesman_id = c.customer_id
where s.city=c.city