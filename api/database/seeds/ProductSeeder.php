<?php

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
                    ['name' => 'Samsung J5 Prime', 'price' => 3000, 'description' => 'phone'],
                    ['name' => 'Dell Latitude E6420', 'price' => 10000, 'description' => 'notebook'],
                    ['name' => 'Ms wireless mouse', 'price' => 3000, 'description' => 'Best electronic device on the market'],
                    ['name' => 'Ms wireless keyboard', 'price' => 3000, 'description' => 'keyboard'],
                    ['name' => 'PhpStorm License', 'price' => 1500, 'description' => 'development']
        ];


        foreach($products as $product) {

            Product::create([
                'name' => $product['name'],
                'description' => $product['description'],
                'price' => $product['price'],
                'image'=>'http://placeholdit.imgix.net/~text?txtsize=50&txt=Item&w=800&h=500'
            ]);
        }
    }
}
