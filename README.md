Give Freely - README and steps to start app

Steps to start app:
1- run "yarn"
2- run "yarn dev" to start Frontend App (http://127.0.0.1:5174/)
3- run "yarn server" to start Backend App (http://localhost:5005/)

--------------------------------------------------------------------

Important Pages
1- /products
  - Home page to view a list of Products
  - /products/:productsId
    - View detail product page
2- /products-add
  - Page with form to add a product

--------------------------------------------------------------------

Important APIs
1- http://localhost:5005/products
  - Fetch all products with GET
    - _page to handle Pagination page
    - _per_page to handle number of products per page
  - Post a product with POST
2- http://localhost:5005/products/:productId
  - Get individual product with GET