<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PropertyType;

class PropertyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $property_types = [
            'residential'=> ['single-family house', 'luxury', 'vacation home', 'townhome', 'condominium', 'duplex', 'triplex', 'fourplex', 'apartment'],
            'commercial' => ['apartment complex', 'gas station', 'grocery store', 'hospital', 'hotel', 'office', 'restaurant', 'shopping center', 'store', 'theater'],
            'industrial'=> ['factory', 'power plant', 'warehouse'],
            'land'=> ['farm', 'orchard', 'ranch', 'timberland'],
            'special purpose'=> ['cemetery', 'government building', 'library', 'park', 'church', 'mosque', 'school']
        ];

        foreach ($property_types as $key => $property_type) {
            PropertyType::create([
                "category" => $key,
                "subcategories" => json_encode($property_type),
            ]);
        }

    }
}
