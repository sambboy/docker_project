
php artisan key:generate
composer install
php artisan migrate:fresh --no-interaction
php artisan db:seed --class=UserSeeder
php artisan db:seed --class=CategorieSeeder
php artisan db:seed --class=ProduitSeeder
apache2-foreground
