<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "Title" => fake()->name(),
            "Desc"  => fake()->text(),
            "Price"  => fake()->numberBetween(100,600),
            "img"  => "https://www.zdnet.com/a/img/resize/b309c0b17aed66661891b83514d214eb341b9774/2022/03/14/462c9ae5-d26f-4274-8f7b-b138e5c4eac7/iphone-se-2022-2.jpg?auto=webp&precrop=4032,2265,x0,y356&width=1280",
            "Categorie_id" => fake()->numberBetween(1,12)
        ];
    }
}
