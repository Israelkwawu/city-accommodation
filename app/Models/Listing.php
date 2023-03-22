<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Listing extends Model
{
    use HasFactory, SoftDeletes;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'gallery',
        'property_type',
        'sub_property_type',
        'status',
        'currency',
        'currency_symbol',
        'price',
        'address',
        'country',
        'state',
        'city',
        'attributes',
        'description',
        'active',
        'approved',
    ];
}
