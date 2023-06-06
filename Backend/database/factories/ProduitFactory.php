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
            "img"  => "https://hips.hearstapps.com/hmg-prod/images/best-skincare-products-1656081764.jpg?crop=1.00xw:0.503xh;0,0.279xh&resize=1200:*",
            "Categorie_id" => fake()->numberBetween(1,12)
        ];
    }
}
