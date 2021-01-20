<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

class RestaurantFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Restaurant::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'Number one pizza',
            'address' => 'Test address',
            'city' => 'Test city',
            'state' => 'Test state',
            'hours' => '9:00am-6:00pm',
            'latitude' => 28.452763,
            'longitude' => -81.412228
        ];
    }
}
