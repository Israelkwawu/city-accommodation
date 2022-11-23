<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = storage_path() . "/data/countries+states+cities.json"; // ie: /app/storage/json/filename.json
        $countries = json_decode(file_get_contents($json));

        foreach ($countries as $country) {
            Country::create([
                "country" => $country->name,
                "iso2" => $country->iso2,
                "iso3" => $country->iso3,
                "phone_code" => $country->phone_code,
                "currency" => $country->currency,
                "currency_name" => $country->currency_name,
                "currency_symbol" => $country->currency_symbol,
                "states_cities" => json_encode($country->states),
            ]);
        }
    }
}
