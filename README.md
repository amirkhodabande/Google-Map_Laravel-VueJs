# GoogleMap in Vue with Laravel apis

### A simple application to learn how to import googlemap to a laravel-vue project and how to add some locatoins to the map from database.

- Laravel

- VueJs

- vue2-google-maps


1. Clone the project and cd to the main folder


2. install composer dependencies via this command
   : `composer:install`


3. Connect to your own database and run database migration
   : `php artisan migrate`


4. Run database Seeder or use Factories to make some fake locations(Restaurants)
   : `php artisan db:seed`


5. Create an Api key for your self, you can check this Page 
   : `https://developers.google.com/maps/documentation/javascript/get-api-key`


6. Put your key in **resources/js/app.js:11**
   : `key: Your Key`


   * You can add marker any where in map with rightclick, if you want to save that locations to DB the only things that you need is add an Api and call that api when this click happend in vueJs => **resources/js/app.js:82>handleMapClick()** *

   

## Done.

**Be Happy:)**

![alt](https://github.com/amirkhodabande/Google-Map_Laravel-VueJs/blob/master/public/pre.PNG)	   
