(define gao (n)
 (do ((d (do ((i (- n 1) (- i 1))
              (d '() (cons i d)))
             ((< i 0) d))
         (append (cddr d) (list (car d)))))
  	 	((= nil (cdr d)) (car d)))
)
(print (gao 987654321))

(print (do ((i (- 10 1) (- i 1))
              (d '() (cons i d)))
             ((< i 0) d)))